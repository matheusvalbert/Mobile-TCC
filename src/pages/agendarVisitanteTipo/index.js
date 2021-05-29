import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { InvisibleForm, SelectTypeForm, HeaderButtons, Button, PickerForm, SelectionText, ButtonPicker, TextPicker, BorderButton } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitanteTipo = props => {

  const [ aux, setAux ] = useState('Visita recorrente');

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
                <Button onPress={ () => { props.setType(aux); props.setModalVisible(false) }}>
                  <SelectionText>Ok</SelectionText>
                </Button>
              </HeaderButtons>
              <PickerForm>
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
