import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state={counter:0}
    }
    componentDidMount(){
        console.log("component Did Mount")
    }
    componentDidUpdate(){
        console.log("component Did Update")
    }
    componentWillUnmount(){
        console.log("component Will Unmount")
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
                <span>{this.state.counter}</span>
                <button onClick={()=>this.state.counter>0 ? this.setState({counter:this.state.counter-1}):this.state.counter}>-</button>
            </div>
        )
    }
}

export default Counter;