import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { KeyboardView, Form, Input, Submit, SubmitText } from './styles';

import { useAuth } from '../../hooks/auth';

const AlterarSenha = ({ navigation }) => {

  const [ oldPassword, setOldPassword ] = useState();
  const [ newPassword, setNewPassword ] = useState();
  const [ repeat, setRepeat ] = useState();

  const { changePassword } = useAuth();

  const route = useRoute();
  const { setName } = useStackName();

  function alterarSenha() {
    if(oldPassword.length === 0)
      alert('Digite a senha antiga');
    else if(newPassword !== repeat || newPassword.length === 0 || oldPassword === newPassword)
      alert('Entrada Inválida');
    else {
      changePassword(oldPassword, newPassword).then((response) => {
        response === 'error' ? alert('senha antiga incorreta') : navigation.goBack();
      });
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <KeyboardView behavior={Platform.OS === 'ios' ? "padding" : 'height'} >
        <Form>
          <Input placeholder="Senha antiga" autoCapitalize='none' value={ oldPassword } onChangeText={ setOldPassword } />
          <Input secureTextEntry={true} autoCapitalize='none' placeholder="Nova senha" value={ newPassword } onChangeText={ setNewPassword } />
          <Input secureTextEntry={true} autoCapitalize='none' placeholder="Repita a nova senha" value={ repeat } onChangeText={ setRepeat } />
          <Submit onPress={ alterarSenha }>
            <SubmitText>Alterar Senha</SubmitText>
          </Submit>
        </Form>
      </KeyboardView>
  </TouchableWithoutFeedback>
  );
}

export default AlterarSenha;
