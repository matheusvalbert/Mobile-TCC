import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

import { Container, KeyboardView, Tittle, Form, Input, Submit, SubmitText } from './styles';

// import { Container } from './styles';

export default function Login() {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <Container>
        <KeyboardView behavior={Platform.OS === 'ios' ? "padding" : 'height'} keyboardVerticalOffset={0}>
          <Tittle>Sistema de controle de acesso para condomínios</Tittle>
          <Form>
            <Input placeholder="Nome de usuário" autoCapitalize='none' value={ mail } onChangeText={  setMail} />
            <Input secureTextEntry={true} autoCapitalize='none' placeholder="Senha" value={password} onChangeText={ setPassword } />
            <Submit onPress={ () => { } }>
              <SubmitText>Login</SubmitText>
            </Submit>
          </Form>
        </KeyboardView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
