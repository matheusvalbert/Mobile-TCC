import styled from 'styled-components/native';

export const ViewForm = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #FFF;
  width: 100%;
  height: ${Platform.select({ ios: '94%', android: '100%' })};
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

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  selectionColor: '#03BB85'
})`
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 12px 15px;
  font-size: 20px;
  border-radius: 6px;
  background: #F2F2F2;
  color: #333;
`;

export const LineBold = styled.View`
  border-bottom-width: 1px;
  border-color: #03BB85;
`;

export const List = styled.FlatList`
  padding-left: 10px;
  padding-right: 10px;
  height: 80%;
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

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;

export const Text = styled.Text`
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;
`;
