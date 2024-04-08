import { useEffect, useState } from "react";

export default function ListProduct(props) {
    let [items, setItems] = useState([]);
    // let [itemDetail, setItemDetail] = useState({});
    let [skip, setSkip] = useState(0);
    let [page, setPage] = useState(1);
    let [total, setTotal] = useState(0);
    let [totalPage, setTotalPage] = useState(0);
    let [loading, setLoading] = useState(false);
    let [direction, setDirection] = useState('');

    useEffect(() => {
        getItems();
    }, [page]);

    let getItems = async () => {
        // console.log(this.state);
        setLoading(true);
        let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        let result = await response.json()

        setItems(result.products);
        setTotal(result.total);
        setTotalPage(Math.ceil(result.total / 10));
        setLoading(false);
    }

    let next = (e) => {
        e.preventDefault();
        if (page < totalPage) {
            let newPage = page + 1;
            setPage(newPage);
            setSkip((newPage - 1) * 10);
            setDirection('next');
        }
    }
    let prev = (e) => {
        e.preventDefault();
        if (page > 1) {
            let newPage = page - 1;
            setPage(newPage);
            setSkip((newPage - 1) * 10);
            setDirection('prev');
        }
    }
    let first = (e) => {
        e.preventDefault();
        setPage(1);
        setSkip(0);
        setDirection('first');
    }
    let last = (e) => {
        e.preventDefault();
        setPage(totalPage);
        setSkip((totalPage - 1) * 10);
        setDirection('last');
    }
    let changePage = (e, page) => {
        e.preventDefault();
        setPage(page);
        setSkip((page - 1) * 10);
        setDirection('');
    }

    return (
        <div className="container">
            <div className="text-center">
                <div className="row">

                    {
                        loading ? <p>Loading...</p> :
                            items.map((item) => (
                                <div key={item.id} className="col-3 align-self-start mb-4">
                                    <div className="card">
                                        <img src={item.thumbnail} height="300px" className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title text-truncate" title={item.title}>{item.title}</h5>
                                            <div className="text-start mb-2 d-flex align-items-center" >


                                            </div>
                                            {/* <a
                                            onClick={() => getItem(item)}
                                            className="btn btn-primary">Get View</a> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                    }


                </div>
            </div>

            <nav aria-label="Page navigation example">
                Page: <span>{page}</span>/<span>{totalPage}</span> in <span>{total} row</span>
                <ul className="pagination">
                    <li className={((page == 1) ? "disabled" : "") + " page-item"}>
                        <a
                            onClick={first}
                            className="page-link" href="#">First</a>
                    </li>
                    <li className={`${(page == 1) ? "disabled" : ""} ${direction == 'prev'?'active': ''} page-item`}>
                        <a
                            onClick={prev}
                            className="page-link" href="#">Previous</a>
                    </li>
                    {
                        (new Array(totalPage)).fill(0).map((item, index) => (
                            <li className={`${page == index + 1?'active': ''} page-item`}>
                            <a
                                onClick={(e) => changePage(e, index + 1)}
                                className="page-link" href="#">{index + 1}</a>
                            </li>
                        ))
                    }
                    <li className={`${(page == totalPage) ? "disabled" : ""} ${direction == 'next'?'active': ''} page-item`}>
                        <a
                            onClick={next}
                            className="page-link" href="#">Next</a>
                    </li>
                    <li className={((page == totalPage) ? "disabled" : "") + " page-item"}>
                        <a
                            onClick={last}
                            className="page-link" href="#">Last</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}