import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '600px',
    width: '100%',
  }

  const defaultCenter = {
    lat: 0,
    lng: 0,
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCciNsqAtn4bCLsa-IJfQUrUa7cbt1Cwis"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={3}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default MapContainer;