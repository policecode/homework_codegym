import { Component } from "react";
import ShowItem from "./ShowItem";
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            detail: {}
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.category == this.props.category) return;
        let response = await fetch(`https://dummyjson.com/products/category/${this.props.category}`)
        let result = await response.json()
        this.setState({
            ...this.state,
            data: result.products
        })
    }
    getItem = (item) => {
        this.setState({
            ...this.state,
            detail: item
        })
    }

    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.props.category}</li>
                    </ol>
                </nav>
                <div className="text-center">
                    <div className="row">
                        {
                            this.state.data.map((item) => (
                                <div key={item.id} className="col-3 align-self-start">
                                    <div className="card">
                                        <img src={item.thumbnail} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <a
                                                onClick={() => this.getItem(item)}
                                                className="btn btn-primary">Get View</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>

                <ShowItem item={this.state.detail}/>
            </div>
        );

    }
}