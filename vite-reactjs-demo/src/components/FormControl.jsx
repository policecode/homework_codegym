import { Component } from "react";

export default class FormControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        if (this.props.href) {
            return (
                <a className="btn btn-success" href={this.props.href} >{this.props.children}</a>
            );
        }
        if (this.props.handClick) {
            return (
                <button className="btn btn-primary" onClick={this.props.handClick} >{this.props.children}</button>
            );
        }
    }
}