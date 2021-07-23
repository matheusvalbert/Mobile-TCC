import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
`;

export const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #FF0000;
  width: 250px;
  height: 70px;
  top: 40%;
  border-radius: 40px;
`;

export const TextName = styled.Text`
  color: #1520AB;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TextNewVisitor = styled.Text`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-self: center;
`;

export const FormButtons = styled.View`
  top: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonAccept = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #1520AB;
  width: 160px;
  height: 70px;
  border-radius: 40px;
`;


export const ButtonReject = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #FF0000;
  width: 160px;
  height: 70px;
  border-radius: 40px;
`;
