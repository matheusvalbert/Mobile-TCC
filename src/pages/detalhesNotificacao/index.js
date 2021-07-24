import React, { useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';

import { Container, Text, Button, TextButton, TextName, TextNewVisitor, FormButtons, ButtonAccept, ButtonReject } from './styles';

import { useNotificacoes } from '../../hooks/notificacoes';

const DetalhesNotificacao = ({ route, navigation }) => {

  const { responseNotification, discardNotification } = useNotificacoes();
  const { uid, notification, visitor } = route.params;

  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <Container>
      {
        notification
          ?
        <>
          <Text>{ notification }</Text>
          <Button onPress={ () => { discardNotification(uid); navigation.goBack() }}><TextButton>Remover Notificação</TextButton></Button>
        </>
          :
        visitor
          ?
        <>
          <TextNewVisitor>{ 'Novo visitante: '}</TextNewVisitor>
          <TextName>{ visitor }</TextName>
          <TextNewVisitor>{ 'O que gostaria de fazer:' }</TextNewVisitor>
          <FormButtons>
            <ButtonAccept onPress={ () => { responseNotification(uid, visitor, 'Sim'); navigation.goBack() } }><TextButton>Aceitar Visita</TextButton></ButtonAccept>
            <ButtonReject onPress={ () => { responseNotification(uid, visitor, 'Nao'); navigation.goBack() } }><TextButton>Recusar Visita</TextButton></ButtonReject>
          </FormButtons>
        </>
          :
        null
      }
    </Container>
  );
}

export default DetalhesNotificacao;
