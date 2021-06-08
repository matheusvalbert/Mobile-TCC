import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  justify-content: center;
  align-self: center;
  background-color: #FFF;
  border-radius: 30px;
`;

export const FormButton = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonTittle = styled.Text`
  text-align: center;
  padding-top: 6px;
  font-size: 10px;
  color: #03BB85;
  font-weight: bold;
`;
