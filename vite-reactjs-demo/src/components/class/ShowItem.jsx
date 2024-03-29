import { Component } from "react";
export default class ShowItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            show: false
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps?.item?.id != this.props?.item?.id) {
            this.setState({
                ...this.state,
                show: true,
                item: this.props?.item
            });
        }
    }

    close = () => {
        this.setState({...this.state, show: false, item: {}});
    }
    render() {
        return (
            <>
                <div className={(this.state.show?'d-block bg-secondary-subtle': '') + " modal fade show"} id="exampleModalXl" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-4" id="exampleModalXlLabel">Extra large modal</h1>
                                <button 
                                    onClick={this.close}
                                    type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                               <p>Title: {this.state?.item?.title}</p>
                               <p>Description: {this.state?.item?.description}</p>
                               <p>Price: {this.state?.item?.price}</p>
                               <p>DiscountPercentage: {this.state?.item?.discountPercentage}</p>
                               <p>Rating: {this.state?.item?.rating}</p>
                               <p>Stock: {this.state?.item?.stock}</p>
                               <p>Brand: {this.state?.item?.brand}</p>
                               <p>Category: {this.state?.item?.category}</p>
                               <div className="row">
                                {
                                    this.state?.item?.images&&this.state?.item?.images.map((image, index) => (
                                        <div key={index} className="col-2">
                                            <img src={image} className="img-thumbnail" alt="" />
                                        </div>
                                    ))
                                }
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}