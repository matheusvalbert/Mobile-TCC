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

 const [ markedDates, setMarkedDates ] = useState({
    [date]: {
      selected: true, selectedColor: '#03BB85'
    }
  });

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  const onDayPress = day => {
    console.log(markedDates);
    setMarkedDates({
      ...markedDates,
      [day.dateString]: {
        selected: true, selectedColor: '#03BB85'
      }
    });
    console.log(markedDates);
  };

  return(
    <Container>
      <Calendario
        markedDates={ markedDates }
        onDayPress={onDayPress}
      />
    </Container>
  );
}

export default ReservarAmbiente;
