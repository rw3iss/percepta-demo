import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';

export default class Home extends Component {

    state = {
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.page = document.querySelector("#home");
        this.page.classList.add('page-loaded');
    }

    render() {
        return (
            <div class="page" id="home" style="opacity: 0;">

                <div class="container">
                    HOME
                </div>

            </div>
        );
    }

}