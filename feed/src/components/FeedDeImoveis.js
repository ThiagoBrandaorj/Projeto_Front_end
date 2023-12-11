import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import { FaSearch } from "react-icons/fa";

const FeedContainer = styled.div`
  border: 1px solid black; 
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 100%;
  max-width: 30rem;
  background-color: #F6F6F6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0.5rem auto; 
  
  @media (max-width: 500px) {
    width: 100%;
  }
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

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px; 
  max-width: 400px; 
  margin: 0 auto; 
`;

const FeedDeImoveis = () => {
  const postagens = [
    {
      id: 1,
      titulo: 'Paço Imperial',
      endereco: 'Praça XV de Novembro, 48 - Centro',
      descricao: 'O Paço Imperial é um edifício histórico localizado na atual Praça XV de Novembro, no centro da cidade do Rio de Janeiro, Brasil.Construído no século XVIII para residência dos governadores da Capitania do Rio de Janeiro, passou a ser a casa de despachos, sucessivamente, do Vice-Rei do Brasil, do Rei de Portugal Dom João VI e dos Imperadores do Brasil, sofrendo ampliações no século XIX. Atualmente é um centro cultural. Pela sua importância histórica e estética, o Paço Imperial é considerado o mais importante dos edifícios civis coloniais do Brasil.',
      imagemUrl: '../images/paco.jpg',
      lat: -22.90365603646242,
      long: -43.174248563952816,
    },
    {
      id: 2,
      titulo: 'Bar Amarelinho',
      endereco: 'Praça Floriano, 55 - loja B - Cinelândia',
      descricao: 'A Cinelândia concentra um dos mais belos conjuntos arquitetônicos de influência europeia no Rio de Janeiro, e sempre foi ponto de encontro de artistas, militantes de diversas cores e toda sorte de intelectuais. Lá foi fundado, em 1921, o Amarelinho, que se mantém até hoje no mesmo endereço e coleciona um baú de lembranças que fazem parte da história da cidade. São infinitos os episódios testemunhados por quem acompanhou acontecimentos marcantes, rememorados pelos frequentadores e antigos funcionários. Até hoje, turistas nacionais e estrangeiros que passam pelo Amarelinho, ao irem embora, pedem para levar qualquer lembrancinha que seja, de uma xícara a um guardanapo que tenha o logotipo do bar e sirva como prova de que lá estiveram.  Nas mesas espalhadas pela calçada, os clientes apreciam o movimento cotidiano, como se estivessem em camarotes. Em época de Carnaval, a concentração de foliões começa a partir das 8h, aguardando o desfile do Cordão da Bola Preta. Há também os saudosistas, que aparecem para lembrar outras épocas de suas vidas, e os que vão para afogar as mágoas ou comemorar alguma coisa. Em ambos os casos, já aconteceu do garçom levá-los para casa de táxi, uma solidariedade típica de cariocas.Para atender clientes de muitas procedências, nada melhor que um variado cardápio, com pratos fartos que geralmente dão para duas pessoas. Os mais pedidos são a feijoada, servida às sextas-feiras, o churrasco misto, a picanha e o cozido, servidos às quintas-feiras. O chope é muito bem tirado, combinando com a farta porção de batatas fritas, entre outros petiscos, dos quais o carro-chefe é o frango à passarinho, seguido pela concorrida  codorna.',
      imagemUrl: '../images/baramarelinho.jpg',
      lat: -22.910324259913374,
      long: -43.17632722865627,
    },
    {
      id: 3,
      titulo: 'Igreja de São José',
      endereco: 'Av. Presidente Antônio Carlos - Centro',
      descricao: 'O templo dedicado a São José teve sua origem em uma pequena ermida construída em 1608 pelo ermitão Egas Muniz, a capela serviu, a partir de 1659, como Matriz e Sé do Rio de Janeiro e foi submetida a diversas reconstruções. No século seguinte, a igreja voltou a sofrer novas obras entre 1725 e 1729. Em 1751 é a Matriz da freguesia de São José. Em 1807, a Irmandade de São José deu início às obras da atual Igreja sob a responsabilidade do Mestre Félix José de Souza, substituído, em 1815, pelo arquiteto do Paço, João da Silva Muniz, sendo inaugurada em 1842. A igreja de estilo barroco tardio possui nave única e corredores laterais onde se localizam um púlpito e três tribunas, na capela-mor tem abóbada semelhante à da nave, e possui duas tribunas por banda. Seu interior é decorado com talha de estilo rococó de autoria de Simeão de Nazaré, discípulo do Mestre Valentim. Em seu frontispício pesado predominam os elementos horizontais de cantaria, compostos pela cimalha, pelo embasamento das duas sineiras e do acrotério central. Numa delas está instalado o famoso carrilhão, ali existente desde 1883. De sua imaginária destacou-se a imagem de São José procedente da França e doada à Irmandade pelo Comendador José Pinto de Oliveira, em 1884, e o grupo escultórico localizado atrás do altar-mor com figuras de São José abatido pela doença, Maria e Jesus. No arquivo da Irmandade, dos mais importantes da cidade, conservam-se livros que pertenceram à confraria dos carpinteiros e pedreiros do Rio de Janeiro, a confraria de São José.',
      imagemUrl: '../images/igrejasaojose.jpg',
      lat: -22.90451586473006,
      long: -43.17408254190111,
    },
    {
      id: 4,
      titulo: 'Museu Histórico Nacional',
      endereco: 'Praça Marechal Âncora S/N - Centro',
      descricao: 'O Museu Histórico Nacional (MHN) é um museu dedicado à história do Brasil, localizado na praça Marechal Âncora, no centro histórico da cidade do Rio de Janeiro, no Brasil. Foi criado em 1922 pelo presidente Epitácio Pessoa, como parte das comemorações do Centenário da Independência do Brasil e o seu primeiro diretor foi o advogado e jornalista Gustavo Barroso.O museu é uma das unidades museológicas do Instituto Brasileiro de Museus (Ibram) - autarquia federal ligada ao Ministério da Cultura - e possui um acervo constituído por mais de 300 mil itens arquivísticos, bibliográficos e museológicos. São manuscritos, iconografia, mobiliário, armaria, esculturas, indumentária, entre outros itens.',
      imagemUrl: '../images/museuhistorico.jpg',
      lat: -22.90369665314092,
      long: -43.17078310461491,
    },
    {
      id: 5,
      titulo: 'Edifício Monte',
      endereco: 'Rua das Laranjeiras, 531 - Laranjeiras',
      descricao: 'Sua história teve início em 1929, quando o patriarca da família Monte construiu um edifício exuberante de seis andares para sua família morar e alugar as demais unidades. Os 42 apartamentos são de diversos tamanhos: quarto e sala, dois e três quartos. A fachada do Monte está totalmente escondida pelas árvores do seu gigantesco jardim frontal. Essa área tem até um campinho de futebol para as crianças brincarem. Os detalhes (arcos, pilastras, frisos) só puderam ser vistos do alto da casa que fica do outro lado da rua. O Monte continua sendo um prédio familiar, quase todas as unidades pertencem aos descendentes do construtor. Talvez seja por isso que a parte externa anda sofrendo com a ação do tempo sem interferências dos moradores. Para se chegar ao hall de entrada é preciso passar pelos quatro pilares que sustentam a exótica varanda do segundo andar. Por dentro o Monte é repleto de referências dos estilos art nouveau e art déco. O elevador social é amarelo e marrom, já o de serviço é todo verde. A estrutura interna de ambos é a mesma: seis grades retangulares de ferro, uma porta pantográfica e um lustre. Todas as portas, fechaduras e janelas ainda são originais. Atrás do edifício existe uma construção de dois pavimentos. Em cima estão mais dois apartamentos, e em baixo as oito vagas de garagem existentes no prédio. Atualmente, duas unidades estão disponíveis para aluguel. Visitei uma delas e me senti na década de 1930, um apartamento de dois quartos e 83m2. Estão pedindo R$2.500 mensais por esse oásis de tranquilidade em meio ao burburinho da Rua das Laranjeiras. Em 2016, o Edifício Monte serviu de locação para a série do canal Multishow “TOC´s de Dalila”, escrita e protagonizada por Heloísa Périssé. Há 88 anos essa construção é um dos maiores orgulhos do bairro ',
      imagemUrl: '../images/laranjeiras.jpg',
      lat: -22.939253212542702,
      long:  -43.19317386234816,
    },
    {
      id: 6,
      titulo: 'Bar do Zeca Pagodinho',
      endereco: 'Avenida das Américas, 8585 - Barra da Tijuca',
      descricao: 'O Bar do Zeca Pagodinho homenageia um dos artistas que mais personifica o samba. O Bar é um espaço temático onde o público pode conhecer a trajetória de Zeca Pagodinho, através de imagens, fotos e elementos ligados a vida do sambista.Líder em entretenimento, oferecemos música ao vivo de altíssima qualidade, comida tradicional de boteco, cerveja gelada e drinks exclusivos. O Bar do Zeca Pagodinho tornou-se um cobiçado ponto turístico.',
      imagemUrl: '../images/bardozeca.jpg',
      lat: -23.00128559595333,
      long: -43.39625629072962
    },
    {
      id: 7,
      titulo: 'Bar Carioca da Gema',
      endereco: 'Av. Mem de Sá, 79 - Centro',
      descricao: 'Cria da cidade maravilhosa o Carioca da Gema é naturalmente privilegiado, nasce numa fonte inesgotável de prazer e leva a vida cercado de uma rica tradição cultural. O carioca traz na alma o mapa da alegria, da descontração, da musicalidade e da poesia. A natureza garante a inspiração criando um cenário de muito sol, samba, praia e futebol, fiéis e inseparáveis companheiros, da zona norte a zona sul.Desse espírito despojado, resultado de uma grande mistura de raças, e uma infinidade de influências culturais, nasceu duas das mais fortes expressões musicais o samba e o chorinho; gêneros populares, consagrados, que traduzem a vida em arte, e transformam tristeza em alegria. Uma química de um povo sensível que vem ganhando destaque no mundo atraindo atenção e o interesse de outras culturas na difusão e promoção desse jeito de ser, da arte popular.Desde 2000 o Café Musical Carioca da Gema apresenta o que há de melhor da música popular brasileira através desses dois gêneros tradicionais cariocas. Reconhecido pela conquista de prêmios a cargo de uma exclusiva programação musical, da originalidade artística, e da inovação na área da gastronomia. Ao longo do tempo vem se destacando pelos melhores atributos do espírito carioca. Através do desempenho de seus melhores artistas, músicos, intérpretes e cantores. Uma reunião especial de prazer e qualidade, ambiente, serviço, música e gastronomia. Com os melhores artistas e músicos; do melhor chope, da cerveja mais gelada, do melhor samba, e um grande público em torno da nossa cultura popular carioca.Localizado no histórico bairro da lapa, no Centro do Rio de Janeiro, o Carioca da Gema se fez pelo pioneirismo em ocupar antigos casarões do bairro, para apresentar o que há de melhor no cenário musical popular.',
      imagemUrl: '../images/barcariocadagema.jpg',
      lat: -22.91321310215165,
      long:  -43.181980429620694
    },
    {
      id: 8,
      titulo: 'Antigo Solar do Visconde do Rio Seco',
      endereco: ' Praça Tiradentes, nº 67  II R.A. - Centro',
      descricao: 'Localizado num dos cantos do antigo largo do Rossio na esquina da rua Nova do Conde (respectivamente praça Tiradentes e rua Barão do Rio Branco atuais), o edifício já existia no início do século XIX quando o príncipe regente d. João chegou ao Brasil. Logo em seguida foi reformado e ganhou ornamentação de gosto neoclássico. Foi residência do barão do Rio Seco, até 1836, sede do elegante Clube Fluminense em 1860. A mais duradoura função do velho palacete foi como sede da Secretaria / Ministério da Justiça e Negócios do Interior desde o segundo reinado (1873) até 1930. A partir de 1934 passa a abrigar o Departamento de Trânsito, sucessivamente, do Distrito Federal e dos Estados da Guanabara e do Rio de Janeiro. A construção atual tem partido compacto com três pavimentos de planta retangular desenvolvida em torno de um pátio interno. A simplicidade austera do seu aspecto exterior com embasamento de pedra e linhas retas é suavizada pelas estátuas sobre os cunhais e pela platibanda com folhas de acanto estilizadas, em harmoniosa obediência à regra clássica. Desde o decênio de 1990, o edifício encontra- se desocupado. Foi posteriormente tombado pelo Iphan e hoje integra o projeto de revitalização da praça Tiradentes, como parte do programa.',
      imagemUrl: '../images/solar.jpg',
      lat: -22.907486502574415,
      long: -43.183819643433424
    },
    {
      id: 9,
      titulo: 'Edifício São Miguel',
      endereco: 'Avenida Beira Mar, 406 - Centro',
      descricao: 'São 12 andares e mais de cem unidades de uso misto. Possivelmente na época de sua inauguração os apartamentos eram somente residenciais. Construído por Leonídio Gomes & Cia. o São Miguel possui uma entrada em diagonal que leva o visitante para um hall gigantesco decorado com mármores escuros e claros. Na portaria também estão espelhos e luminárias embutidas nas pilastras. Os elevadores antigos ainda possuem portas pantográficas. Ao lado da entrada do edifício foi colocada uma placa indicando que o poeta Manuel Bandeira (1886-1968) viveu nessa construção entre as décadas de 1940 a 1960. Outro famoso que morou no São Miguel foi o pintor Cândido Portinari (1903-1962) entre os anos de 1939 a 1942.',
      imagemUrl: '../public/images/ediciosaomiguel.jpg',
      lat: -22.91109321043468, 
      long: -43.172316603448664
    }
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
   
    <FeedContainer>
      <FilterContainer>
        <FilterIcon />
        <EntradaFiltro type="text" placeholder="Buscar" onChange={(e) => filtrar(e.target.value)} />
      </FilterContainer>
      <PostContainer>
        {reversed.map(postagem => (
          <Post
            key={postagem.id}
            titulo={postagem.titulo}
            endereco={postagem.endereco}
            descricao={postagem.descricao}
            imagemUrl={postagem.imagemUrl}
            lat = {postagem.lat}
            long= {postagem.long}
          />
        ))}
      </PostContainer>
    </FeedContainer>
   
  );
};

export default FeedDeImoveis;

