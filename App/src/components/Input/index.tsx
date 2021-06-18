import React from 'react';
import { TextInputProps } from 'react-native';

import { ContainerInput, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <ContainerInput>
      <Icon name="mail" />
      <TextInput placeholderTextColor="#bbbbbb" {...rest} />
    </ContainerInput>
  );
};

export default Input;
