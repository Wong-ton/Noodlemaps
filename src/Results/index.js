import React from 'react';
import Map from '../Map';
import Shops from '../Shops';

const Results = ({shops, coordinates, hidden}) => {
    
    return (
        <div className="map-content-wrapper">
          <div className="map">
            <Map shops={shops} coordinates={coordinates} hidden={hidden}/>  
          </div>
          <div>
            <Shops shops={shops}/>
          </div>
        </div>
    )
}

export default Results