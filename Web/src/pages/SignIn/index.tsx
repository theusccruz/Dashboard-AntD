import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Container, ButtonContainer, Content } from './styles';

const SignIn: React.FC = () => {
  const submitForm = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <h1>Login</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: false }}
          size="large"
          onFinish={submitForm}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Por favor informe seu email!', type: 'email' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor informe sua senha!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembrar de mim</Checkbox>
            </Form.Item>
          </Form.Item>
          <ButtonContainer>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Entrar
              </Button>
            </Form.Item>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
