import React, { useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Add } from './styles';

import Plus from 'react-native-vector-icons/Octicons';
Plus.loadFont();

import { useMorador } from '../../hooks/morador';

const DadosMorador = ({ navigation }) => {

  const route = useRoute();
  const { setName } = useStackName();

  const { setMorador } = useMorador();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  function novoDado() {
    setMorador('');
    navigation.navigate('Cadastro Morador');
  }

  return(
    <>
    <Container>
    </Container>
    <Add onPress={ () => novoDado() } >
      <Plus name='plus' size={ 20 } color='#FFF' />
    </Add>
    </>
  );
}

export default DadosMorador;
