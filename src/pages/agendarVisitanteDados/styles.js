import styled from 'styled-components/native';

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

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DateText = styled.Text`
  color: #999;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 500;
`;

export const InfoText = styled.View`
  padding-left: 15px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
