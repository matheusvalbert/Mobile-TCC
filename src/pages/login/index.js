import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

import { Container, KeyboardView, Tittle, Form, Input, Submit, SubmitText } from './styles';

import { useAuth } from '../../hooks/auth';

const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const { signIn } = useAuth();

  function login() {
    signIn(username, password);
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Container>
        <KeyboardView behavior={Platform.OS === 'ios' ? "padding" : 'height'} >
          <Tittle>Sistema de controle de acesso para condomínios</Tittle>
          <Form>
            <Input placeholder="Nome de usuário" autoCapitalize='none' value={ username } onChangeText={ setUsername } />
            <Input secureTextEntry={true} autoCapitalize='none' placeholder="Senha" value={ password } onChangeText={ setPassword } />
            <Submit onPress={ login }>
              <SubmitText>Login</SubmitText>
            </Submit>
          </Form>
        </KeyboardView>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;
