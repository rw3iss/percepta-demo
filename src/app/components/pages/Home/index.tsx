import { h, Component, createRef } from 'preact';
import './style.scss';

export default class Home extends Component {

    page = createRef();

    state = {
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.page.current.classList.add('page-loaded');
    }

    render() {
        return (
            <div class="page" id="home" style="opacity: 0;" ref={this.page}>

                <div class="container">

                    <div class="form">

                    </div>

                </div>

            </div>
        );
    }

}