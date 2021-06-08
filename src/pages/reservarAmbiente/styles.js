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
    textDisabledColor: '#d9e1e8',
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
