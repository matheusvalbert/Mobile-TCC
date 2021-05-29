import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { useAgendarVisitanteContext } from '../../hooks/agendarVisitanteContext';

import AgendarVisitanteTipo from '../agendarVisitanteTipo';
import AgendarVisitanteUnico from '../agendarVisitanteUnico';

import { Container, Text, Title, SelectionText, BoxForm, Select, Form, Image, FormSelect, Add, TextButton, Tipo } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitante = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ dayWeekModal, setDayWeekModal ] = useState(false);
  const [ type, setType ] = useState('Selecione o tipo...');
  const [ dayYear, setDayYear ] = useState('Selecione o dia...');
  const [ date, setDate ] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const { setDaySelected, daysWeek, setDaysWeek } = useAgendarVisitanteContext();

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    if(type !== 'Visita recorrente') {
      setDaySelected([ false, false, false, false, false, false, false ]);
      setDaysWeek('Selecione os dias...');
    }
    else if(type !== 'Visita única') {
      setDate(new Date(Date.now()));
      setDayYear('Selecione o dia...');
    }
  }, [type]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <>
      <Container>
        <Title>Selecione o visitante:</Title>
        <BoxForm>
          <Select onPress={ () => {  } }>
            <Form>
              <Image source={ require('../../img/profile.png') } />
              <Text>Selecione...</Text>
              <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
            </Form>
          </Select>
        </BoxForm>
        <Title>Selecione o tipo de visita:</Title>
        <FormSelect>
          <Select onPress={ () => setModalVisible(true) }>
            <SelectionText> { type } </SelectionText>
            <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
          </Select>
        </FormSelect>
        <AgendarVisitanteTipo modalVisible={modalVisible} setModalVisible={setModalVisible} setType={setType}/>
        {
          type === 'Visita recorrente'
            ?
          <Tipo>
            <Title>Selecione os dias:</Title>
            <FormSelect>
              <Select onPress={ () => navigation.navigate('Agendar Visitante Recorrente') }>
                <SelectionText> { daysWeek } </SelectionText>
                <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
              </Select>
            </FormSelect>
          </Tipo>
            :
          type === 'Visita única'
            ?
          <Tipo>
            <Title>Selecione o dia:</Title>
            <FormSelect>
              <Select onPress={ () => { setDayWeekModal(true); setShow(true) } }>
                <SelectionText> { dayYear } </SelectionText>
                <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
              </Select>
            </FormSelect>
            <AgendarVisitanteUnico dayWeekModal={dayWeekModal} setDayWeekModal={setDayWeekModal}
            date={date} setDate={setDate} show={show} setShow={setShow} setDayYear={setDayYear} />
          </Tipo>
            :
          null
        }
        </Container>
        <Add>
          <TextButton>Adicionar</TextButton>
        </Add>
    </>
  );
}

export default AgendarVisitante;
