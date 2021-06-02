import React, { useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { ViewForm, HeaderButtons, Button, SelectionText, Container, NameText, Input, LineBold, List, LineForm, ButtonList, Form, Image, Text } from './styles';

const AdicionarModificarListaDeVisitantes = props => {

  const [ uids, setUids ] = useState([]);

  function addRemoveUids(uid) {
    if(uids.includes(uid)) {
      setUids(uids.filter(element => element !== uid));
    }
    else {
      setUids(uids => [...uids, uid]);
    }
  }

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
    }}>
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <ViewForm>
          <HeaderButtons>
            <Button onPress={ () => props.setModalVisible(false) }>
                <SelectionText>Calcelar</SelectionText>
            </Button>
            <Button onPress={ () => { props.setModalVisible(false); console.log(uids) }}>
              <SelectionText>Ok</SelectionText>
            </Button>
          </HeaderButtons>
          <Container>
            <NameText>Lista:</NameText>
            <Input placeholder="Nome da lista" />
            <LineBold />
            <NameText>Visitantes:</NameText>
            <List
              data={props.visitantes}
              renderItem={({ item }) => (
                <LineForm>
                  <ButtonList onPress={ () => { addRemoveUids(item.uid) } } >
                    <Form>
                      <Image source={{ uri: `http://localhost:3333/visitante/profileImage/${item.img_name}`,
                        headers: {
                          Authorization: api.defaults.headers.Authorization
                        }
                      }}/>
                      <Text> { item.name } </Text>
                      {
                        uids.includes(item.uid)
                          ?
                        <Icon name='check' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
                          :
                        null
                      }
                    </Form>
                  </ButtonList>
                </LineForm>
              )}
              keyExtractor={item => item.uid}
            />
          </Container>
        </ViewForm>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default AdicionarModificarListaDeVisitantes;
