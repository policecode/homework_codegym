import { Component } from "react";
import './style.css';
export default class Ads extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="col-sm-2 sidenav">
                    <div className="well">
                        <p>ADS</p>
                    </div>
                    <div className="well">
                        <p>ADS</p>
                    </div>
                </div>
            </>
        );

    }
}