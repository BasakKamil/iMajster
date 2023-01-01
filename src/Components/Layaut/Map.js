import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';


function MapShow(){
    return(
            <GoogleMap 
                defaultZoom={15} 
                defaultCenter={{lat:52.185970,lng:21.184840}}
                />


    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapShow));

const REACT_APP_GOOGLE_KEY = "AIzaSyB32ccfx386w6J7Xn-YLEyxMJRBWbvncCQ";

export default function Map(){
    return (
    <div className="MapkaKamila">
        <WrappedMap 
            className="MapOfic"
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{height: `100%`}} />}
            containerElement={<div style={{height: `100%`}} />}
            mapElement={<div style={{height: `100%`}} />}
            />        
    </div>)

}