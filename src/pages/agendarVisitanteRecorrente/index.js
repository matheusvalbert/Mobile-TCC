import React, { useEffect } from 'react';

import { Container, List, LineForm, DayButton, Days, Title } from './styles';

import { useAgendar } from '../../hooks/agendar';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitanteRecorrente = ({ navigation }) => {

  const route = useRoute();
  const { setName } = useStackName();

  const { daySelected, setDaySelected, setDaysWeek } = useAgendar();

  const days = [
    { key: 0, day: 'toda segunda-feira', name: 'seg' },
    { key: 1, day: 'toda terça-feira', name: 'ter' },
    { key: 2, day: 'toda quarta-feira', name: 'qua' },
    { key: 3, day: 'toda quinta-feira', name: 'qui' },
    { key: 4, day: 'toda sexta-feira', name: 'sex' },
    { key: 5, day: 'todo sábado', name: 'sab' },
    { key: 6, day: 'todo domingo', name: 'dom' },
  ];

  function updateDaysWeek() {
    if(daySelected[0] === true &&
      daySelected[1] === true &&
      daySelected[2] === true &&
      daySelected[3] === true &&
      daySelected[4] === true &&
      daySelected[5] === false &&
      daySelected[6] === false
    ) {
      setDaysWeek('Dias da semana');
    }
    else if(daySelected[0] === false &&
            daySelected[1] === false &&
            daySelected[2] === false &&
            daySelected[3] === false &&
            daySelected[4] === false &&
            daySelected[5] === true  &&
            daySelected[6] === true
    ) {
      setDaysWeek('Final de semana');
    }
    else if(daySelected[0] === true &&
            daySelected[1] === true &&
            daySelected[2] === true &&
            daySelected[3] === true &&
            daySelected[4] === true &&
            daySelected[5] === true &&
            daySelected[6] === true
    ) {
      setDaysWeek('Todos os dias');
    }
    else if(daySelected[0] === false &&
            daySelected[1] === false &&
            daySelected[2] === false &&
            daySelected[3] === false &&
            daySelected[4] === false &&
            daySelected[5] === false &&
            daySelected[6] === false
    ) {
      setDaysWeek('Selecione os dias...');
    }
    else {
      var week = '';
      for(var i = 0; i < 7; i++) {
        if(daySelected[i] === true) {
          if(week === '')
            week = week.concat(days[i].name);
          else {
            week = week.concat(' ');
            week = week.concat(days[i].name);
          }
        }
      }
      setDaysWeek(week);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    updateDaysWeek();
  }, [updateDaySelected]);

  function updateDaySelected(key) {
    setDaySelected([
      ...daySelected.slice(0, key),
      !daySelected[key],
      ...daySelected.slice(key + 1)
    ]);
  }

  return (
    <Container>
      <LineForm>
        <Title>Selecione os dias da semana:</Title>
      </LineForm>
      <List
        scrollEnabled={false}
        data={days}
        renderItem={({item}) => (
          <LineForm>
            <DayButton onPress={ () => { updateDaySelected(item.key) } }>
              <Days>{item.day}</Days>
              {
                daySelected[item.key]
                  ?
                <Icon name='check' size={ 22 } color='#03BB85' />
                  :
                null
              }
            </DayButton>
          </LineForm>
        )}
      />
    </Container>
  );
}

export default AgendarVisitanteRecorrente;
