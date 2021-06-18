import styled from 'styled-components/native';

import { IconOutline } from '@ant-design/icons-react-native';

export const ContainerInput = styled.View`
  width: 340px;
  height: 50px;

  border-width: 1px;
  border-color: #c7c7c7;
  border-radius: 5px;
  margin: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-family: 'Poppins-Regular';

  width: 90%;
  height: 50px;
  padding: 10px;
`;

export const Icon = styled(IconOutline)`
  width: 50px;
  height: 50px;
`;
