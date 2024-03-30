import { Component } from "react";
export default class ExpandCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }
    changeView = () => {
        this.setState({
            ...this.state,
            view: !this.state.view
        });
    }
    render() {
        return (
            <>
                <h1 className="bg-success py-4">Conditional Rendering</h1>
                {
                    this.state.view ? <button onClick={this.changeView} className="btn btn-primary">Đóng giới thiệu</button>:<button onClick={this.changeView} className="btn btn-primary">Xem giới thiệu</button>
                }
                
                {
                    !this.state.view || <div>
                        <h4>Giới thiệu</h4>
                        <p>Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props... mà bạn muốn hiện thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng COnditional rendering để render ra component mà bạn mong muốn</p>
                    </div>
                }

            </>
        );
    }
}