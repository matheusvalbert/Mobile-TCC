import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Calendario } from './styles';

const ReservarAmbiente = ({ navigation }) => {

  const newDate = new Date(Date.now());
  const year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();
  month < 10 ? month = '0' + month : month;
  day < 10 ? day = '0' + day : day;
  const date = year + '-' + month + '-' + day;

 const [ markedDates, setMarkedDates ] = useState({});

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      today();
    });
    return unsubscribe;
  }, [navigation]);

  function today() {
    setMarkedDates({
      [date]: {
        selected: true, selectedColor: '#03BB85'
      }
    })
  }

  return(
    <Container>
      <Calendario
        markedDates={ markedDates }
      />
    </Container>
  );
}

export default ReservarAmbiente;
