import { Component } from "react";
export default class Alert extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div class="alert alert-warning" role="alert">
                    {this.props.text}
                </div>
            </>
        );
    }
}