import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-bottom: 15px;
  padding: 12px 15px;
  font-size: 20px;
  border-radius: 6px;
  background: #FFF;
  color: #333;
`;

export const Submit = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  margin-top: 20px;
  padding: 20px 30px;
`;

export const SubmitText = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
`;
