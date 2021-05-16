import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

// import { Container } from './styles';

const DadosVisitante = ({ navigation }) => {

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);


  return <View />;
}

export default DadosVisitante;
