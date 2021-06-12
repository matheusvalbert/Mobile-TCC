import styled from 'styled-components/native';

export const ViewForm = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: 95%;
  border-radius: 30px;
`;

export const HeaderButtons = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  left: 0;
  right: 0;
`;

export const Button = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

export const SelectionText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin: 5px;
  color: #03BB85;
`;

export const Container = styled.View`
  margin-top: 10%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-top: 10px;
`;

export const LineForm = styled.View`
  border-bottom-width: .5px;
  border-color: #03BB85;
`;

export const ButtonList = styled.TouchableOpacity`
  padding-right: 10px;
  padding-top: 10px;
`;

export const Form = styled.View`
  bottom: 0;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Text = styled.Text`
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const List = styled.FlatList`
  height: 92%;
`;
