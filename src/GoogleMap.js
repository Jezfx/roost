import React, { Component } from 'react';
// import loadjs from 'loadjs';
import './GoogleMap.css';



export default class GoogleMap extends Component {
    
    constructor(props){
        super(props);  
    }

    componentDidMount() {
        const google = window.google;        
        this.map = new google.maps.Map(this.refs.map, {
            center: {lat: -34.397, lng: 150.644},
            matTypeControl: false,
            zoom: 15,
        });
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
    
    render() {
        return (
            <div className="map-wrapper">
                <div ref="map" id="map"></div>
            </div>
        )
    }
}
