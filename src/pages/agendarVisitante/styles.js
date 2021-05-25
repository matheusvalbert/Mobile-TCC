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

export const LineForm = styled.View`
  border-top-width: .2px;
  border-bottom-width: .2px;
  border-color: #03BB85;
  margin-bottom: 15px;
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
  padding-top: 20px;
  border-radius: 30px;
`;
