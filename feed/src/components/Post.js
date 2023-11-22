import React, { useState } from 'react';
import MapContainer from './Mapcontainer.js';

const Post = ({ titulo, descricao, endereco, imagemUrl, lat, long }) => {
  const [mostrarDescricaoCompleta, setMostrarDescricaoCompleta] = useState(false);

  const handleVerMaisClick = () => {
    setMostrarDescricaoCompleta(!mostrarDescricaoCompleta);
  };

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
      {mostrarDescricaoCompleta && <MapContainer latitude={lat} longitude={long} />}
    </div>
  );
};

export default Post;

