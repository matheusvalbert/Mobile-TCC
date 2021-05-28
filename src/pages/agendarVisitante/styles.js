import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 10px 10px 10px;
`;


export const Text = styled.Text`
  padding-left: 10px;
  font-weight: bold;
  font-size: 17px;
`;

export const Title = styled.Text`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
`;

export const BoxForm = styled.View`
  border-top-width: .2px;
  border-bottom-width: .2px;
  border-color: #03BB85;
  margin-bottom: 50px;
`;

export const Select = styled.TouchableOpacity`

`;

export const Form = styled.View`
  bottom: 0;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;

export const SelectionText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin: 5px;
  color: #03BB85;
`;

export const FormSelect = styled.View`
  border-bottom-width: .2px;
  border-color: #03BB85;
`;

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
`;

export const Tipo = styled.View`
  margin-top: 50px;
`;

export const SelectDaysForm = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: 55%;
  border-radius: 30px;
`;

export const List = styled.FlatList`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 35px;
  margin-top: 50px;
`;

export const Days = styled.Text`
  font-size: 22px;
`;

export const LineForm = styled.View`
  border-bottom-width: .2px;
  border-color: #03BB85;
`;

export const DayButton = styled.TouchableOpacity`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectDay = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: 40%;
  border-radius: 30px;
`;

export const DateForm = styled.View`
  margin-top: 50px;
`;

export const Add = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  padding: 20px 20px;
  position: absolute;
  bottom: 0;
  margin-bottom: 200px;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 17px;
`;
