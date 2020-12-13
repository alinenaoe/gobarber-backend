# GoBarber - funcionalidades

## Recuperação de senha

**RF**
<!-- Requisitos funcionais: quais as funcionalidades -->

- O usuário deve poder recuperar sua senha informando seu email
- O usuário deve receber um email com as instruções para a recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**
<!-- Não são ligadas diretamente às regras de negócio. Por exemplo, email ter que usar uma biblioteca específica -->

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento
- Utilizar Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano (background job): entra na fila

**RN**
<!-- Regras de negócio:  -->

- O link enviado por email deve expirar em 2 horas
- O usuário precisa confirmar a nova senha ao definir uma nova senha

## Atualização do perfil

**RF**

- Usuário deve poder atualizar suas informações de perfil - nome, email e senha

**RN**

- Usuário não pode alterar seu email para um email já utilizado
- Para atualizar a senha, o usuário deve informar a senha antiga
- Para atualizar a senha, usuário precisa confirmar a nova senha

## Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io (protocolo web socket - mensagens em tempo real)

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

## Agendamento de serviço

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados
- O usuário deve poder visualizar os dias disponíveis de um mês com pelo menos um horário disponível do prestador selecionado
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- Deve poder realizar o agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache ()

**RN**

- Cada agendamento deve durar 1 hora
- Os agendamentos devem estar disponíveis entre 8h e 18h (último horário às 17h)
- Usuário não pode agendar em horário já ocupado
- Usuário não pode agendar em um horário que já passou
- Usuário não pode agendar serviços consigo mesmo


