import React from 'react';
import styled from 'styled-components/native';
import Button from '../ui/Button';
import {facebookBlue, offWhite} from '../ui/colors';

export default function Login() {
  return (
    <Container>
      <Text>Login</Text>
      <Button text="Email" />
      <Button text="Facebook" backgroundColor={facebookBlue} />
      <Text>Signup</Text>
      <Button text="Email" />
      <Button text="Facebook" backgroundColor={facebookBlue} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${offWhite};
`;

const Text = styled.Text`
  font-size: 20px;
`;
