import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from "styled-components";
import L from 'leaflet';

const Mapstyle = styled.div`
  width: 100%;
  margin-top:10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; 
  
  
`

const customIcon = new L.Icon({
    iconUrl: '../images/pin.png',
    iconSize: [24, 24], 
    iconAnchor: [16, 32], 
    popupAnchor: [10, -32], 
  });

const Leafletmap = ({ latitude, longitude }) => {
    var latitude = parseFloat(latitude);
    var longitude = parseFloat(longitude);

    const position = [latitude, longitude];

    return (
     
        <Mapstyle>
        <MapContainer center={position} zoom={6} style={{ height: '300px', width: '100%', }} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Localização <br /> 
            </Popup>
          </Marker>
        </MapContainer>
        </Mapstyle>
      
      );
};

export default Leafletmap;
    
