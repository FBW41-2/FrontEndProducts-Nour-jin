import React, { Component } from "react";

class CardData extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div
          className="card"
          style={{ borderColor: this.props.website ? "" : "red" }}
        >
          <div className="card-header">
            <img
              style={{ maxWidth: "100%" }}
              src={this.props.img}
              alt={this.props.name}
            />
          </div>
          <div className="card-body">
            <h2>{this.props.name}</h2>
            <h5>{this.props.rating}</h5>
            <div>{this.props.description}</div>
            <div>{this.props.title}</div>
            <div>{this.props.website}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardData;
