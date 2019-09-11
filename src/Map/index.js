import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {

  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedMarker: null
  }

  

  onMarkerClick = (i) => {
    this.setState({
      selectedMarker: i,
      activeMarker: {},
      showInfoWindow: true
    })
  }

  onClose = () => {
    if(this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const WrappedMap = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.coordinates.lat, lng: this.props.coordinates.lng }}
        defaultZoom={ 12 }
      >
        {
          props.shops.map((shop, i) => {
            return (
                <Marker
                  onClick={() => this.onMarkerClick(i)}
                  key={i} 
                  label={`${i}`}
                  position={{ lat: shop.coordinates.latitude, 
                    lng: shop.coordinates.longitude 
                  }}
                  >
                  {this.state.selectedMarker === i &&
                      <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showInfoWindow}
                      onClose={this.onClose}
                      >
                    <div>{shop.name}</div>
                    </InfoWindow>
                  }
                    
                  </Marker>
            )
          })
        }
      </GoogleMap>
    )));
    return (
      <div 
        id="map"
        style={this.props.hidden ? {display: 'none'}: {display: 'block'} }
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`}
          loadingElement={<div style={{ height: "100%" }} />} 
          containerElement={ <div style={{ height: "100%" }} />}
          mapElement={ <div style={{ height: "100%" }} />}
          shops={this.props.shops}
        />
      </div>
    );
  }
};


const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

export default Map;