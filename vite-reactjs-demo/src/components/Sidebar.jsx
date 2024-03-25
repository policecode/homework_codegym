import { Component } from "react";
import './style.css';
export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-sm-2 sidenav">
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                </div>
            </>
        );

    }
}