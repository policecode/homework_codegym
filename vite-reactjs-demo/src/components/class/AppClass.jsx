import { Component } from "react";
export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    componentDidMount() {
        // console.log('Thực hiện trước khi render', this.state);
    }
    componentWillUnmount() {
        // console.log('Thực hiện khi kết thúc component');
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('Thực hiện khi update lại component');
    }
    handleToggleContent = () => {
        // this.setState({
        //     showContent: !this.state.showContent
        // })
        // console.log(this.state);
    }
    handleChangeValue = (e) => {
        // console.log(e.target.value);
        this.setState({
            text: e.target.value
        });
    }
    render() {
        return (
            <>
                <button className="btn btn-primary">Toggle</button>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">Nhập dữ liệu</label>
                        <input 
                            type="text" 
                            className="form-control"
                            onInput={(e) => this.setState({
                                text: e.target.value    
                                })
                            }    
                        />
                        {this.state.text}
                    </div>
                </div>
            </>
        );

    }
}