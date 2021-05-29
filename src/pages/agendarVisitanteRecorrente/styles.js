import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const List = styled.FlatList`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 35px;
  margin-top: 20px;
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

export const Days = styled.Text`
  font-size: 22px;
`;
