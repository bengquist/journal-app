import React from 'react';
import styled from 'styled-components/native';

function Journal(props) {
  return (
    <View>
      <Text>Journal</Text>
      <Button
        title="Go to Feed"
        onPress={() => props.navigation.navigate('Feed')}
      />
    </View>
  );
}

export default Journal;

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
