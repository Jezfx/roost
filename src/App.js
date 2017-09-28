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
    }

    this.changePropertyView = this.changePropertyView.bind(this);
    this.setActiveProperty = this.setActiveProperty.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handelFilterChange = this.handelFilterChange.bind(this);
  }

  changePropertyView(e, view) {
    e.preventDefault();
    
    this.setState({
      propertyView: view
    });
  }

  setActiveProperty(activeProperty, scroll = true) {
    const { index } = activeProperty;

    this.setState({
      activeProperty
    });

    if(scroll) {
      const target = `#card-${index}`;
      jump(target, {
          duration: 800,
          easing: easeInOutCubic
      });      
    }
  }  

  toggleFilter(e) {
    e.preventDefault();
    
    this.setState({
      showFilter: !this.state.showFilter,
    })
  }

  filterProperties() {
    const { properties, filterBedrooms, filterBathrooms, filterCars, priceFrom, priceTo } = this.state;
    const isFiltering = filterBedrooms !== 'any' || filterBathrooms !== 'any' || filterCars !== 'any' || priceFrom !== 'any' || priceTo !== 'any';

    const getFilteredProperties = ( properties ) => {
      const filterProperties = [];
      
      properties.map( property => {
        const { bedrooms, bathrooms, carSpaces, price } = property;
        const match = 
          (bedrooms === parseInt(filterBedrooms) || filterBedrooms === 'any') &&
          (carSpaces === parseInt(filterCars) || filterCars === 'any') &&
          (bathrooms === parseInt(filterBathrooms) || filterBathrooms === 'any') &&     
          (price > parseInt(priceFrom) || priceFrom === 'any') &&
          (price < parseInt(priceTo) || priceTo === 'any');

        match && filterProperties.push( property );

      });

      return filterProperties;

    }

    this.setState({
      filterProperties: getFilteredProperties(properties),
      activeProperty: getFilteredProperties(properties)[0] || properties[0],
      isFiltering,
    })
  }

  handelFilterChange(target) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => this.filterProperties());
  }  

  clearForm(e, form) {
    e.preventDefault();
    const { properties } = this.state;

    this.setState({
      properties: this.state.properties.sort((a, b) => a.index - b.index),
      activeProperty: properties[0],
      filterBedrooms: 'any',
      filterBathrooms: 'any',
      filterCars: 'any',
      filterSort: 'any',
      priceFrom: 'any',
      priceTo: 'any',
      filterProperties: [],
      isFiltering: false,      
    });

    form.reset();    
  }

  render() {
    const { properties, activeProperty, sortProperties, showFilter, filterSort, filterProperties, isFiltering } = this.state;
    const propertiesList = isFiltering ? filterProperties : properties;
    const emptyFilterResults = isFiltering && propertiesList.length === 0;
    
    parseInt( filterSort ) === 0 && propertiesList.sort((a, b) => b.price - a.price);
    parseInt( filterSort ) === 1 && propertiesList.sort((a, b) => a.price - b.price);

    return (
      <div className="App">

        <ActionHeader
          showFilter={ showFilter }
          changePropertyView={ this.changePropertyView } 
          propertyView={ this.state.propertyView }
          setActiveProperty={ this.setActiveProperty }
          clearForm={ this.clearForm } 
          handelFilterChange={ this.handelFilterChange } 
          showFilter={ this.state.showFilter } 
          toggleFilter={ this.toggleFilter } />

        <section className="section app-wrapper">
          <div className="map-container">
            <GoogleMap
            properties={ properties }
            activeProperty={ activeProperty }
            updateActiveCard={ this.updateActiveCard }
            filterProperties={ filterProperties }
            isFiltering={ isFiltering } />
          </div>

          <div className={`properties-wrapper listings-${ this.state.propertyView }`}>
            { emptyFilterResults 
            ? <div className="row nothing-found">
                <h1>Nothing found 👀</h1>
              </div>
            : <div className="row">
                { propertiesList && propertiesList.map(( property ) => 
                <Card 
                  key={ property._id } 
                  property={ property }
                  activeProperty={ activeProperty }
                  setActiveProperty={ this.setActiveProperty }
                  propertyView={ this.state.propertyView } />
                )}              
            </div>
            }
          </div>

        </section>
      </div>
    );
  }
}

export default App;
