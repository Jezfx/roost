import React, { Component } from 'react';
import GoogleMap from './GoogleMap.js';
import ActionHeader from './ActionHeader.js'
import Card from './Card.js';
import data from './data/Data.js';
import jump from 'jump.js'
import { easeInOutCubic } from './utils/Easing.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[0],
      filterBedrooms: 'any',
      filterBathrooms: 'any',
      filterCars: 'any',
      filterSort: 'any',
      priceFrom: 'any',
      priceTo: 'any',
      showFilter: false,
      filterProperties: [],
      isFiltering: false,
      propertyView: 'grid',
      sortProperties: 0,
    }

    this.setActiveProperty = this.setActiveProperty.bind(this);
    this.changePropertyView = this.changePropertyView.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  changePropertyView(e, view) {
    e.preventDefault();
    
    this.setState({
      propertyView: view
    });
  }

  setActiveProperty(property){
    this.setState({
      activeProperty: property
    });

    jump(`.id-${ property.index }`, {
      duration: 1000,
      offset: -235,
      callback: undefined,
      easing: easeInOutCubic,
      a11y: false
    })
  }

  updateSort(sort) {
    this.setState({
      sortProperties: parseInt( sort.target.value ),
    })
  }

  render() {
    const { properties, activeProperty, sortProperties } = this.state;
    let propertiesList = properties;

    // Property Sort
    if( sortProperties !== 0 ) {
      
      if( sortProperties === 1 ) {
        propertiesList.sort((a, b) => b.price - a.price);
      } 
      else if ( sortProperties === 2 ) {
        propertiesList.sort((a, b) => a.price - b.price);
      }
    }

    return (
      <div className="App">

        <ActionHeader 
          changePropertyView={ this.changePropertyView } 
          propertyView={ this.state.propertyView }
          updateSort={ this.updateSort } />

        <section className="section app-wrapper">
          <div className="map-container">
            <GoogleMap 
              properties={properties} 
              activeProperty={ activeProperty }
              setActiveProperty={ this.setActiveProperty } />
          </div>

          <div className={`properties-wrapper listings-${ this.state.propertyView }`}>
            <div className="row">
              { propertiesList && properties.map(( property ) => {
                return <Card 
                          key={ property._id } 
                          property={ property }
                          activeProperty={ activeProperty }
                          setActiveProperty={ this.setActiveProperty }
                          propertyView={ this.state.propertyView } />
              } ) }              
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
