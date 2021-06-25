import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#03BB85', '#98FF98'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0px 15px 0px 15px;
`;

export const Tittle = styled.Text`
  text-align: center;
  font-size: 40px;
  color: #FFF;
  font-weight: bold;
`;

export const Form = styled.View`
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  selectionColor: '#03BB85'
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
  padding: 20px 50px;
`;

export const SubmitText = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
`;
