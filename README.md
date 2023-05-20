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