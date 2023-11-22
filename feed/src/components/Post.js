import React, { useState } from 'react';
import Leafletmap from './Leafletmap.js';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';


const Post = ({ titulo, descricao, endereco, imagemUrl, lat, long }) => {
  const [mostrarDescricaoCompleta, setMostrarDescricaoCompleta] = useState(false);

  const handleVerMaisClick = () => {
    setMostrarDescricaoCompleta(!mostrarDescricaoCompleta);
  };

  const CenteredDiv = styled.div`
  text-align: center;
  margin: 0 auto; 
`;

  return (
    <div>
      <h1>{titulo}</h1>
      <img src={imagemUrl} alt="img 1" />
      <h4>{endereco}</h4>
      <p>{mostrarDescricaoCompleta ? descricao : `${descricao.slice(0, 100)}...`}</p>
      {descricao.length > 100 && (
        <button onClick={handleVerMaisClick}>
          {mostrarDescricaoCompleta ? 'Ver menos' : 'Ver mais'}
        </button>
      )}
     
      {mostrarDescricaoCompleta && <Leafletmap latitude={lat} longitude={long} />}
      
    </div>
  );
};

export default Post;

