import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Modal, TouchableOpacity, addons } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  Text,
  Title,
  SelectionText,
  BoxForm,
  Select,
  Form,
  Image,
  FormSelect,
  InvisibleForm,
  SelectTypeForm,
  HeaderButtons,
  Button,
  PickerForm,
  Tipo,
  SelectDaysForm,
  List,
  Days,
  LineForm,
  DayButton,
  SelectDay,
  DateForm,
  Add,
  TextButton
} from './styles';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitante = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ daysWeekModal, setDaysWeekModal ] = useState(false);
  const [ dayWeekModal, setDayWeekModal ] = useState(false);
  const [ selectedType, setSelectedType ] = useState('Visita recorrente');
  const [ type, setType ] = useState('Selecione o tipo...');
  const [ daysWeek, setDaysWeek ] = useState('Selecione os dias...');
  const [ daySelected, setDaySelected ] = useState([ false, false, false, false, false, false, false ]);
  const [ dayYear, setDayYear ] = useState('Selecione o dia...');
  const [ date, setDate ] = useState(Date.now());
  const year = new Date().getFullYear() + 2;
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const days = [
    { key: 0, day: 'toda segunda-feira', name: 'seg' },
    { key: 1, day: 'toda terça-feira', name: 'ter' },
    { key: 2, day: 'toda quarta-feira', name: 'qua' },
    { key: 3, day: 'toda quinta-feira', name: 'qui' },
    { key: 4, day: 'toda sexta-feira', name: 'sex' },
    { key: 5, day: 'todo sábado', name: 'sab' },
    { key: 6, day: 'todo domingo', name: 'dom' },
  ];

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  function updateDaySelected(key) {
    setDaySelected([
      ...daySelected.slice(0, key),
      !daySelected[key],
      ...daySelected.slice(key + 1)
    ]);
  }

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
          console.log(days[i].name);
        }
      }
      setDaysWeek(week);
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  function updateDate() {
    var newDate = new Date(date);
    const year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    month < 10 ? month = '0' + month : month;
    day < 10 ? day = '0' + day : day;
    setDayYear(day + '/' + month + '/' + year);
  }

  return(
    <>
      <Container>
        <Title>Selecione o visitante:</Title>
        <BoxForm>
          <Select>
            <Form>
              <Image source={ require('../../img/profile.png') }/>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //console.log("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}>
          <TouchableWithoutFeedback onPress={ () => setModalVisible(false) }>
            <InvisibleForm>
              <TouchableWithoutFeedback>
                <SelectTypeForm>
                  <HeaderButtons>
                    <Button onPress={ () => setModalVisible(false) }>
                        <SelectionText>Calcelar</SelectionText>
                    </Button>
                    <Button onPress={ () => { setType(selectedType); setModalVisible(false) }}>
                      <SelectionText>Ok</SelectionText>
                    </Button>
                  </HeaderButtons>
                  <PickerForm>
                  <Picker
                    selectedValue={selectedType}
                    onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
                  >
                    <Picker.Item label="Visita recorrente" value="Visita recorrente" />
                    <Picker.Item label="Visita única" value="Visita única" />
                  </Picker>
                  </PickerForm>
                </SelectTypeForm>
              </TouchableWithoutFeedback>
            </InvisibleForm>
          </TouchableWithoutFeedback>
        </Modal>
        {
          type === 'Visita recorrente'
            ?
          <Tipo>
            <Title>Selecione os dias:</Title>
            <FormSelect>
              <Select onPress={ () => setDaysWeekModal(true) }>
                <SelectionText> { daysWeek } </SelectionText>
                <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
              </Select>
            </FormSelect>
            <Modal
              animationType="slide"
              transparent={true}
              visible={daysWeekModal}
              onRequestClose={() => {
                //console.log("Modal has been closed.");
                setDaysWeekModal(!daysWeekModal);
            }}>
            <TouchableWithoutFeedback onPress={ () => setDaysWeekModal(false) }>
              <InvisibleForm>
                <TouchableWithoutFeedback>
                  <SelectDaysForm>
                    <HeaderButtons>
                      <Button onPress={ () => setDaysWeekModal(false) }>
                          <SelectionText>Calcelar</SelectionText>
                      </Button>
                      <Button onPress={ () => { updateDaysWeek(); setDaysWeekModal(false) }}>
                        <SelectionText>Ok</SelectionText>
                      </Button>
                    </HeaderButtons>
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
                  </SelectDaysForm>
                </TouchableWithoutFeedback>
              </InvisibleForm>
            </TouchableWithoutFeedback>
            </Modal>
          </Tipo>
            :
          type === 'Visita única'
            ?
          <Tipo>
            <Title>Selecione o dia:</Title>
            <FormSelect>
              <Select onPress={ () => { setDayWeekModal(true) } }>
                <SelectionText> { dayYear } </SelectionText>
                <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
              </Select>
            </FormSelect>
            <Modal
              animationType="slide"
              transparent={true}
              visible={dayWeekModal}
              onRequestClose={() => {
                //console.log("Modal has been closed.");
                setDayWeekModal(!dayWeekModal);
            }}>
            <TouchableWithoutFeedback onPress={ () => setDayWeekModal(false) }>
              <InvisibleForm>
                <TouchableWithoutFeedback>
                  <SelectDay>
                    <HeaderButtons>
                      <Button onPress={ () => setDayWeekModal(false) }>
                          <SelectionText>Calcelar</SelectionText>
                      </Button>
                      <Button onPress={ () => { updateDate(); setDayWeekModal(false) }}>
                        <SelectionText>Ok</SelectionText>
                      </Button>
                    </HeaderButtons>
                    <DateForm>
                      <DateTimePicker
                        value={date}
                        minimumDate={Date.now()}
                        maximumDate={new Date(year, month, day)}
                        mode={'date'}
                        display='spinner'
                        onChange={onChange}
                      />
                    </DateForm>
                  </SelectDay>
                </TouchableWithoutFeedback>
              </InvisibleForm>
            </TouchableWithoutFeedback>
            </Modal>
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
