import { Component } from "react";
import MainLayout from "../layout/MainLayout";
export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <MainLayout>
                <>
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Test</h3>
                    <p>Lorem ipsum...</p>
                </>
            </MainLayout>
        );

    }
}