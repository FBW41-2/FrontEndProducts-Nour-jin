import React, { Component } from "react";
import CardData from "./CardData";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  mapping(x) {
    const cards = x.map((member) => (
      <CardData
        key={member.id}
        img={member.img}
        name={member.Id}
        rating={member.Ratings}
        description={member.Description}
        title={member.Title}
        website={member.Url}
      />
    ));
    return cards;
  }

  render() {
    return <div className="row">{this.mapping(this.props.prodact)}</div>;
  }
}

export default Card;
