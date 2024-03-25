import { Component } from "react";
import './style.css';
export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container-fluid text-center">
                    <div className="row content">
                        
                        <div className="col-sm-8 text-left">
                            <h1>Welcome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h3>Test</h3>
                                <p>Lorem ipsum...</p>
                        </div>
             
                    </div>
                </div>
            </>
        );

    }
}