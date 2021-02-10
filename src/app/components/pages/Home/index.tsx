import { h, Component, createRef } from 'preact';
import MovieService from '../../../services/MovieService';
import Button from '../../shared/Button';
import './style.scss';

export default class Home extends Component {

    movieService: MovieService;

    state = {
        query: '',
        searchResults: [],
        savedMovies: []
    }

    constructor() {
        super();
        this.movieService = new MovieService();
    }

    onSearch = (e) => {
        this.movieService.searchMovies(this.state.query)
        .then(r => {
            if (r.Response == "True") {
                this.setState({ searchResults: r.Search });
            } else {
                console.log('error', r)
            }
        })
        .catch(e => {
            console.log('error', e)
        });
    }

    saveMovie(result) {
        if (!(this.state.savedMovies as any).includes(result)) {
            result.isWatched = false;
            this.setState({
                savedMovies: [result, ...this.state.savedMovies]
            });
        }
    }

    toggleMovieWatched(movie) {
        movie.isWatched = !movie.isWatched;

        let mIdx = (this.state.savedMovies as any).indexOf(movie);
        if (mIdx >= 0) {
            (this.state.savedMovies[mIdx] as any) = movie;
        }

        this.setState({ savedMovies: this.state.savedMovies });
    }

    render() {
        return (
            <div class="page" id="home" style="opacity: 0;" ref={this.page}>

                <div class="container">

                    <div class="form">

                        <div class="input-row">
                            <input type="text" id="search-input" onChange={(e) => { 
                                this.setState({ query: (e.target as any).value }) 
                            }} />
                        </div>

                        <div class="input-row">
                            <Button id="btn-search" click={this.onSearch}>Search</Button>
                        </div>

                        <div class="flex cols">

                            <div class="col search-results">
                                { (this.state.searchResults.length != 0) && 
                                    <div class="results">
                                        { this.state.searchResults.map(r => {
                                            return (
                                                <div class="result flex">
                                                    <div class="title">{r['Title']}</div>
                                                    <Button class="small" click={(e) => this.saveMovie(r)}>Save</Button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                            
                            <div class="col saved-movies">
                                { (this.state.savedMovies.length != 0) && 
                                    <div class="movies">
                                        { this.state.savedMovies.map((r: any, i) => {
                                            return (
                                                <div class="result flex" key={i}>
                                                    <div class="title">{r['Title']}</div>
                                                    <input type="checkbox" onChange={(e) => 
                                                        this.toggleMovieWatched(r)
                                                    }
                                                     checked={r.isWatched} />
                                                    <div class="label-watched">Watched?</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

}