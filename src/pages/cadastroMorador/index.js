import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Image, Form, FormText, Text, Input, FormButton, FormButtons,
  TextButton, Add, Delete, Modify, InvisibleForm, CameraForm, ButtonCamera
} from './styles';

import api from '../../services/api';

import { useMorador } from '../../hooks/morador';

const CadastroMorador = ({ navigation }) => {

  const navBack = useNavigation();

  const [ photo, setPhoto ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ placa, setPlaca ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ imageChanged, setImageChanged ] = useState(false);

  const { moradores, addUser, deleteUser, completeUpdate, partialUpdate } = useMorador();

  function update(uid) {
    if(imageChanged) {
      completeUpdate(uid, photo, nome, placa);
      setTimeout(() =>  {
        navBack.goBack();
      }, 200);
    }
    else {
      partialUpdate(uid, nome, placa);
      setTimeout(() =>  {
        navBack.goBack();
      }, 200);
    }
  }

  function adicionarUsuario() {

    if(!photo || !nome)
      alert('Adicione pelo a foto e o nome');

    else {
      if(addUser(photo, nome, placa))
      setTimeout(() =>  {
        navBack.goBack()
      }, 200);
      else
        alert('Erro ao inserir dados');
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setNome(moradores.name);
      setPlaca(moradores.plate);
      setPhoto('');
      setImageChanged(false);
    });
    return unsubscribe;
  }, [navigation]);

  function takePhoto() {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      setImageChanged(true);
      //console.log(image);
      setPhoto(image);
      setModalVisible(false);
    });
  }

  function choosePhotoFromLibrary() {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setImageChanged(true);
      //console.log(image);
      setPhoto(image);
      setModalVisible(false);
    });
  }

  function Camera () {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      <TouchableWithoutFeedback onPress={ () => setModalVisible(false) }>
        <InvisibleForm>
          <TouchableWithoutFeedback>
            <CameraForm>
              <ButtonCamera onPress={ () => takePhoto() }>
                <TextButton>Abrir Câmera</TextButton>
              </ButtonCamera>
              <ButtonCamera onPress={ () => choosePhotoFromLibrary() }>
                <TextButton>Abrir Biblioteca</TextButton>
              </ButtonCamera>
              <ButtonCamera onPress={ () => setModalVisible(false) }>
                <TextButton>Fechar</TextButton>
              </ButtonCamera>
            </CameraForm>
          </TouchableWithoutFeedback>
        </InvisibleForm>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Container behavior={Platform.OS === 'ios' ? "padding" : 'height'} keyboardVerticalOffset={220}>
        <TouchableOpacity onPress={ () => setModalVisible(true) }>
          <Image source={
            !moradores ?
              !imageChanged ? require('../../img/profile.png') : { uri: photo.path }
                :
              { uri: !imageChanged ? `http://localhost:3333/morador/profileImage/${moradores.img_name}` : photo.path,
                headers: {
                  Authorization: api.defaults.headers.Authorization
                }
              }
          }/>
        </TouchableOpacity>
        <Form>
          <FormText>
            <Text>Nome:</Text>
            <Input value={ nome } onChangeText={ setNome } />
          </FormText>
          <FormText>
            <Text>Placa:</Text>
            <Input value={ placa } onChangeText={ setPlaca } />
          </FormText>
          { !moradores ?
            <FormButton>
              <Add onPress={ () => { adicionarUsuario() } } ><TextButton>Adicionar</TextButton></Add>
            </FormButton>
              :
            <FormButtons>
              <Delete onPress={ () => { deleteUser(moradores.uid) ? navBack.goBack() : null }} ><TextButton>Apagar</TextButton></Delete>
              <Modify onPress={ () => { update(moradores.uid) }} ><TextButton>Modificar</TextButton></Modify>
            </FormButtons>
          }
        </Form>
        <Camera />
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default CadastroMorador;
