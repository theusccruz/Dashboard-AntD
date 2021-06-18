import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Container, Title, ButtonSubmit, ButtonText } from './styles';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <LinearGradient
      colors={['#006eff', '#539dfd']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Container>
        <Title>Login</Title>

        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Senha" />

        <ButtonSubmit>
          <ButtonText>Entrar</ButtonText>
        </ButtonSubmit>
      </Container>
    </LinearGradient>
  );
};

export default SignIn;
