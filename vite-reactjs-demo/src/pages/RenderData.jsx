import { Component } from "react";
import ListItem from "../components/class/ListItem";
import ListPost from "../components/class/ListIPost";
export default class RenderData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: ''
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(this.state);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a 
                                        onClick={()=> this.setState({screen: 'smartphones'})}
                                        className={(this.state.screen == 'smartphones'? 'active':'') + " nav-link"}
                                        href="#"
                                    >SmartPhones</a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        onClick={()=> this.setState({screen: 'laptops'})}
                                        className={(this.state.screen == 'laptops'? 'active':'') + " nav-link"}
                                        href="#"
                                    >Laptops</a>
                                </li>
                                <li className="nav-item">
                                    <a 
                                        onClick={()=> this.setState({screen: 'skincare'})}
                                        className={(this.state.screen == 'skincare'? 'active':'') + " nav-link"}
                                        href="#"
                                    >Skincare</a>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <ListItem category={this.state.screen}/> */}
                <ListPost category={this.state.screen} />
            </>
        );

    }
}