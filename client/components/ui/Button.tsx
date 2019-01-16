import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {rose, tan} from './colors';

type Props = {
  backgroundColor?: string;
  text: string;
};

export default function Button({backgroundColor, text}: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Text>{text}</Text>
    </Container>
  );
}

type ContainerProps = {
  backgroundColor: string;
};

const Container = styled(TouchableOpacity)`
  background-color: ${(props: ContainerProps) =>
    props.backgroundColor ? props.backgroundColor : tan};
  border-radius: 5px;
  padding: 5px 10px;
`;

const Text = styled.Text`
  font-size: 25px;
  color: white;
  text-transform: uppercase;
`;
