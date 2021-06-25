import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 130px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const Form = styled.View`
  padding-top: 20px;
`;

export const FormText = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  selectionColor: '#03BB85'
})`
  height: 50px;
  width: 230px;
  padding: 12px 15px;
  font-size: 20px;
  border-radius: 6px;
  background: #FFF;
  color: #333;
`;

export const FormButtons = styled.View`
  padding-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 17px;
`;

export const Delete = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  padding-right: 10px;
  background-color: #FF0000;
  border-radius: 30px;
  padding: 10px 20px;
`;

export const Modify = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  padding: 10px 20px;
`;

export const FormButton = styled.View`
  padding-top: 15px;
`;

export const Add = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  padding: 20px 20px;
`;

export const InvisibleForm = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000000;
`;

export const CameraForm = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: 30%;
  padding-top: 20px;
  border-radius: 30px;
`;

export const ButtonCamera = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  height: 50px;
  width: 200px;
  align-items: center;
  margin-bottom: 20px;
`;
