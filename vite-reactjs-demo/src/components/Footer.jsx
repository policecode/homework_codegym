import { Component } from "react";
import './style.css';
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer className="container-fluid text-center">
                    <p>Footer Text</p>
                </footer>
            </>
        );

    }
}