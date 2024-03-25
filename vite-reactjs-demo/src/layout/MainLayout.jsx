import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import Ads from "../components/Ads";
export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <div className="container-fluid text-center">
                    <div className="row content">
                        <SideBar />
                        <div className="col-sm-8 text-left">
                            {this.props.children}
                        </div>
                        <Ads />
                    </div>
                </div>
                <Footer />
            </>
        );

    }
}