# Projeto de implemetanção de sistema da empresa PasseioRio

## **1 - Ciclo 5W2H:**

- **O QUÊ ? :** Desenvolver um sistema para a empresa PasseioRio um feed de ponstagens que contenha a história, curiosidades e outros tipos de informações a respeito de novos empreendimentos imobiliários, bares e estabelecimentos da cidade do Rio de janeiro.

- **COMO ? :** O sistema será desenvolvido usando html , css e javascript com auxílio do framework react, usando API com google maps.

- **QUEM ? :** O sistema terá como público-alvo turistas, curiosos e qualquer um que tenha acesso ao aplicativo da empresa PasseioRio.

- **PORQUÊ ? :** O maior propósito do sistema é facilitar e gameficar a entrega de informação para os usuários do app.

- **ONDE ? :** O sistema ficaria dentro do aplicativo da empresa PasseioRio, em uma aba específica da aplicação. 

- **QUANDO ? :** O sistema pode ser usado a qualquer hora e dia da semana, não dependendo de um horário específico para seu funcionamento.

- As postagens mais recentes do sistema deverão ficar no topo da página, sendo visualizadas primeiro as adições mais recentes.

 ## **2 - Lista de requisitos:**

 **Funcionais:**
- Um feed de noticias funcional e interativo para o usuário.
- A página do sistema deverá se movimentar apenas na vertical.
- Os post realizados no sistema prototipado deverão conter informações sobre o local como: história, sua categoria (bar,prédio,casa,banco,etc),curiosidades e fotos do espaço.
- O design do sistema deverá ser parecido com o do "Instagram".


 **Não funcionais:**
- O sistema deve ser operacional tanto em IOS quanto para Android.
- O código do sistema deve estar hospedado no Github
- O sistema deve ser acessível pelo app do Passeio Carioca.
- O sistema deve ser feito usando o framework REACT.
- O sistema deverá ser integrado com a API do Google maps.
- As postagens mais recentes do sistema deverão ficar no topo da página, sendo visualizadas primeiro as adições mais recentes.

## **3 - Casos de Uso:**

**Caso de uso:** Visualizar Feed

**Ator Principal:** Usuário

**Interessados e Interesses:**
- Usuário: Deseja visualizar o feed de postagens, visualizando em ordem cronológica de postagem as fotos e algumas informações prévias dos imóveis mais recentes postados.
- Sistema :  Deseja mostrar ao usuário as últimas postagens, algumas informações e fotos sobre o local, além de inicializar o usuário na aba de feed.

**Caso de uso:** Visualizar postagem

**Ator Principal:** Usuário

**Interessados e Interesses:**
- Usuário: Deseja visualizar determinada postagem para obter mais informações do que as apenas apresentadas no feed, fotos e curiosidades específicas sobre o local da postagem.
- Sistema: Deseja mostrar ao usuário informações mais detalhadas do local referente a postagem ao usuario.

**Caso de uso:** Adicionar local aos favoritos

**Ator Principal:** Usuário

**Interessados e Interesses:**
- Usuário: Deseja por meio de um ícone ao clicar na postagem adicionar o local da publicação aos seus própios locais favoritos do aplicativo, de maneira com que o local fique gravado na lista de locais favoritos do usuário, facilitando assim sua localização de maneira dinâmica .
- Sistema: Adiciona o local selecionado pelo usuário aos locais favoritos do usuário (uma lista que ficaria a parte do feed).
