import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Calendario, Reserve, Text, FormSelect, Select, SelectionText, FormButton, FormButtons, Add, Delete, Modify, TextButton } from './styles';

import { useReservar } from '../../hooks/reservar';

import SelecionarListaDeVisitantes from '../selecionarListaDeVisitantes';

import { useLista } from '../../hooks/lista';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const ReservarAmbiente = ({ navigation }) => {

  const route = useRoute();
  const { setName } = useStackName();

  const { getLists, lists } = useLista();
  const { markedDates, ownMarked, otherMarked, reservas, reservarAmbiente, remover, alterar } = useReservar();

  const [ lastSelected, setLastSelected ] = useState('');
  const [ selectedList, setSelectedList ] = useState('Nenhuma');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ uid, setUid ] = useState('');
  const [ newData, setNewData ] = useState(true);

  const [ auxUid, setAuxUid ] = useState('');
  const [ auxName, setAuxName ] = useState('');

  const newDate = new Date(Date.now());
  const year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();
  month < 10 ? month = '0' + month : month;
  day < 10 ? day = '0' + day : day;
  const date = year + '-' + month + '-' + day;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getLists();
    });
    return unsubscribe;
  }, [navigation]);

  const onDayPress = day => {

    setLastSelected(day.dateString);

    var flag = false;

    lists.map(item => {
      reservas.map(item1 => {
        if(item.uid === item1.lista_uid && item1.date === day.dateString) {
          setUid(item1.lista_uid);
          setSelectedList(item.name);
          flag = true;
          setNewData(false);
        }
      });
    });

    if(flag === false) {
      setUid('');
      setSelectedList('Nenhuma');
      setNewData(true);
    }

  }

  return(
    <Container>
      <Calendario
        markedDates={{
            ...markedDates,
            [lastSelected]:
            {
              selected: true, selectedColor:
                ownMarked.includes(lastSelected)
                  ?
                '#1520AB'
                  :
                otherMarked.includes(lastSelected)
                  ?
                '#FF0000'
                  :
                '#1520AB'
            }
          }}
        onDayPress={onDayPress}
      />
      {
        lastSelected === ''
          ?
        null
          :
        otherMarked.includes(lastSelected)
          ?
        <Reserve>
          <Text>Dia reservado por outro morador</Text>
        </Reserve>
          :
        <Reserve>
          <Text>Selecione a lista de visitas:</Text>
          <FormSelect>
            <Select onPress={ () => { setModalVisible(true); setAuxUid(uid); setAuxName(selectedList)  } }>
              <SelectionText> { selectedList } </SelectionText>
              <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
            </Select>
            <SelecionarListaDeVisitantes modalVisible={modalVisible} setModalVisible={setModalVisible} lists={lists} uid={uid} setUid={setUid} setSelectedList={setSelectedList} auxUid={auxUid} setAuxUid={setAuxUid} auxName={auxName} setAuxName={setAuxName} />
          </FormSelect>
          {
            newData
              ?
            <FormButton>
              <Add onPress={ () =>  uid !== '' ? reservarAmbiente(uid, lastSelected) && navigation.goBack() : alert('selecione uma lista') } ><TextButton>Reservar</TextButton></Add>
            </FormButton>
              :
            <FormButtons>
              <Modify onPress={ () => { alterar(uid, lastSelected); navigation.goBack() }} ><TextButton>Alterar</TextButton></Modify>
              <Delete onPress={ () => { remover(lastSelected); navigation.goBack() }} ><TextButton>Remover</TextButton></Delete>
            </FormButtons>
            }
        </Reserve>
      }
    </Container>
  );
}

export default ReservarAmbiente;
