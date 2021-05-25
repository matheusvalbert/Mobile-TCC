import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Modal } from 'react-native';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, Text, Title, SelectionText, LineForm, Select, Form, Image, FormSelect, InvisibleForm, SelectTypeForm } from './styles';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitante = ({ navigation }) => {

  const [ selectedType, setSelectedType ] = useState('Selecione o tipo...');
  const [ modalVisible, setModalVisible ] = useState(false);

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  function SelectType() {
    return(
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
              </SelectTypeForm>
            </TouchableWithoutFeedback>
          </InvisibleForm>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return(
    <Container>
      <Title>Selecione o visitante:</Title>
      <LineForm>
        <Select>
          <Form>
            <Image source={{ uri: `http://localhost:3333/morador/profileImage/${'0df86900b8e12000b3ab9b9b70ddeb7c-IMG_0001.JPG'}`,
              headers: {
                Authorization: api.defaults.headers.Authorization
              }
            }}/>
            <Text> { 'Matheus' } </Text>
            <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
          </Form>
        </Select>
      </LineForm>
      <Title>Selecione o tipo de visita:</Title>
      <FormSelect>
        <Select onPress={ () => setModalVisible(true) }>
          <SelectionText> { selectedType } </SelectionText>
          <Icon name='arrow-drop-down' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
        </Select>
      </FormSelect>
      <SelectType />
    </Container>
  );
}

export default AgendarVisitante;
