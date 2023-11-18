import React from 'react';
import Post from './Post';
import './styles/Feed.css';

const FeedDeImoveis = () => {
  const postagens = [
    {
      id: 1,
      titulo: 'Casa aconchegante perto do centro',
      descricao: 'Linda casa com três quartos e jardim espaçoso.',
      imagemUrl: 'url_da_imagem_casa1.jpg',
    },
    {
      id: 2,
      titulo: 'Apartamento moderno com vista panorâmica',
      descricao: 'Apartamento de alto padrão com vista deslumbrante da cidade.',
      imagemUrl: 'url_da_imagem_apartamento1.jpg',
    },
    // Adicione mais postagens conforme necessário
  ];

  return (
    <div className="feed-de-imoveis">
      {postagens.map((postagem) => (
        <Post
          key={postagem.id}
          titulo={postagem.titulo}
          descricao={postagem.descricao}
          imagemUrl={postagem.imagemUrl}
        />
      ))}
    </div>
  );
};

export default FeedDeImoveis;
