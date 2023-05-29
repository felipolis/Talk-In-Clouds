# Talk-In-Clouds

## Introdução

A aplicação  Talk-In-Clouds é uma aplicação web de chat em tempo real, projetada para permitir que os usuários se comuniquem de forma eficiente e conveniente. A principal função da aplicação é possibilitar conversas entre duas ou mais pessoas, seja em um ambiente de chat individual ou em grupos.

A aplicação foi construída utilizando a stack MERN (MongoDB, Express, React e Node.js), que é um conjunto de tecnologias amplamente utilizadas no desenvolvimento web. O MongoDB foi escolhido como banco de dados, hospedado no Atlas, para armazenar os dados da aplicação de forma escalável e confiável. A estrutura de back-end é baseada no Node.js e no framework Express, que permitem a criação de APIs robustas e escaláveis.

Para garantir a comunicação em tempo real, integramos o socket.io, que é uma biblioteca JavaScript que facilita a troca de eventos em tempo real entre o cliente e o servidor. Isso permite que as mensagens sejam enviadas e recebidas instantaneamente, proporcionando uma experiência de chat em tempo real.

Além disso, a aplicação oferece recursos de cadastro e login para os usuários, garantindo a autenticação e a segurança dos dados. Também implementamos a funcionalidade de armazenamento de fotos de perfil, utilizando o serviço de hospedagem de imagens do Cloudinary.

Para manter a consistência dos dados, utilizamos o LocalStorage, que é uma forma de armazenamento de dados local no navegador. Essa abordagem permite que as informações do usuário sejam armazenadas localmente e acessíveis mesmo quando houver uma desconexão temporária ou perda de conexão com a internet.

No geral, essa aplicação de sistema distribuído foi projetada para fornecer uma plataforma de chat em tempo real, com recursos de cadastro, autenticação, grupos de conversa e armazenamento seguro de dados. Essa combinação de tecnologias e abordagens permite uma comunicação eficiente e confiável entre os usuários, independentemente de sua localização geográfica.

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

## Explicação detalhada

## Como executar

***Made by Felipe Archanjo.***
