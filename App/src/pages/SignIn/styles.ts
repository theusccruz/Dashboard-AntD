import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;

  width: 370px;
  height: 400px;
  padding: 15px 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: 'Poppins-Medium';

  margin-bottom: 50px;
  margin-top: 20px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  width: 300px;
  height: 60px;

  background-color: #3d91ff;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Medium';

  color: #fff;
`;
