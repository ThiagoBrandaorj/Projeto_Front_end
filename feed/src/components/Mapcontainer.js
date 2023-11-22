import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ latitude, longitude }) => {
  const mapStyles = {
    height: '300px',
    width: '50%',
  };

  var latitude = parseFloat(latitude);
  var longitude = parseFloat(longitude);


  const defaultCenter= {
    lat: latitude,
    lng: longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA0fyk1V4SXtogRqiDjqyewN1yrMdHcM-Y">
      <GoogleMap mapContainerStyle={mapStyles} zoom={11} center={defaultCenter}>
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;