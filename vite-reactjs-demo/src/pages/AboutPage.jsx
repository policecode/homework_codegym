import { Component } from "react";
import MainLayout from "../layout/MainLayout";
export default class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <MainLayout>
                <div className="bg-success"> 
                    <h1>About Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Test</h3>
                    <p>Lorem ipsum...</p>
                </div>
            </MainLayout>
        );

    }
}