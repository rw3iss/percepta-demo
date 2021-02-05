import { h, Component } from 'preact';
import { createHashHistory } from 'history';
import Router from 'preact-router';
import Home from './pages/Home';

export default class Routes extends Component {

    render() {
        return (
            <Router history={createHashHistory()}>

                <Home path="/" />

            </Router>
        )
    }

}