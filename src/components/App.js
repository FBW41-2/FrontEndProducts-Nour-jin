import React, { Component } from "react";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      metaData: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    try {
      fetch("https://jin7.herokuapp.com/products")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            loading: false,
            metaData: data,
          });
        });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container">
        <Card prodact={this.state.metaData} />
      </div>
    );
  }
}

export default App;
