import { h, Component, createRef } from 'preact';
import { Link } from 'preact-router/match';
import Button from 'components/shared/Button';
import './style.scss';

export default class Home extends Component {

    page = createRef();

    state = {
        showForm: false
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.page.current.classList.add('page-loaded');
    }

    onClick = () => {
        console.log('clicked');
        this.setState({ showForm: true })
    }

    render() {
        return (
            <div class="page" id="home" style="opacity: 0;" ref={this.page}>

                <div class="container">
                    
                    <Button class="small" click={this.onClick}>Click Me</Button>

                    { this.state.showForm && 
                        <div class="form">
                            
                            Search for a movie:

                            <input type="text" placeholder="Search..."/>

                        </div>
                    }

                </div>

            </div>
        );
    }

}