import { h, render, Component } from 'preact';

// styles are loaded in global styles/common/controls

interface IProps {
    class?: string;
    click?: (e: any) => void;
}

export default class Button extends Component<IProps, any> {

    constructor(props) {
        super(props);
    }

    render(props) {
        return <div class={ 'button' + (this.props.class ? ` ${this.props.class}` : '') }onClick={props.click ? props.click : () => null}>{...props.children}</div>
    }
}