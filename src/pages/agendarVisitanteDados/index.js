import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import { useAgendar } from '../../hooks/agendar';

import { Container, List, Button, Form, LineForm, Text, Image, DateText, InfoText } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitanteDados = ({ navigation }) => {

  const [ isFetching, setIsFetching ] = useState(false);

  const { getVisitas, visitantes, setVisitante } = useAgendar();

  const route = useRoute();
  const { setName } = useStackName();

  function update() {
    getVisitas();
    setIsFetching(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getVisitas();
    });
    return unsubscribe;
  }, [navigation]);

  function alterarDados(item) {
    setVisitante(item);
    navigation.navigate('Agendar Visitante');
  }

  return(
    <Container>
      <List
        data={visitantes}
        refreshing={isFetching}
        onRefresh={ () => update() }
        renderItem={({ item }) => (
          <LineForm>
            <Button onPress={ () => alterarDados(item) } >
              <Form>
                <Image source={{ uri: `${api.defaults.baseURL}/visitante/profileImage/${item.img_name}`,
                  headers: {
                    Authorization: api.defaults.headers.Authorization
                  }
                }}/>
                <InfoText>
                  <Text>{ item.name }</Text>
                  <DateText>Dia da visita: { item.text }</DateText>
                </InfoText>
                <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
              </Form>
            </Button>
          </LineForm>
        )}
        keyExtractor={item => item.uid}
      />
    </Container>
  );
}

export default AgendarVisitanteDados;
