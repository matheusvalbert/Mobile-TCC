import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import { useAgendar } from '../../hooks/agendar';

import AgendarVisitanteTipo from '../agendarVisitanteTipo';
import AgendarVisitanteUnico from '../agendarVisitanteUnico';

import { Container, Text, Title, SelectionText, BoxForm, Select, Form, Image, FormSelect, Add, TextButton, Tipo } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitante = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ dayWeekModal, setDayWeekModal ] = useState(false);
  const [show, setShow] = useState(false);

  const { setDaySelected, daysWeek, setDaysWeek, visitante, type, setType, setDate, setDayYear, dayYear, date, alterarDados } = useAgendar();

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <>
      <Container>
        <Title>Visitante:</Title>
        <BoxForm>
          <Form>
            <Image source={{ uri: `${api.defaults.baseURL}/morador/profileImage/${visitante.img_name}`,
              headers: {
                Authorization: api.defaults.headers.Authorization
              }
            }} />
            <Text>{visitante.name}</Text>
          </Form>
        </BoxForm>
        <Title>Selecione o tipo de visita:</Title>
        <FormSelect>
          <Select onPress={ () => setModalVisible(true) }>
            <SelectionText> { type } </SelectionText>
            <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
          </Select>
        </FormSelect>
        <AgendarVisitanteTipo modalVisible={modalVisible} setModalVisible={setModalVisible} setType={setType} type={type} setDaySelected={setDaySelected} setDaysWeek={setDaysWeek} setDate={setDate} setDayYear={setDayYear} />
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
        <Add onPress={ () => { alterarDados(); navigation.goBack() } }>
          <TextButton>Alterar dados de visita</TextButton>
        </Add>
    </>
  );
}

export default AgendarVisitante;
