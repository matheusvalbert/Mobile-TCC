import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Add } from './styles';

import AdicionarModificarListaDeVisitantes from '../adicionarModificarListaDeVisitantes';

import { useVisitante } from '../../hooks/visitante';

import Plus from 'react-native-vector-icons/Octicons';
Plus.loadFont();

const CriarListaDeVisitantes = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);

  const { visitantes, getUsers } = useVisitante();

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getUsers();
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <>
      <Container>
        <AdicionarModificarListaDeVisitantes modalVisible={modalVisible} setModalVisible={setModalVisible} visitantes={visitantes} />
      </Container>
      <Add onPress={ () => setModalVisible(true) } >
        <Plus name='plus' size={ 20 } color='#FFF' />
      </Add>
    </>
  );
}

export default CriarListaDeVisitantes;
