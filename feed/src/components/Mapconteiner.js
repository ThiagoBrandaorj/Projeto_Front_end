import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '600px',
    width: '100%',
  }

  const defaultCenter = {
    lat: -22.9,
    lng: -43.196388,
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCciNsqAtn4bCLsa-IJfQUrUa7cbt1Cwis"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={11}
        center={defaultCenter}
      />
    </LoadScript>
  );
}

export default MapContainer;
