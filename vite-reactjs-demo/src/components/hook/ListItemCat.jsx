// ListItemCat
import { useState, useEffect } from 'react';
import { BsStarFill, BsStar, BsStarHalf, BsHeart } from "react-icons/bs";
import { GrStar } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
function ListItemCat(props) {
    let { cat } = props;
    let [items, setItems] = useState([]);
    let [itemDetail, setItemDetail] = useState({});

    useEffect(() => {
        let getItems = async () => {
            let response = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            let result = await response.json();
            setItems(result);
        }
        getItems();
    }, [cat]);

    let getStar = (point) => {
        let starArr = [];
        for (let index = 1; index <= 5; index++) {
            if (index < point) {
                starArr.push(<BsStarFill style={{ color: '#f8e412' }} />);
            } else if (index > point && (index - 1) < point) {
                starArr.push(<BsStarHalf style={{ color: '#f8e412' }} />);
            } else {
                starArr.push(<BsStar style={{ color: '#f8e412' }} />);
            }
        }
        return starArr;
    }

    let getItem = (item) => {
        setItemDetail(item);
    }
    let close = () => {
        setItemDetail({});
    }
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Category</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{cat.toUpperCase()}</li>
                </ol>
            </nav>
            <div className="text-center">
                <div className="row">
                    {
                        items.map((item) => (
                            <div key={item.id} className="col-3 align-self-start mb-4">
                                <div className="card">
                                    <img src={item.image} height="300px" className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title text-truncate" title={item.title}>{item.title}</h5>
                                        <p className="card-text text-start fw-bold text-danger" >{item.price} $</p>
                                        <div className="text-start mb-2 d-flex align-items-center" >
                                            {getStar(item.rating.rate).map(star => star)}

                                            <span className='ms-2'>
                                                {item.rating.rate}<GrStar />/
                                                {item.rating.count} <IoIosPeople />
                                            </span>
                                            <span className="ms-4" >
                                                Like
                                                <BsHeart className='ms-2' style={{ color: '#f8121d', cursor: 'pointer' }} />
                                            </span>
                                        </div>
                                        <a
                                            onClick={() => getItem(item)}
                                            className="btn btn-primary">Get View</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

            <div className={(itemDetail?.id ? 'd-block bg-secondary-subtle' : '') + " modal fade show"} id="exampleModalXl" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4" id="exampleModalXlLabel">View Detail Product</h1>
                            <button
                                onClick={close}
                                type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={itemDetail.image} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{itemDetail.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{itemDetail.category}</h6>
                                    <p className="card-text">{itemDetail.description}</p>
                                    <div className="text-start mb-2 d-flex align-items-center" >
                                        {getStar(itemDetail?.rating?.rate).map(star => star)}

                                        <span className='ms-2'>
                                            {itemDetail?.rating?.rate}<GrStar />/
                                            {itemDetail?.rating?.count} <IoIosPeople />
                                        </span>
                                        <span className="ms-4" >
                                            Like
                                            <BsHeart className='ms-2' style={{ color: '#f8121d', cursor: 'pointer' }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
<style>

</style>
export default ListItemCat