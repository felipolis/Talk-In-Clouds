# Talk-In-Clouds

## Introdução

A aplicação  Talk-In-Clouds é uma aplicação web de chat em tempo real, projetada para permitir que os usuários se comuniquem de forma eficiente e conveniente. A principal função da aplicação é possibilitar conversas entre duas ou mais pessoas, seja em um ambiente de chat individual ou em grupos.

A aplicação foi construída utilizando a stack MERN (MongoDB, Express, React e Node.js), que é um conjunto de tecnologias amplamente utilizadas no desenvolvimento web. O MongoDB foi escolhido como banco de dados, hospedado no Atlas, para armazenar os dados da aplicação de forma escalável e confiável. A estrutura de back-end é baseada no Node.js e no framework Express, que permitem a criação de APIs robustas e escaláveis.

Para garantir a comunicação em tempo real, integramos o socket.io, que é uma biblioteca JavaScript que facilita a troca de eventos em tempo real entre o cliente e o servidor. Isso permite que as mensagens sejam enviadas e recebidas instantaneamente, proporcionando uma experiência de chat em tempo real.

Além disso, a aplicação oferece recursos de cadastro e login para os usuários, garantindo a autenticação e a segurança dos dados. Também implementamos a funcionalidade de armazenamento de fotos de perfil, utilizando o serviço de hospedagem de imagens do Cloudinary.

Para manter a consistência dos dados, utilizamos o LocalStorage, que é uma forma de armazenamento de dados local no navegador. Essa abordagem permite que as informações do usuário sejam armazenadas localmente e acessíveis mesmo quando houver uma desconexão temporária ou perda de conexão com a internet.

No geral, essa aplicação de sistema distribuído foi projetada para fornecer uma plataforma de chat em tempo real, com recursos de cadastro, autenticação, grupos de conversa e armazenamento seguro de dados. Essa combinação de tecnologias e abordagens permite uma comunicação eficiente e confiável entre os usuários, independentemente de sua localização geográfica.

## Arquitetura do sistema

![image](https://github.com/felipolis/Talk-In-Clouds/blob/main/arquitetura.png?raw=true)


## Funcionalidades
A aplicação Talk-In-Clouds possui as seguintes funcionalidades:

1. Autenticação do usuário:
    - Registro (POST): Permite que os usuários se cadastrem na aplicação, fornecendo informações como nome, email e senha.
    - Login (POST): Permite que os usuários façam login na aplicação usando suas credenciais registradas.

2. Usuários:
    - Encontrar usuários (GET): Permite que os usuários encontrem outros usuários cadastrados na aplicação, possibilitando a interação entre eles.
    - Receber notificações (GET + Socket): Os usuários recebem notificações em tempo real quando há atividades relevantes, como convites para grupos ou mensagens recebidas.

3. Grupos de duas pessoas:
    - Criação do grupo (POST): Permite que dois usuários criem um grupo privado para conversar.
    - Envio de mensagens (POST + Socket): Os usuários podem enviar mensagens para o grupo em tempo real.
    - Recebimento de mensagens (GET + Socket): Os usuários recebem as mensagens enviadas no grupo em tempo real.

4. Grupos de três ou mais pessoas:
    - Criação do grupo (POST): Permite que os usuários criem grupos com três ou mais pessoas para conversar.
    - Adição de novos usuários (PUT): Os membros do grupo podem adicionar novos usuários ao grupo para expandir a conversa.
    - Remoção de usuários (PUT): Os membros do grupo podem remover outros usuários do grupo.
    - Alteração do nome do grupo (PUT): Os membros do grupo podem alterar o nome do grupo.
    - Envio de mensagens (POST + Socket): Os usuários podem enviar mensagens para o grupo em tempo real.
    - Recebimento de mensagens (GET + Socket): Os usuários recebem as mensagens enviadas no grupo em tempo real.

Essas funcionalidades permitem que os usuários se cadastrem na aplicação, encontrem outros usuários, criem grupos de conversa, enviem mensagens em tempo real e recebam notificações importantes. A aplicação utiliza a tecnologia de Sockets para fornecer uma experiência de comunicação em tempo real aos usuários.





## Rodando o projeto








***Made by Felipe Archanjo.***