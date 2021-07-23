import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  height: 110%;
  padding-top: 10px;
`;

export const List = styled.FlatList`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 35px;
`;

export const Button = styled.TouchableOpacity`
`;

export const Form = styled.View`
  bottom: 0;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const LineForm = styled.View`
  border-bottom-width: .2px;
  border-color: #03BB85;
`;

export const Text = styled.Text`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;
