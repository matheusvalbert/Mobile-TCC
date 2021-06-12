import styled from 'styled-components/native';
import { Calendar } from 'react-native-calendars';

export const Container = styled.View`
`;

export const Calendario = styled(Calendar).attrs({
  theme:{
    backgroundColor: '#F2F2F2',
    calendarBackground: '#F2F2F2',
    textSectionTitleColor: '#3F3F3F',
    textSectionTitleDisabledColor: '#D9E1E8',
    selectedDayBackgroundColor: '#03BB85',
    selectedDayTextColor: '#F2F2F2',
    todayTextColor: '#03BB85',
    dayTextColor: '#999',
    textDisabledColor: '#D9E1E8',
    dotColor: '#03BB85',
    selectedDotColor: '#F2F2F2',
    arrowColor: '#03BB85',
    disabledArrowColor: '#D9E1E8',
    monthTextColor: '#03BB85',
    indicatorColor: '#03BB85',
    textDayFontWeight: 'bold',
    textMonthFontWeight: '500',
    textDayHeaderFontWeight: '400',
    textDayFontSize: 14,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 15
  }
})``;

export const Reserve = styled.View`
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Text = styled.Text`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
  padding-left: 10px;
`;

export const FormSelect = styled.View`
  border-bottom-width: .2px;
  border-color: #03BB85;
`;

export const Select = styled.TouchableOpacity`
`;

export const SelectionText = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin: 5px;
  color: #03BB85;
`;

export const FormButton = styled.View`
  padding-top: 30px;
`;

export const FormButtons = styled.View`
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Add = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  padding: 20px 30px;
`;

export const Delete = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  padding-right: 10px;
  background-color: #FF0000;
  border-radius: 30px;
  padding: 20px 23px;
`;

export const Modify = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  background-color: #1520AB;
  border-radius: 30px;
  padding: 20px 30px;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 20px;
`;
