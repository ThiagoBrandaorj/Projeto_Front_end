import React, { useState } from 'react';
import Post from './Post';
import './styles/Feed.css';
import { FaSearch } from "react-icons/fa";

const FeedDeImoveis = () => {
  const postagens = [
    {
      id: 1,
      titulo: 'Edificio Guarujá',
      descricao: 'Linda casa com três quartos e jardim espaçoso.',
      imagemUrl: 'url_da_imagem_casa1.jpg',
    },
    {
      id: 2,
      titulo: 'Bar do catete',
      descricao: 'Apartamento de alto padrão com vista deslumbrante da cidade.',
      imagemUrl: 'url_da_imagem_apartamento1.jpg',
    },
    {
      id: 3,
      titulo: 'Bar do Leblon',
      descricao: 'Exelente bar para passar um fim de semana a noite e curtir com os amigos',
      imagemUrl: 'url_da_imagem_apartamento1.jpg',
    },
    // Adicione mais postagens conforme necessário
  ];

  const [dados, setDados] = useState(postagens);
  const filtrar = (entrada) => {
    const resposta = postagens.filter(
      (e) => {
        const titulo = e.titulo.toLowerCase().includes(entrada.toLowerCase());
        return titulo;
      }
    )
    setDados(resposta);
  }

  return (
    <><div className='filter-container'>
      <FaSearch id='filter-icon' />
      <input id='entrada-filtro' type='text' placeholder='Informe o título' onChange={(e)=>filtrar(e.target.value)}></input>
    </div>
    <div className="feed-de-imoveis">
        {dados.map((postagem) => (
          <Post
            key={postagem.id}
            titulo={postagem.titulo}
            descricao={postagem.descricao}
            imagemUrl={postagem.imagemUrl} />
        ))}
      </div></>
  );
};

export  default FeedDeImoveis;
