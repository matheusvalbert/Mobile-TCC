# Mobile TCC

Front-end Mobile do projeto de TCC (Sistema de controle de acesso para condomínios).

O projeto é um protótipo de um sistema de controle de acesso para condomínios, no qual se utiliza técnicas de inteligência artificial para detectar e reconhecer faces e placas de moradores e visitantes.

O sistema possibilita que o próprio morador realize o seu cadastro e de seus visitantes.

# Funcionalidades Morador

- Cadastro de moradores: função que permite que o usuário cadastre um novo morador com as seguintes informações: foto do rosto, nome e placa do veículo (opcional);
- Cadastro de visitantes: opção através da qual o morador faz o cadastro de todos os possíveis convidados (tendo necessidade de agendamento), com as mesmas informações que os moradores (foto, nome, placa);
- Agendar visitantes: nesta funcionalidade o morador pode agendar um visitante previamente cadastrada na função cadastro de visitantes, possibilitando ser uma visita única, sendo necessário escolher um dia específico para receber a visita ou ser uma visita recorrente, sendo necessário selecionar os dias da semana que a visita pode entrar no condomínio;
- Criar uma lista de visitantes: função que permite que o morador selecione múltiplas visitas pré-cadastradas no sistema e escolha um nome para sua lista, que será utilizada para um futuro evento;
- Reservar ambientes: esta função o morador seleciona o ambiente que deseja realizar a reserva, seleciona o dia e a lista de visitantes previamente criada;
- Trocar senha: esta função permite que o morador troque a senha previamente cadastrada pela administrador;
- Área de notificação: possibilita que o morador leia as notificações enviadas pela portaria e aceite ou recuse uma visita inesperada/não cadastrada.

# Como utilizar
```
yarn install
npx react-native run-android (Android)
npx pod-install (Apenas iOS)
npx react-native run-ios (iOS)
```

# Outros repositórios do projeto

- Servidor: https://github.com/matheusvalbert/Server-TCC
- Desktop: https://github.com/matheusvalbert/Desktop-TCC
- Placas: https://github.com/matheusvalbert/Placas-TCC
