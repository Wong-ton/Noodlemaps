import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


function BaseMap() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 34.052235, lng: -118.243683 }} />
        )
    }
    
const WrappedMap = withScriptjs(withGoogleMap(BaseMap));

// API VARIABLE PROBLEM, when put into a variable it doesn't read
const apiKey = process.env.REACT_APP_MAP_API_KEY;

class Map extends Component {

    render() {
      return (
        <div id="map">
          <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD-8t1r2usxwkLFcBIYHfbtQeMETgjZY2E`} loadingElement={<div style={{ height: "100%" }}/>} containerElement={<div style={{ height: "100%" }}/>} mapElement={<div style={{ height: "100%" }}/>} />
        </div>
      )
    }
}

export default Map;