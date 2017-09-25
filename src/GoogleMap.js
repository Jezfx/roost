import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import loadjs from 'loadjs';
import './GoogleMap.css';
import mapMarker from './img/img_map-marker.png'

export default class GoogleMap extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            markers: [],
        }
    }

    componentDidMount() {
        const google = window.google;        
        const {properties, activeProperty} = this.props;
        const {latitude, longitude} = activeProperty;

        this.map = new google.maps.Map(this.refs.map, {
            center: {lat: latitude, lng: longitude},
            mapTypeControl: false,
            zoom: 15
        });

        this.createMarkers(properties);
    }

    componentDidUpdate(){      
      const {filteredProperties, isFiltering} = this.props;
      const {markers} = this.state;

      markers.forEach(marker => {
        const {property} = marker; //what is the associated property

        if(isFiltering){

            // show markers of filtered properties
            if(filteredProperties.includes(property)){

                markers[property.index].setVisible(true);

            } else {
                // hide all other markers
                markers[property.index].setVisible(false);
            }

        } else {

            // show all markers
            markers[property.index].setVisible(true);

        }
      })
    }    

    componentWillReceiveProps(nextProps){      
      const {activeProperty} = nextProps;
      const {latitude, longitude, index} = activeProperty;

      const {markers} = this.state;

      // hide all other info windows
      this.hideAll();

      // show info window of new active property
      this.showIW(index);
      }

    // componentDidMount: function() {
    //     // Connect the initMap() function within this class to the global window context,
    //     // so Google Maps can invoke it
    //     window.initMap = this.initMap;
    //     // Asynchronously load the Google Maps script, passing in the callback reference
    //     loadJS('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')
    // },
    
    // initMap: function() {
    //     map = new google.maps.Map(this.refs.map.getDOMNode(), { ... });
    // },  
    
    showIW(index){
      const {markers} = this.state;
      markers[index] && markers[index].iw.open(this.map, markers[index]);
    }

    hideAll(){
      const {markers} = this.state;

      markers.forEach(marker => {
          marker.iw.close();
      })
    }    

    createMarkers(properties){
        const google = window.google;
        const { markers } = this.state;
        const { setActiveProperty, activeProperty } = this.props;
        const activePropertyIndex = activeProperty.index;

        properties.map(property => {
            const {latitude, longitude, index, address} = property;
            this.marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: this.map,
                label: {
                    color: '#ffffff',
                    text: `${index+1}`
                },
                icon: {
                    url: mapMarker,
                    // This marker is 22 pixels wide by 40 pixels high.
                    size: new google.maps.Size(22, 55),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, -15),
                    // The anchor for this image is the base of the cross (11, 52).
                    anchor: new google.maps.Point(11, 52)
                },
                property
            });

            // create info window for each marker   
            const iw = new google.maps.InfoWindow({
                content: `<h1>${address}</h1>`
            })

            this.marker.iw = iw;

            this.marker.addListener('click', function() {

                // hide all other info boxes on click
                this.hideAll();

                // set active property onto the state
                setActiveProperty(property, true);

            }.bind(this)); // important to bind this

            // push this marker to the markers array on the state
            markers.push(this.marker);

            // show active property info window
            this.showIW(activePropertyIndex);

        })

    }    
    
    render() {
        return (
            <div className="map-wrapper">
                <div ref="map" id="map"></div>
            </div>
        )
    }
}

GoogleMap.prototypes = {
    properties: PropTypes.array.isRequired,
    activeProperty: PropTypes.object.isRequired,
    setActiveProperty: PropTypes.func.isRequired,
}