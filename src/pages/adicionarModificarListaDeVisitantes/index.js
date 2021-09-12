import React from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import api from '../../services/api';

import { useLista } from '../../hooks/lista';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { ViewForm, HeaderButtons, Button, SelectionText, Container, NameText, Input, LineBold, List, LineForm, ButtonList, Form, Image, Text } from './styles';

const AdicionarModificarListaDeVisitantes = props => {

  const { addList, getLists, updateList } = useLista();

  function addRemoveUids(uid) {
    if(props.uids.includes(uid)) {
      props.setUids(props.uids.filter(element => element !== uid));
    }
    else {
      props.setUids(uids => [...uids, uid]);
    }
  }

  function okPress() {
    if(props.nome === '')
      alert('Escolha um nome para a lista');
    else {
      if(props.id === '')
        addList(props.nome, props.uids);
      else
        updateList(props.id, props.nome, props.uids);
      setTimeout(() =>  {
        getLists()
        props.setModalVisible(false);
      }, 250);
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
                <SelectionText>Cancelar</SelectionText>
            </Button>
            <Button onPress={ () => okPress() }>
              <SelectionText>Ok</SelectionText>
            </Button>
          </HeaderButtons>
          <Container>
            <NameText>Lista:</NameText>
            <Input placeholder="Nome da lista" value={props.nome} onChangeText={props.setNome} />
            <LineBold />
            <NameText>Visitantes:</NameText>
            <List
              data={props.visitantes}
              renderItem={({ item }) => (
                <LineForm>
                  <ButtonList onPress={ () => { addRemoveUids(item.uid) } } >
                    <Form>
                      <Image source={{ uri: `${api.defaults.baseURL}/visitante/profileImage/${item.img_name}`,
                        headers: {
                          Authorization: api.defaults.headers.Authorization
                        }
                      }}/>
                      <Text> { item.name } </Text>
                      {
                        props.uids.includes(item.uid)
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
