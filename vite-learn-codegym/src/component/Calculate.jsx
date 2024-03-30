import { Component } from "react";
export default class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_one: 0,
            value_two: 0,
            result: ''
        }
    }
    render() {
        return (
            <>
                <div className="container">
                    <input value={this.state.value_one} onInput={(e) => this.setState({...this.state, value_one: e.target.value})} className="mb-2" type="number" /> <br/>
                    <input value={this.state.value_two} onInput={(e) => this.setState({...this.state, value_two: e.target.value})} className="mb-2" type="number" />
                    <p>Ressult: {this.state.result}</p>
                    <button onClick={(e) => this.setState({...this.state, result: (Number(this.state.value_one) + Number(this.state.value_two))})} className="btn btn-primary me-2">+</button>
                    <button onClick={(e) => this.setState({...this.state, result: (this.state.value_one - this.state.value_two)})} className="btn btn-primary me-2">-</button>
                    <button onClick={(e) => this.setState({...this.state, result: (this.state.value_one * this.state.value_two)})} className="btn btn-primary me-2">x</button>
                    <button onClick={(e) => this.setState({...this.state, result: (this.state.value_one / this.state.value_two)})} className="btn btn-primary me-2">/</button>

                </div>
            </>
        );
    }
}