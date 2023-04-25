
import React from "react";
import Counter from "./Components/Counter";
class App extends React.Component {
  constructor() {
      super();
    this.state={akrem:false}
  }
  toggleVisibility=()=>this.setState({akrem:!this.state.akrem})
  render() {
    console.log("...rendrering")
      return (
          <div className="App">
          <button onClick={this.toggleVisibility}>Click</button>
           {this.state.akrem && <Counter/>}
          </div>
      )
  }
}

export default App;
