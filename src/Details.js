import { useParams } from "react-router-dom";
import React, { Component } from "react";

class Component extends React {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
        </div>
        <button>Adopt{name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
