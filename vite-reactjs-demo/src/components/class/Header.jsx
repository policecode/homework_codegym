import { Component } from "react";
import './style.css';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand text-light" href="#">Logo</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item text-light active"><a href="#">Home</a></li>
                                <li className="nav-item text-light ml-2" ><a href="#">About</a></li>
                                <li className="nav-item text-light ml-2"><a href="#">Projects</a></li>
                                <li className="nav-item text-light ml-2"><a href="#">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );

    }
}