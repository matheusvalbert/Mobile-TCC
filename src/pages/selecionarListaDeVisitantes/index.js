import React from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { ViewForm, HeaderButtons, Button, SelectionText, Container, NameText, LineForm, ButtonList, Form, Text, List } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const SelecionarListaDeVisitantes = props => {

  function okPress() {
    props.setUid(props.auxUid);
    props.setSelectedList(props.auxName);
    props.setModalVisible(false);
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
            <NameText>Listas:</NameText>
            <List
              data={props.lists}
              renderItem={({ item }) => (
                <LineForm>
                  <ButtonList onPress={ () => { props.setAuxUid(item.uid); props.setAuxName(item.name) }} >
                    <Form>
                      <Text> { item.name } </Text>
                      {
                        props.auxUid === item.uid
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

export default SelecionarListaDeVisitantes;
