import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from "styled-components";
import L from 'leaflet';

const Mapstyle = styled.div`
    border-radius: 8px;
  margin: 0 auto;
`

const customIcon = new L.Icon({
    iconUrl: 'https://th.bing.com/th/id/OIP.jsBQL04RxeNPuuCRzQlpkAHaHa?rs=1&pid=ImgDetMain',
    iconSize: [24, 24], // Tamanho do ícone
    iconAnchor: [16, 32], // Ponto de ancoragem do ícone (onde ele estará posicionado no mapa)
    popupAnchor: [10, -32], // Ponto de ancoragem do popup (onde aparecerá em relação ao ícone)
  });

const Leafletmap = ({ latitude, longitude }) => {
    var latitude = parseFloat(latitude);
    var longitude = parseFloat(longitude);

    const position = [latitude, longitude];

    return (
        <Mapstyle>
        <MapContainer center={position} zoom={6} style={{ height: '300px', width: '50%' }} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </Mapstyle>
      );
};

export default Leafletmap;
    
