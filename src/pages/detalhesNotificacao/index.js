import React, { useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';

import { Container, Text, Button, TextButton, TextName, TextNewVisitor, FormButtons, ButtonAccept, ButtonReject } from './styles';

const DetalhesNotificacao = ({ route, navigation }) => {

  const { notification, visitor } = route.params;

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
          <Button><TextButton>Remover Notificação</TextButton></Button>
        </>
          :
        visitor
          ?
        <>
          <TextNewVisitor>{ 'Novo visitante: '}</TextNewVisitor>
          <TextName>{ visitor }</TextName>
          <TextNewVisitor>{ 'O que gostaria de fazer:' }</TextNewVisitor>
          <FormButtons>
            <ButtonAccept><TextButton>Aceitar Visita</TextButton></ButtonAccept>
            <ButtonReject><TextButton>Recusar Visita</TextButton></ButtonReject>
          </FormButtons>
        </>
          :
        null
      }
    </Container>
  );
}

export default DetalhesNotificacao;
