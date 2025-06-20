import React, { Component } from 'react';

class ClassComp extends Component {
  // 1. Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // 2. Create methods to handle state changes
  // Use arrow functions to automatically bind 'this'
  inchandler = () => {
    // Use this.setState to update the state
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  dechandler = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  // 3. The render method returns the component's UI
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Counter App</h1>
        {/* Access state using this.state.count */}
        <h3>Count: {this.state.count}</h3>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {/* Call the methods from the class instance */}
          <button onClick={this.inchandler}>Increment</button>
          <button onClick={this.dechandler}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
