import React from 'react';
import { Modal, TouchableWithoutFeedback, Platform } from 'react-native';

import { InvisibleForm, SelectDay, HeaderButtons, Button, SelectionText, DateForm } from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';

const AgendarVisitanteUnico = props => {

  const year = new Date().getFullYear() + 2;
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    props.setShow(false);
    props.setDate(currentDate);
    if(Platform.OS !== 'ios') updateDate(selectedDate);
  };

  function updateDate(selectedDate) {
    if(Platform.OS !== 'ios')
      var newDate = new Date(selectedDate);
    else
      var newDate = new Date(props.date);
    const year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    month < 10 ? month = '0' + month : month;
    day < 10 ? day = '0' + day : day;
    props.setDayYear(day + '/' + month + '/' + year);
  }

  return (
    <>
    {
    Platform.OS === 'ios'
      ?
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.dayWeekModal}
      onRequestClose={() => {
        //console.log("Modal has been closed.");
        props.setDayWeekModal(!props.dayWeekModal);
      }}>
    <TouchableWithoutFeedback onPress={ () => props.setDayWeekModal(false) }>
      <InvisibleForm>
        <TouchableWithoutFeedback>
          <SelectDay>
            <HeaderButtons>
              <Button onPress={ () => props.setDayWeekModal(false) }>
                  <SelectionText>Calcelar</SelectionText>
              </Button>
              <Button onPress={ () => { updateDate(); props.setDayWeekModal(false) }}>
                <SelectionText>Ok</SelectionText>
              </Button>
            </HeaderButtons>
            <DateForm>
              <DateTimePicker
                value={props.date}
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
      :
    <>
    {props.show && (
      <DateTimePicker
        value={props.date}
        minimumDate={Date.now()}
        maximumDate={new Date(year, month, day)}
        mode={'date'}
        display='default'
        onChange={onChange}
      />
    )}
    </>
    }
    </>
  );
}

export default AgendarVisitanteUnico;
