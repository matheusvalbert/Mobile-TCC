import React, { useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { InvisibleForm, SelectTypeForm, HeaderButtons, Button, PickerForm, SelectionText, ButtonPicker, TextPicker, BorderButton } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitanteTipo = props => {

  const [ aux, setAux ] = useState('');

  function resetType() {
    if(props.type !== 'Visita recorrente') {
      props.setDaySelected([ false, false, false, false, false, false, false ]);
      props.setDaysWeek('Selecione os dias...');
    }
    else if(props.type !== 'Visita única') {
      props.setDate(new Date(Date.now()));
      props.setDayYear('Selecione o dia...');
    }
  }

  useEffect(() => {
    setAux(props.type);
  },[props.type]);

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
    }}>
      <TouchableWithoutFeedback onPress={ () => props.setModalVisible(false) }>
        <InvisibleForm>
          <TouchableWithoutFeedback>
            <SelectTypeForm>
              <HeaderButtons>
                <Button onPress={ () => props.setModalVisible(false) }>
                    <SelectionText>Calcelar</SelectionText>
                </Button>
                <Button onPress={ () => { props.setType(aux); props.setModalVisible(false); resetType() }}>
                  <SelectionText>Ok</SelectionText>
                </Button>
              </HeaderButtons>
              <PickerForm>
              <BorderButton>
                <ButtonPicker onPress={ () => setAux('Nenhuma') }>
                    <TextPicker>Nenhuma</TextPicker>
                    { aux === 'Nenhuma'
                        ?
                      <Icon name='check' size={ 20 } color='#03BB85' />
                        :
                      null
                    }
                  </ButtonPicker>
                </BorderButton>
                <BorderButton>
                  <ButtonPicker onPress={ () => setAux('Visita recorrente') }>
                    <TextPicker>Visita recorrente</TextPicker>
                    { aux === 'Visita recorrente'
                        ?
                      <Icon name='check' size={ 20 } color='#03BB85' />
                        :
                      null
                    }
                  </ButtonPicker>
                </BorderButton>
                <BorderButton>
                  <ButtonPicker onPress={ () => setAux('Visita única') }>
                    <TextPicker>Visita única</TextPicker>
                    { aux === 'Visita única'
                        ?
                      <Icon name='check' size={ 20 } color='#03BB85' />
                        :
                      null
                    }
                  </ButtonPicker>
                </BorderButton>
              </PickerForm>
            </SelectTypeForm>
          </TouchableWithoutFeedback>
        </InvisibleForm>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default AgendarVisitanteTipo;
