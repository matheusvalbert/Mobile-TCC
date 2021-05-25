import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Text, Title, SelectionText, LineForm, Select, Form, Image, FormSelect, InvisibleForm, SelectTypeForm, HeaderButtons, Button, PickerForm } from './styles';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitante = ({ navigation }) => {

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ selectedType, setSelectedType ] = useState('Visita recorrente');
  const [ type, setType ] = useState('Selecione o tipo...');

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <Container>
      <Title>Selecione o visitante:</Title>
      <LineForm>
        <Select>
          <Form>
            <Image source={ require('../../img/profile.png') }/>
            <Text>Selecione...</Text>
            <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
          </Form>
        </Select>
      </LineForm>
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
        <Title>Visita recorrente</Title>
          :
        type === 'Visita única'
          ?
        <Title>Visita única</Title>
          :
        null
      }
    </Container>
  );
}

export default AgendarVisitante;
