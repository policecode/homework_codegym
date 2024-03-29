import { Component } from "react";
export default class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            detail: {},
            skip: 0,
            limit: 20,
            page: 1,
            total: 0,
            totalPage: 0
        }
    }
    async componentDidMount() {
        await this.getItems();
    }
    async componentDidUpdate(prevProps, prevState) {
        if ((prevState.page != this.state.page) || (prevState.limit != this.state.limit)) {
            this.getItems();
        }
    }
    // getItem = (item) => {
    //     this.setState({
    //         ...this.state,
    //         detail: item
    //     })
    // }
    getItems = async (action = '') => {
        // console.log(this.state);
        let response = await fetch(`https://dummyjson.com/post?limit=` + this.state.limit + '&skip=' + this.state.skip)
        let result = await response.json()

        // console.log(result);
        let newState = {
            ...this.state,
            data: result.posts,
            total: result.total,
            totalPage: Math.ceil(result.total / this.state.limit)
        }

        this.setState(newState);
    }
    next = (e) => {
        e.preventDefault();
        if (this.state.page == this.state.totalPage) {
            return;
        }
        let newPage = this.state.page + 1;
        this.setState({
            ...this.state,
            skip: (newPage - 1) * this.state.limit,
            page: newPage
        });
    }
    prev = (e) => {
        e.preventDefault();
        if (this.state.page == 1) {
            return;
        }
        let newPage = this.state.page - 1;
        this.setState({
            ...this.state,
            skip: (newPage - 1) * this.state.limit,
            page: newPage
        });
    }
    changeLimit = (e) => {
        this.setState({
            ...this.state,
            limit: e.target.value
        });
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
                                <div key={item.id} className="col-3 mb-2 align-self-start">
                                    <div className="card">
                                        {/* <img src={item.thumbnail} className="card-img-top" alt="" /> */}
                                        <div className="card-body">
                                            <h5 className="card-title">{item.id}-{item.title}</h5>
                                            <p className="card-text">{item.body}</p>
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

                <nav aria-label="Page navigation example">
                    Page: <span>{this.state.page}</span>/<span>{this.state.totalPage}</span> in <span>{this.state.total} row</span>
                    <ul className="pagination">
                        <li className={((this.state.page == 1) ? "disabled" : "") + " page-item"}>
                            <a
                                onClick={this.prev}
                                className="page-link" href="#">Previous</a>
                        </li>
                        <li className={((this.state.page == this.state.totalPage) ? "disabled" : "") + " page-item"}>
                            <a
                                onClick={this.next}
                                className="page-link" href="#">Next</a>
                        </li>
                        <li className="page-item">
                            <select className="form-select"
                                onInput={this.changeLimit}
                                defaultValue={this.state.limit}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                            </select>
                        </li>
                    </ul>

                </nav>
            </div>
        );

    }
}