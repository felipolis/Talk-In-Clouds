# Talk-In-Clouds

## Introdução

A aplicação  Talk-In-Clouds é uma aplicação web de chat em tempo real, projetada para permitir que os usuários se comuniquem de forma eficiente e conveniente. A principal função da aplicação é possibilitar conversas entre duas ou mais pessoas, seja em um ambiente de chat individual ou em grupos.

A aplicação foi construída utilizando a stack MERN (MongoDB, Express, React e Node.js), que é um conjunto de tecnologias amplamente utilizadas no desenvolvimento web. O MongoDB foi escolhido como banco de dados, hospedado no Atlas, para armazenar os dados da aplicação de forma escalável e confiável. A estrutura de back-end é baseada no Node.js e no framework Express, que permitem a criação de APIs robustas e escaláveis.

Para garantir a comunicação em tempo real, integramos o socket.io, que é uma biblioteca JavaScript que facilita a troca de eventos em tempo real entre o cliente e o servidor. Isso permite que as mensagens sejam enviadas e recebidas instantaneamente, proporcionando uma experiência de chat em tempo real.

Além disso, a aplicação oferece recursos de cadastro e login para os usuários, garantindo a autenticação e a segurança dos dados. Também implementamos a funcionalidade de armazenamento de fotos de perfil, utilizando o serviço de hospedagem de imagens do Cloudinary.

Para manter a consistência dos dados, utilizamos o LocalStorage, que é uma forma de armazenamento de dados local no navegador. Essa abordagem permite que as informações do usuário sejam armazenadas localmente e acessíveis mesmo quando houver uma desconexão temporária ou perda de conexão com a internet.

No geral, essa aplicação de sistema distribuído foi projetada para fornecer uma plataforma de chat em tempo real, com recursos de cadastro, autenticação, grupos de conversa e armazenamento seguro de dados. Essa combinação de tecnologias e abordagens permite uma comunicação eficiente e confiável entre os usuários, independentemente de sua localização geográfica.

## Layout

## Sistema Distribuido

A aplicação se encaixa na definição de sistemas distribuídos de várias maneiras. Um sistema distribuído é composto por um conjunto de componentes interconectados que trabalham juntos para realizar uma função específica. Nesse caso, a aplicação web de chat em tempo real utiliza diferentes tecnologias e serviços distribuídos para criar uma experiência colaborativa entre os usuários. Abaixo, detalharei como a aplicação se encaixa nessa definição:

1. Comunicação entre componentes distribuídos: A aplicação permite a comunicação entre diferentes componentes distribuídos, como o cliente (navegador web) e o servidor. O cliente se conecta ao servidor para enviar e receber mensagens em tempo real. Essa comunicação é estabelecida por meio do protocolo de comunicação do socket.io, que facilita a troca de eventos em tempo real. Dessa forma, a aplicação permite que usuários em diferentes dispositivos e locais se comuniquem entre si.
2. Escalabilidade e disponibilidade: A aplicação utiliza o MongoDB hospedado no Atlas como banco de dados. Essa escolha permite que os dados sejam armazenados de forma distribuída em vários servidores, garantindo a escalabilidade e a disponibilidade do sistema. O MongoDB é projetado para funcionar em ambientes distribuídos, permitindo que os dados sejam replicados e distribuídos em várias máquinas para lidar com um grande número de usuários e garantir a disponibilidade contínua do serviço.
3. Gerenciamento de autenticação e autorização: A aplicação possui recursos de cadastro e login, o que requer um gerenciamento adequado de autenticação e autorização. Quando um usuário se cadastra ou faz login, as informações de autenticação são verificadas no servidor para garantir que apenas usuários autorizados tenham acesso aos recursos da aplicação. Esse processo envolve a troca de informações entre o cliente e o servidor distribuído, onde os dados de autenticação e autorização são validados e mantidos de forma consistente.
4. Armazenamento de arquivos na nuvem: A aplicação utiliza o serviço de hospedagem de imagens do Cloudinary para armazenar as fotos de perfil dos usuários. O Cloudinary é uma solução distribuída de armazenamento em nuvem, que permite que as imagens sejam carregadas, armazenadas e acessadas de forma eficiente e confiável. Ao utilizar esse serviço distribuído, a aplicação garante a escalabilidade e a disponibilidade do armazenamento de arquivos, além de fornecer recursos avançados de processamento de imagens.
5. Consistência dos dados: Para garantir a consistência dos dados, a aplicação utiliza o LocalStorage no navegador. O LocalStorage é uma forma de armazenamento de dados local no cliente, o que significa que as informações do usuário são armazenadas no próprio dispositivo. Essa abordagem distribuída permite que os dados sejam acessíveis mesmo quando houver uma desconexão temporária ou perda de conexão com a internet. Assim, os usuários podem continuar a usar a aplicação e visualizar suas informações mesmo em situações de conectividade instável.

