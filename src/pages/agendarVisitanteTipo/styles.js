import styled from 'styled-components/native';

export const InvisibleForm = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000000;
`;

export const SelectTypeForm = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: 30%;
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

export const PickerForm = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
`;

export const SelectionText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin: 5px;
  color: #03BB85;
`;

export const ButtonPicker = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextPicker = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #000;
`;

export const BorderButton = styled.View`
  border-bottom-width: 1px;
  border-color: #03BB85;
`;
