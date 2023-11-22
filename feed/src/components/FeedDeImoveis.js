import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import { FaSearch } from "react-icons/fa";


const FeedContainer = styled.div`
  background-color: cadetblue;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1px;
  margin: 12px;
  justify-content: center;
`;

const FilterIcon = styled(FaSearch)`
  font-size: 1.3em;
  color: black;
`;

const EntradaFiltro = styled.input`
  margin-left: 8px;
`;

const FeedDeImoveis = () => {
  const postagens = [
    {
      id: 1,
      titulo: 'Mureta da Urca',
      endereco: 'av.meu_pau',
      descricao: 'A mureta nada mais é do que um muro baixo que está ao lado da Baía de Guanabara. A Urca está na zona sul da cidade, e abriga um dos cartões postais da cidade… o cume do Pão de Açúcar! Esta é uma vizinhança tranquila e tradicional do Rio, inclusive com muitos prédios e casas bem charmosas.O local foi apelidado carinhosamente de “pobreta”. Mas temos que concordar que essa é a melhor mesa de bar da vida. A galera vai na mureta para encontrar os amigos, Happy hour depois do trabalho, ou simplesmente ler um pouco. Então você já deve imaginar que esse é o muro mais concorrido do Rio de Janeiro, principalmente no final de semana',
      imagemUrl: 'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg'
    },
    {
      id: 2,
      titulo: 'Bar Amarelinho',
      endereco: 'av.meu_pau',
      descricao: 'A Cinelândia concentra um dos mais belos conjuntos arquitetônicos de influência europeia no Rio de Janeiro, e sempre foi ponto de encontro de artistas, militantes de diversas cores e toda sorte de intelectuais. Lá foi fundado, em 1921, o Amarelinho, que se mantém até hoje no mesmo endereço e coleciona um baú de lembranças que fazem parte da história da cidade. São infinitos os episódios testemunhados por quem acompanhou acontecimentos marcantes, rememorados pelos frequentadores e antigos funcionários. Até hoje, turistas nacionais e estrangeiros que passam pelo Amarelinho, ao irem embora, pedem para levar qualquer lembrancinha que seja, de uma xícara a um guardanapo que tenha o logotipo do bar e sirva como prova de que lá estiveram.  Nas mesas espalhadas pela calçada, os clientes apreciam o movimento cotidiano, como se estivessem em camarotes. Em época de Carnaval, a concentração de foliões começa a partir das 8h, aguardando o desfile do Cordão da Bola Preta. Há também os saudosistas, que aparecem para lembrar outras épocas de suas vidas, e os que vão para afogar as mágoas ou comemorar alguma coisa. Em ambos os casos, já aconteceu do garçom levá-los para casa de táxi, uma solidariedade típica de cariocas.Para atender clientes de muitas procedências, nada melhor que um variado cardápio, com pratos fartos que geralmente dão para duas pessoas. Os mais pedidos são a feijoada, servida às sextas-feiras, o churrasco misto, a picanha e o cozido, servidos às quintas-feiras. O chope é muito bem tirado, combinando com a farta porção de batatas fritas, entre outros petiscos, dos quais o carro-chefe é o frango à passarinho, seguido pela concorrida  codorna.',
      imagemUrl: '../images/arpoador.jpg',
    },
    {
      id: 3,
      titulo: 'Pão de Açúcar',
      endereco: 'av.meu_pau',
      descricao: 'Um dos mais belos pontos turísticos do Rio de Janeiro e um dos mais famosos do Brasil. Trabalhamos com a missão de transportar pessoas para um mundo de encantamento, lazer e entretenimento, gerando experiências felizes, inesquecíveis e que valorizem a cultura brasileira. Investimos constantemente em segurança, conforto e inovação. Somos um marco natural, geológico, histórico e turístico da cidade do Rio de Janeiro. Marco natural, por ser um referencial para os navegadores que vêm à Baía de Guanabara. Marco geológico, pois é um sítio geológico com datações precisas da história do planeta. Marco histórico, porque aos seus pés, Estácio de Sá, em 1º de março de 1565, fundou a Cidade de São Sebastião do Rio de Janeiro. E, marco turístico, porque a inauguração do teleférico do Pão de Açúcar projetou o nome do Brasil no exterior. Fomos o primeiro teleférico instalado no Brasil e o terceiro no mundo.',
      imagemUrl: 'url_da_imagem_apartamento1.jpg',
    },
    {
      id: 4,
      titulo: 'Corcovado',
      endereco: 'av.meu_pau',
      descricao: 'No topo da cidade está instalado Cristo Redentor, os lados turísticos mais procurados do Brasil e do Rio de JaneiroMaior e mais famosa escritura Art Déco do mundo, a estátua de Cristo começou a ser planejada em 1921 e foi desenvolvida pelo engenheiro Heitor da Silva Costa ao longo de 6 anos de trabalho, de 1925 a 1931, o ano de abertura do monumento Localizado no Parque Nacional da Tijuca, a 710 metros acima do nível do mar, onde qualquer um pode apreciar uma das mais belas vistas da cidade. Ao longo de todos os 220 degraus que levam aos famosos pés da estátua, foi eleita uma das Sete Maravilhas do Mundo, realizada por votação formal em 2007 pela New 7 Wonders Foundation da Instituição Suíça. O monumento é acessível de trem, van ou carro. Para entrar no monumento, há um bom passeio de trem que, durante 20 minutos, atravessa a Mata Atlântica até o topo do Corcovado.',
      imagemUrl: '',
    },
    {
      id: 5,
      titulo: 'Mirante do Leblon',
      endereco: 'av.meu_pau',
      descricao: 'O mirante está localizado na praia do Leblon, um bairro da Zona Sul do Rio de Janeiro. Na verdade, o espaço foi construído em um deck (plataformas ou pranchas) de madeira. Ele está no final da praia do Leblon e início da Avenida Niemeyer, sobre as rochas e possui também uma cerca de madeira.Ao longo da orla se encontram coqueiros e pedras portuguesas, que se estendem por toda a orla da praia até o Leme. De lá é possível ter uma vista de toda a orla do bairro do Leblon, Ipanema e São Conrado.',
      imagemUrl: '../images/mirantedoleblon.jpg',
    },
    {
      id: 6,
      titulo: 'Bar do Zeca Pagodinho',
      endereco: 'av.meu_pau',
      descricao: 'O Bar do Zeca Pagodinho homenageia um dos artistas que mais personifica o samba. O Bar é um espaço temático onde o público pode conhecer a trajetória de Zeca Pagodinho, através de imagens, fotos e elementos ligados a vida do sambista.Líder em entretenimento, oferecemos música ao vivo de altíssima qualidade, comida tradicional de boteco, cerveja gelada e drinks exclusivos. O Bar do Zeca Pagodinho tornou-se um cobiçado ponto turístico.',
      imagemUrl: '',
    },
    {
      id: 7,
      titulo: 'Bar Carioca da Gema',
      endereco: 'av.meu_pau',
      descricao: 'Cria da cidade maravilhosa o Carioca da Gema é naturalmente privilegiado, nasce numa fonte inesgotável de prazer e leva a vida cercado de uma rica tradição cultural. O carioca traz na alma o mapa da alegria, da descontração, da musicalidade e da poesia. A natureza garante a inspiração criando um cenário de muito sol, samba, praia e futebol, fiéis e inseparáveis companheiros, da zona norte a zona sul.Desse espírito despojado, resultado de uma grande mistura de raças, e uma infinidade de influências culturais, nasceu duas das mais fortes expressões musicais o samba e o chorinho; gêneros populares, consagrados, que traduzem a vida em arte, e transformam tristeza em alegria. Uma química de um povo sensível que vem ganhando destaque no mundo atraindo atenção e o interesse de outras culturas na difusão e promoção desse jeito de ser, da arte popular.Desde 2000 o Café Musical Carioca da Gema apresenta o que há de melhor da música popular brasileira através desses dois gêneros tradicionais cariocas. Reconhecido pela conquista de prêmios a cargo de uma exclusiva programação musical, da originalidade artística, e da inovação na área da gastronomia. Ao longo do tempo vem se destacando pelos melhores atributos do espírito carioca. Através do desempenho de seus melhores artistas, músicos, intérpretes e cantores. Uma reunião especial de prazer e qualidade, ambiente, serviço, música e gastronomia. Com os melhores artistas e músicos; do melhor chope, da cerveja mais gelada, do melhor samba, e um grande público em torno da nossa cultura popular carioca.Localizado no histórico bairro da lapa, no Centro do Rio de Janeiro, o Carioca da Gema se fez pelo pioneirismo em ocupar antigos casarões do bairro, para apresentar o que há de melhor no cenário musical popular.',
      imagemUrl: '',
    },
    {
      id: 8,
      titulo: 'Praia do Arpoador',
      endereco: 'av.meu_pau',
      descricao: 'A Praia do Arpoador recebe pessoas do mundo todo com uma surpreendente paisagem rochosa. Entre os bairros de Ipanema e Copacabana, essa praia que ocupa uma faixa de 500 metros de comprimento é um reduto de boêmios, poetas, artistas e pessoas da velha guarda carioca com muita história para contar. O nome Arpoador tem origem na antiga atividade de caça a baleias, feita por povos nativos e portugueses perto da costa brasileira.',
      imagemUrl: '',
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

  const reversed = dados.reverse();

  return (
    <>
      <FilterContainer>
        <FilterIcon />
        <EntradaFiltro
          type='text'
          placeholder='Informe o título'
          onChange={(e) => filtrar(e.target.value)}
        />
      </FilterContainer>

      <FeedContainer>
        {reversed.map((postagem) => (
          <Post
            key={postagem.id}
            titulo={postagem.titulo}
            descricao={postagem.descricao}
            imagemUrl={postagem.imagemUrl}
          />
        ))}
      </FeedContainer>
    </>
  );
};

export default FeedDeImoveis;

