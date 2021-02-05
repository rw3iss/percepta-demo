import { h, Component } from 'preact';
import Router from 'preact-router';
import Home from './pages/Home';

export default class Routes extends Component {

    render() {
        return (
            <Router>

                <Home path="/" />

            </Router>
        )
    }

}