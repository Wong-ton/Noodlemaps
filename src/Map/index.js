import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {

  render() {

    const WrappedMap = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
        defaultZoom={ 10 }
      >
        {
          props.shops.map((shop, i) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                key={i} 
                position={{ lat: shop.coordinates.latitude, 
                            lng: shop.coordinates.longitude 
                         }}
                label={`${i}`}
              />
            )
          })
        }
      </GoogleMap>
    )));

    return (
      <div id="map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: "100%" }} />} 
          containerElement={ <div style={{ height: "100%" }} />}
          mapElement={ <div style={{ height: "100%" }} />}
          shops={this.props.shops}
        />
      </div>
    );
  }
};

const apiKey = process.env.REACT_APP_MAP_API_KEY;

export default Map;