Em resumo, a aplicação de chat em tempo real se encaixa na definição de sistemas distribuídos por meio da comunicação entre componentes distribuídos, escalabilidade

## Arquitetura do sistema

![image](https://github.com/felipolis/Talk-In-Clouds/blob/main/arquitetura.png?raw=true)

## Interface de Serviço

As solicitações e respostas descritas são exemplos de requisições HTTP em uma API de bate-papo (chat). Vou explicar cada uma delas em detalhes:

1. CADASTRO:

   - Requisição:
     - Método: POST
     - URL: http://localhost:5000/api/v1/user/signup
     - Cabeçalhos:
       - "Content-Type": "application/json"
     - Corpo:
       ```
       {
         "name": "<NAME>",
         "email": "<EMAIL>",
         "password": "<PASSWORD>",
         "confirmPassword": "<CONFIRM_PASSWORD>"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "name": "<NAME>",
       "email": "<EMAIL>",
       "pic": "<URL>",
       "token": <TOKEN>
     }
     ```
   - Explicação: Essa solicitação é usada para cadastrar um novo usuário na plataforma de bate-papo. O cliente faz uma solicitação POST com os detalhes do usuário no corpo da requisição. A resposta contém os detalhes do usuário recém-criado, incluindo um ID único, nome, email, URL de imagem (pic) e um token de autenticação.
2. LOGIN:

   - Requisição:
     - Método: POST
     - URL: http://localhost:5000/api/v1/user/signin
     - Cabeçalhos:
       - "Content-Type": "application/json"
     - Corpo:
       ```
       {
         "email": "<EMAIL>",
         "password": "<PASSWORD>"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "name": "<NAME>",
       "email": "<EMAIL>",
       "pic": "<URL>",
       "token": <TOKEN>
     }
     ```
   - Explicação: Essa solicitação é usada para autenticar um usuário existente. O cliente envia o email e senha do usuário no corpo da requisição. Se as credenciais estiverem corretas, a resposta retornará os detalhes do usuário autenticado, incluindo um ID único, nome, email, URL de imagem (pic) e um token de autenticação.
3. BUSCAR USUÁRIOS:

   - Requisição:
     - Método: GET
     - URL: http://localhost:5000/api/v1/user?search=`<SEARCH>`
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": "`Bearer <TOKEN>`"
     - Corpo: vazio
   - Resposta:
     ```
     [<USERS>]
     ```
   - Explicação: Essa solicitação é usada para buscar usuários na plataforma de bate-papo. O cliente faz uma solicitação GET para a URL especificada, fornecendo um parâmetro de pesquisa (search) para filtrar os usuários. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna uma lista de usuários correspondentes aos critérios de pesquisa.
4. CRIAR OU ACESSAR UM CHAT ENTRE DUAS PESSOAS:

   - Requisição:
     - Método: POST
     - URL: http://localhost:5000/api/v1/chat
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo:
       ```
       {
         "userId": "<USER_ID>"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "chatName": "<CHAT_NAME>",
       "isGroupChat": <FALSE>,
       "users": [<USERS>],
       "createdAt": "<DATE>",
       "updatedAt": "<DATE>"
     }
     ```
   - Explicação: Essa solicitação é usada para criar ou acessar um chat entre duas pessoas. O cliente faz uma solicitação POST com o ID do usuário no corpo da requisição. O cabeçalho inclui um token de autenticação para autorização. Se o chat entre as duas pessoas já existir, a resposta retornará os detalhes do chat. Caso contrário, um novo chat será criado com um ID único, nome do chat (chatName), indicador de chat em grupo (isGroupChat), lista de usuários participantes (users), data de criação (createdAt) e data de atualização (updatedAt).
5. BUSCAR CHATS:

   - Requisição:
     - Método: GET
     - URL: http://localhost:5000/api/v1/chat
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo: vazio
   - Resposta:
     ```
     [<CHATS>]
     ```
   - Explicação: Essa solicitação é usada para buscar todos os chats do usuário na plataforma de bate-papo. O cliente faz uma solicitação GET para a URL especificada. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna uma lista de chats aos quais o usuário pertence.
6. CRIAR UM GRUPO A PARTIR DE 3 PESSOAS:

   - Requisição:
     - Método: POST
     - URL: http://localhost:5000/api/v1/chat/group
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo:
       ```
       {
         "name": "<NAME>",
         "users": "[<USER_IDS>]"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "chatName": "<CHAT_NAME>",
       "isGroupChat": <TRUE>,
       "users": [<USERS>],
       "createdAt": "<DATE>",
       "updatedAt": "<DATE>"
     }
     ```
   - Explicação: Essa solicitação é usada para criar um grupo de chat com três ou mais pessoas. O cliente faz uma solicitação POST com o nome do grupo (name) e uma lista de IDs de usuários participantes (users) no corpo da requisição. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna os detalhes do grupo criado, incluindo um ID único, nome do chat (chatName), indicador de chat em grupo (isGroupChat), lista de usuários participantes (users), data de criação (createdAt) e data de atualização (updatedAt).
7. RENOMEAR UM GRUPO:

   - Requisição:
     - Método: PUT
     - URL: http://localhost:5000/api/v1/chat/rename
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo:
       ```
       {
         "chatId": "<CHAT_ID>",
         "chatName": "<CHAT_NAME"
       }

       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "chatName": "<CHAT_NAME>",
       "isGroupChat": <TRUE>,
       "users": [<USERS>],
       "createdAt": "<DATE>",
       "updatedAt": "<DATE>"
     }
     ```
   - Explicação: Essa solicitação é usada para renomear um grupo de chat. O cliente faz uma solicitação PUT com o ID do chat (chatId) e o novo nome do chat (chatName) no corpo da requisição. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna os detalhes do grupo de chat atualizado, incluindo o ID único, nome do chat (chatName), indicador de chat em grupo (isGroupChat), lista de usuários participantes (users), data de criação (createdAt) e data de atualização (updatedAt).
8. ADICIONAR UM NOVO USUÁRIO AO GRUPO:

   - Requisição:
     - Método: PUT
     - URL: http://localhost:5000/api/v1/chat/groupadd
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo:
       ```
       {
         "chatId": "<CHAT_ID>",
         "userId": "<USER_ID>"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "chatName": "<CHAT_NAME>",
       "isGroupChat": <TRUE>,
       "users": [<USERS>],
       "createdAt": "<DATE>",
       "updatedAt": "<DATE>"
     }
     ```
   - Explicação: Essa solicitação é usada para adicionar um novo usuário a um grupo de chat existente. O cliente faz uma solicitação PUT com o ID do chat (chatId) e o ID do usuário a ser adicionado (userId) no corpo da requisição. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna os detalhes do grupo de chat atualizado, incluindo o ID único, nome do chat (chatName), indicador de chat em grupo (isGroupChat), lista de usuários participantes (users), data de criação (createdAt) e data de atualização (updatedAt).
9. REMOVER UM USUÁRIO DO GRUPO:

   - Requisição:
     - Método: PUT
     - URL: http://localhost:5000/api/v1/chat/groupremove
     - Cabeçalhos:
       - "Content-Type": "application/json"
       - "Authorization": `Bearer <TOKEN>`
     - Corpo:
       ```
       {
         "chatId": "<CHAT_ID>",
         "userId": "<USER_ID>"
       }
       ```
   - Resposta:
     ```
     {
       "_id": "<ID>",
       "chatName": "<CHAT_NAME>",
       "isGroupChat": <TRUE>,
       "users": [<USERS>],
       "createdAt": "<DATE>",
       "updatedAt": "<DATE>"
     }
     ```
   - Explicação: Essa solicitação é usada para remover um usuário de um grupo de chat existente. O cliente faz uma solicitação PUT com o ID do chat (chatId) e o ID do usuário a ser removido (userId) no corpo da requisição. O cabeçalho inclui um token de autenticação para autorização. A resposta retorna os detalhes do grupo de chat atualizado, incluindo o ID único, nome do chat (chatName), indicador de chat em grupo (isGroupChat), lista de usuários participantes (users), data de criação (createdAt) e data de atualização (updatedAt).

## Estrutura do Projeto

##### Client:

> /client
>
>> /src
>>
>>> /animations
>>>
>>>> typing.json
>>>>
>>>
>>> /api
>>>
>>>> /client
>>>>
>>>>> private.client.js
>>>>>
>>>>> public.client.js
>>>>>
>>>>
>>>> /modules
>>>>
>>>>> chat.api.js
>>>>>
>>>>> message.api.js
>>>>>
>>>>> user.api.js
>>>>>
>>>>
>>>
>>> /components
>>>
>>>> Register.jsx
>>>>
>>>> Login.jsx
>>>>
>>>> Navbar.jsx
>>>>
>>>> ChatLoading.jsx
>>>>
>>>> ProfileModal.jsx
>>>>
>>>> UserListItem.jsx
>>>>
>>>> MyChats.jsx
>>>>
>>>> GroupChatModal.jsx
>>>>
>>>> UserBadgeItem.jsx
>>>>
>>>> ChatBox.jsx
>>>>
>>>> SingleChat.jsx
>>>>
>>>> ScrollableChat.jsx
>>>>
>>>> UpdateGroupChatModal.jsx
>>>>
>>>> styles.css
>>>>
>>>
>>> /config
>>>
>>>> ChatLogics.js
>>>>
>>>
>>> /context
>>>
>>>> ChatProvider.jsx
>>>>
>>>
>>> /pages
>>>
>>>> HomePage.jsx
>>>>
>>>> ChatPage.jsx
>>>>
>>>
>>> App.jsx
>>>
>>> App.css
>>>
>>> index.jsx
>>>
>>> index.css
>>>
>>
>> .env
>>
>> package.json
>>

##### Server:

> /server
>
>> /src
>>
>>> /middlewares
>>>
>>>> token.middleware.js
>>>>
>>>
>>> /handlers
>>>
>>>> request.handler.js
>>>>
>>>> response.handler.js
>>>>
>>>
>>> /models
>>>
>>>> model.options.js
>>>>
>>>> user.model.js
>>>>
>>>> chat.model.js
>>>>
>>>> message.model.js
>>>>
>>>
>>> /routes
>>>
>>>> index.js
>>>>
>>>> user.route.js
>>>>
>>>> chat.route.js
>>>>
>>>> message.route.js
>>>>
>>>
>>> /controllers
>>>
>>>> user.controller.js
>>>>
>>>> chat.controller.js
>>>>
>>>> message.controller.js
>>>>
>>>
>>
>> index.js
>>
>> .env
>>
>> package.json
>>

## Explicação detalhada

**/client/src/animations/typing.json**: é um arquivo de animação no formato JSON.

**/client/src/api/client/private.client.js:** O arquivo "private.client.js" é um módulo JavaScript que configura e exporta um cliente para fazer requisições HTTP em uma API privada. Ele utiliza a biblioteca "axios" para lidar com as requisições e "queryString" para serializar os parâmetros. O cliente é configurado com uma URL base que é obtida da variável de ambiente "REACT_APP_API_URL" ou, caso não esteja definida, usa a URL padrão "[http://127.0.0.1:5000/api/v1](http://127.0.0.1:5000/api/v1)". O cliente também define interceptors, que são funções que são executadas antes de cada requisição ou após cada resposta. No interceptor de requisição, é adicionado um cabeçalho com o tipo de conteúdo e um token de autorização, que é obtido do armazenamento local do navegador. O interceptor de resposta retorna os dados da resposta ou lança um erro com os dados da resposta de erro. O cliente é exportado para ser usado em outros arquivos do projeto. Em resumo, o arquivo configura um cliente HTTP personalizado com cabeçalhos de autenticação para interagir com uma API.

**/client/src/api/client/public.client.js:** O arquivo "public.client.js" é um módulo JavaScript que configura e exporta um cliente para fazer requisições HTTP em uma API pública. Assim como o arquivo anterior, ele utiliza a biblioteca "axios" para lidar com as requisições e "queryString" para serializar os parâmetros. O cliente é configurado com uma URL base que é obtida da variável de ambiente "REACT_APP_API_URL" ou, caso não esteja definida, usa a URL padrão "[http://127.0.0.1:5000/api/v1](http://127.0.0.1:5000/api/v1)". O cliente não possui interceptors para autenticação, portanto não adiciona cabeçalhos de autorização nas requisições. O interceptor de resposta retorna os dados da resposta ou lança um erro com os dados da resposta de erro. O cliente é exportado para ser usado em outros arquivos do projeto. Em resumo, o arquivo configura um cliente HTTP personalizado para interagir com uma API pública, sem a necessidade de autenticação.

**/client/src/api/modules/user.api.js:** O arquivo "user.api.js" é um módulo JavaScript que define e exporta um conjunto de funções relacionadas à API de usuários. Ele importa os clientes personalizados "privateClient" e "publicClient" de outros arquivos, que foram explicados anteriormente. O objeto "userEndpoints" contém os endpoints da API relacionados aos usuários, como o endpoint de login, cadastro e obtenção de usuários. Em seguida, o objeto "userApi" contém três funções assíncronas: "signup" para realizar o cadastro de um novo usuário, "signin" para realizar o login de um usuário existente e "getUsers" para obter usuários com base em um parâmetro de pesquisa. Cada função faz uma chamada à API utilizando o cliente apropriado (público ou privado) e os endpoints correspondentes. Em caso de sucesso, a função retorna um objeto com a resposta da API. Em caso de erro, a função captura o erro e o imprime no console, retornando um objeto com o erro. O objeto "userApi" é exportado para ser usado em outros arquivos do projeto. Em resumo, o arquivo encapsula as chamadas à API relacionadas aos usuários, utilizando os clientes personalizados e endpoints específicos para cada operação.

**/client/src/api/modules/chat.api.js:** O arquivo "chat.api.js" é um módulo JavaScript que define e exporta um conjunto de funções relacionadas à API de bate-papo. Ele importa o cliente personalizado "privateClient" de outro arquivo, que foi explicado anteriormente. O objeto "chatEndpoints" contém os endpoints da API relacionados ao bate-papo, como obtenção de chats, acesso a um chat específico, criação de chat em grupo, renomeação de grupo, remoção de um usuário de um grupo e adição de um usuário a um grupo. Em seguida, o objeto "chatApi" contém várias funções assíncronas, cada uma correspondendo a uma operação relacionada ao bate-papo. Cada função faz uma chamada à API utilizando o cliente privado e o endpoint correspondente. Elas passam os parâmetros necessários para a API, como o ID do usuário, nome do grupo, ID do chat, etc. Em caso de sucesso, a função retorna um objeto com a resposta da API. Em caso de erro, a função captura o erro e o imprime no console, retornando um objeto com o erro. O objeto "chatApi" é exportado para ser usado em outros arquivos do projeto. Em resumo, o arquivo encapsula as chamadas à API relacionadas ao bate-papo, utilizando o cliente privado e endpoints específicos para cada operação.

**/client/src/api/modules/message.api.js:** O arquivo "message.api.js" é um módulo JavaScript que define e exporta um conjunto de funções relacionadas à API de mensagens. Ele importa o cliente personalizado "privateClient" de outro arquivo, que foi explicado anteriormente. O objeto "messageEndpoints" contém os endpoints da API relacionados às mensagens, como obtenção de mensagens de um chat específico e envio de uma nova mensagem. O endpoint de obtenção de mensagens requer o parâmetro "chatId" para identificar o chat do qual as mensagens devem ser obtidas. Em seguida, o objeto "messageApi" contém duas funções assíncronas: "fetchMessages" para obter as mensagens de um chat específico e "sendMessage" para enviar uma nova mensagem para um chat. Cada função faz uma chamada à API utilizando o cliente privado e os endpoints correspondentes. Elas passam os parâmetros necessários para a API, como o conteúdo da mensagem e o ID do chat. Em caso de sucesso, a função retorna um objeto com a resposta da API. Em caso de erro, a função captura o erro e o imprime no console, retornando um objeto com o erro. O objeto "messageApi" é exportado para ser usado em outros arquivos do projeto. Em resumo, o arquivo encapsula as chamadas à API relacionadas às mensagens, utilizando o cliente privado e endpoints específicos para obter e enviar mensagens.

**/client/src/App.jsx:** O arquivo "App.jsx" é o componente principal da aplicação e define o roteamento das páginas utilizando o pacote "react-router-dom". Ele estabelece as rotas para a página inicial e a página de chats, representadas pelos componentes HomePage e ChatPage, respectivamente. Através da utilização da componente "Routes", é possível mapear as URLs para os componentes correspondentes, permitindo a renderização correta da página com base na rota acessada. Em resumo, o arquivo App.jsx é responsável por gerenciar o roteamento e a renderização das páginas da aplicação, proporcionando a navegação adequada entre os diferentes conteúdos.

**/client/src/index.jsx:** O arquivo "index.jsx" é o ponto de entrada da aplicação React. Ele importa as dependências necessárias, como React, ReactDOM e estilos CSS, e define a estrutura da aplicação. Através da função render do ReactDOM, o componente principal da aplicação, App, é renderizado dentro de uma hierarquia de provedores de contexto, incluindo ChatProvider e ChakraProvider. Além disso, o BrowserRouter é utilizado para gerenciar o roteamento da aplicação. Em resumo, o arquivo index.jsx configura a renderização do componente principal, juntamente com os provedores de contexto e o roteamento necessários para o funcionamento correto da aplicação React.

**/client/src/pages/HomePage.jsx:** O arquivo "HomePage.jsx" é responsável por definir a página inicial da aplicação. Ele importa os componentes Login e Register, que são responsáveis pelos formulários de login e registro, respectivamente. A página é composta por um contêiner centralizado, que contém um cabeçalho com o nome da aplicação "Talk-In-Clouds" e uma área de conteúdo principal. A área de conteúdo principal é composta por abas (Tabs) que permitem alternar entre as opções de login e registro. Cada aba exibe o componente correspondente: Login ou Register. Ao clicar em uma das abas, o respectivo formulário é exibido na área de conteúdo principal. A página utiliza estilos e componentes do Chakra UI, como Box, Container, Tab, TabList, TabPanel e TabPanels, para criar a estrutura visual da página. Através do hook useNavigate do react-router-dom, é possível navegar entre as páginas da aplicação. Em resumo, o arquivo HomePage.jsx define a estrutura e o comportamento da página inicial, incluindo os formulários de login e registro.

**/client/src/pages/ChatPage.jsx:** O arquivo "ChatPage.jsx" é responsável por definir a página de bate-papo da aplicação. Ele importa componentes como Box, useState e ChatState do Chakra UI, react, e ChatProvider, bem como os componentes ChatBox, MyChats e Navbar. A página é composta por um contêiner principal que ocupa toda a largura da página. Dentro desse contêiner, há uma verificação para exibir a barra de navegação (Navbar) somente se houver um usuário logado. Em seguida, há um contêiner flexível (Box) que ocupa a maior parte da altura da página (92vh). Dentro desse contêiner, são renderizados os componentes MyChats e ChatBox, que são responsáveis pela exibição dos chats disponíveis e pela caixa de bate-papo, respectivamente. A variável "user" é obtida através do hook ChatState, que faz parte do contexto do chat. Além disso, a variável de estado "fetchAgain" e a função "setFetchAgain" são utilizadas para controlar o comportamento de atualização dos chats. Em resumo, o arquivo ChatPage.jsx define a estrutura e o comportamento da página de bate-papo, exibindo os componentes necessários para a interação do usuário com os chats disponíveis.

**/client/src/components/Register.jsx:** O arquivo "Register.jsx" trata-se de um componente que implementa o formulário de registro em uma aplicação. Ele é responsável por capturar os dados inseridos pelo usuário, como nome, email, senha e foto de perfil. Além disso, o componente realiza validações nos campos, exibe mensagens de aviso ou sucesso e faz o upload da foto para um serviço de hospedagem. Ao clicar no botão de registro, os dados são enviados para o backend e, em caso de sucesso, o usuário é redirecionado para a página de chats. Em suma, o componente Register.jsx desempenha um papel crucial no processo de registro de novos usuários na aplicação.

**/client/src/components/Login.jsx:** O arquivo "Login.jsx" é um componente responsável por exibir o formulário de login em uma aplicação. Ele captura as informações inseridas pelo usuário, como o email e a senha, e realiza validações nos campos. Quando o usuário clica no botão de login, as informações são enviadas para o backend e são feitas verificações. Em caso de sucesso, o usuário é redirecionado para a página de chats. O componente também inclui um botão para exibir ou ocultar a senha e um botão para preencher automaticamente os campos com as credenciais de um usuário convidado. O componente utiliza hooks do React, como useState e useToast, para gerenciar o estado dos campos e exibir mensagens de aviso ou sucesso. Em resumo, o componente Login.jsx desempenha um papel essencial no processo de autenticação e acesso do usuário à aplicação.

**/client/src/components/Navbar.jsx:**

**/client/src/components/ChatLoading.jsx:** O arquivo "ChatLoading.jsx" é um componente que exibe uma animação de carregamento em forma de esqueletos para simular o carregamento de conteúdo em um chat. Ele cria uma pilha vertical de esqueletos que representam mensagens e têm uma altura fixa. Essa abordagem visual indica que o conteúdo está sendo carregado enquanto os dados reais do chat são processados.

**/client/src/components/ProfileModal.jsx:** O arquivo "ProfileModal.jsx" é um componente que exibe o perfil de um usuário em um modal. Ele pode ser acionado por meio de um botão ou qualquer outro elemento que seja passado como filho do componente. O modal exibe o nome do usuário, uma imagem de perfil e o endereço de e-mail correspondente. Ao abrir o modal, ele é exibido centralizado na tela e possui um botão "Fechar" para permitir que o usuário o feche quando necessário. A lógica do componente envolve o uso do hook `useDisclosure` para controlar o estado de abertura e fechamento do modal. Quando o usuário clica no botão ou no elemento filho, o modal é aberto, exibindo as informações do usuário. O componente usa os componentes do Chakra UI, como `Modal`, `ModalOverlay`, `ModalContent`, `ModalHeader`, `ModalBody`, `ModalCloseButton`, `ModalFooter`, `Button`, `IconButton`, `Text` e `Image`, para criar a estrutura e o estilo do modal.

**/client/src/components/UserListItem.jsx:** O arquivo "UserListItem.jsx" é um componente que exibe informações de um usuário em um formato de item da lista. Ele renderiza um avatar do usuário, seu nome e seu endereço de e-mail. Além disso, o componente é interativo, permitindo que o usuário clique nele e execute uma determinada função, que é passada como propriedade para o componente. Ao ser clicado, o item da lista muda de cor e destaca-se visualmente para fornecer feedback visual ao usuário. A lógica do componente é simples: renderizar as informações do usuário em um formato visualmente agradável e permitir a interação com o item da lista através do clique, ativando a função especificada.

**/client/src/components/MyChats.jsx:**

**/client/src/components/GroupChatModal.jsx:** O arquivo "GroupChatModal.jsx" é um componente responsável por exibir um modal de criação de grupo de chat. Ele permite que os usuários insiram o nome do chat, adicionem membros ao grupo e visualizem os resultados da pesquisa de usuários. O componente faz chamadas à API para obter os resultados da pesquisa e criar o grupo de chat. Ao submeter o formulário com sucesso, o componente atualiza o estado dos chats e exibe uma mensagem de sucesso. Ele oferece uma interface intuitiva e funcional para a criação de grupos de chat, tornando a interação e organização em conversas em grupo mais eficientes.

**/client/src/components/UserBadgeItem.jsx:** O arquivo "UserBadgeItem.jsx" é um componente que representa um distintivo de usuário em um grupo de chat. O componente recebe como propriedades o objeto do usuário, uma função de manipulação e o ID do administrador do grupo. O componente renderiza um distintivo usando o componente Badge do Chakra UI, exibindo o nome do usuário. Se o usuário for o administrador do grupo, é exibida uma indicação "(Admin)". Ao lado do nome do usuário, é exibido um ícone de fechar representado pelo componente CloseIcon. O componente é estilizado com propriedades como espaçamento, borda arredondada, esquema de cores e tamanho de fonte. Quando o distintivo é clicado, a função de manipulação passada como propriedade é chamada. O componente permite a exibição e interação com os usuários do grupo de chat, incluindo a identificação do administrador e a capacidade de removê-los do grupo.

**/client/src/components/ChatBox.jsx:**

**/client/src/components/SingleChat.jsx:**

**/client/src/components/ScrollableChat.jsx:** O arquivo "ScrollableChat.jsx" é um componente responsável por exibir uma lista de mensagens de chat em uma área com rolagem vertical. O componente itera sobre o array de mensagens recebido como propriedade e renderiza cada mensagem, exibindo o Avatar do remetente ao lado da mensagem correspondente. Ele também utiliza estilizações condicionais para diferenciar as mensagens enviadas pelo próprio usuário das mensagens enviadas por outros participantes, ajustando cores de fundo, cores de texto, margens e outros estilos. O componente permite uma experiência de chat interativa e visualmente agradável, facilitando a visualização e a rolagem das mensagens na interface.

**/client/src/components/UpdateGroupChatModal.jsx:** O arquivo "UpdateGroupChatModal.jsx" é um componente de uma aplicação que exibe um modal para atualização de um grupo de chat. Esse modal inclui informações sobre o grupo, como seu nome e participantes, e oferece funcionalidades para adicionar ou remover usuários do grupo. O componente utiliza diversos componentes do Chakra UI para construir o modal, como botões, campos de entrada e ícones. Ele também faz uso de estados para controlar o comportamento do modal, como o estado de abertura/fechamento, o nome do grupo, os resultados da busca por usuários e os estados de carregamento durante as operações. Além disso, o componente se comunica com APIs relacionadas a usuários e chats para realizar as ações de busca, adição e remoção de usuários, bem como a atualização do nome do grupo. Em resumo, o UpdateGroupChatModal é responsável por fornecer uma interface interativa para gerenciar os grupos de chat da aplicação.

**/client/src/config/ChatLogics.js:** O arquivo "ChatLogics.jsx" contém um conjunto de funções auxiliares relacionadas à lógica de exibição e manipulação de mensagens em um chat. Essas funções são utilizadas para determinar se as mensagens têm o mesmo remetente, se são a última mensagem do remetente, se são do mesmo usuário, entre outras verificações. Além disso, existem funções para obter informações sobre o remetente, como nome, foto e ID. Essas funções auxiliam no processamento e na exibição adequada das mensagens no contexto da interface do usuário do chat.

**/client/src/context/ChatProvider.jsx:** O arquivo "ChatProvider.jsx" trata-se de um componente React que implementa o contexto para gerenciar o estado e as funcionalidades relacionadas ao chat. Ele utiliza o React Context API para criar um contexto chamado "ChatContext".

No componente, são definidos os estados iniciais para o chat selecionado, usuário logado, notificações e lista de chats. Além disso, é utilizado o hook "useNavigate" do React Router para gerenciar a navegação entre as rotas.

Através do useEffect, é verificado se há informações do usuário logado armazenadas no localStorage. Se houver, o estado do usuário é atualizado com essas informações e a rota é redirecionada para "/chats". Caso contrário, a rota é redirecionada para "/" para que o usuário faça o login.

O componente ChatProvider retorna o provedor do contexto, onde são passados os estados e funções que podem ser acessados por outros componentes. Esses valores são encapsulados no objeto fornecido pelo contexto.

Por fim, o componente ChatState é exportado para que outros componentes possam consumir o contexto do chat e acessar os valores armazenados nele.

Em resumo, o arquivo implementa um provedor de contexto para gerenciar o estado e as funcionalidades relacionadas ao chat, incluindo o estado do chat selecionado, usuário logado, notificações e lista de chats. Ele também redireciona a rota com base nas informações do usuário e fornece acesso ao contexto para outros componentes.

## Como executar

##### Server

1. instalação das dependencias:

   ```bash
   $ cd server
   $ yarn
   ```
2. Configuração das variaveis de ambiente:

   ```bash
   $ cp .env.example .env
   ```

   ```
   MONGODB_URL="<MONGODB_URL>"
   PORT=<PORT>
   TOKEN_SECRET_KEY='<SECRET>'
   ```
3. Iniciar o servidor:

   ```bash
   $ yarn start
   ```

##### Client

1. Instalação das dependencias:

   ```bash
   $ cd client
   $ yarn
   ```
2. Configuração das variaveis de ambiente:

   ```bash
   $ cp .env.example .env
   ```

   ```
   REACT_APP_API_URL="<API_URL>"
   REACT_APP_SOCKET_URL="<SOCKET_URL>"
   REACT_APP_CLOUDINARY_URL="<CLOUDINARY_URL>"
   ```
3. Inicia o cliente:

   ```
   $ yarn start
   ```

***Made by Felipe Archanjo.***
