import styled from 'styled-components/native';
import { SwipeListView } from 'react-native-swipe-list-view';

export const Container = styled.View`
`;

export const Add = styled.TouchableOpacity`
  position: absolute;
  left: 290px;
  bottom: 15px;
  background-color: #1520AB;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled(SwipeListView)`
  padding-left: 10px;
  padding-right: 10px;
  height: 97%;
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

export const Text = styled.Text`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const RowBack = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
`;

export const BackRightButton = styled.View`
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100px;
  background: #FF0000;
  right: 0;
`;

export const DeleteButton = styled.TouchableWithoutFeedback`
  height: 100%;
  width: 100%;
`;

export const DeleteText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`;

export const RowFront = styled.View`
  background-color: #F2F2F2;
  border-bottom-width: .2px;
  border-color: #03BB85;
`;
