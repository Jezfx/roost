import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import Card from './Card.js';
import data from './data/Data.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
    }
  }

  render() {
    const { properties } = this.state;
    return (
      <div className="App">
        <section className="section app-wrapper">
          <div className="map-container">
            <GoogleMap />
          </div>

          <div className="row listings-grid">
            { properties && properties.map(( property ) => <Card /> ) }
          </div>

        </section>
      </div>
    );
  }
}

export default App;
