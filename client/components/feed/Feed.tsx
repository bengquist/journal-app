import React from 'react';
import styled from 'styled-components/native';

function Feed(props) {
  return (
    <View>
      <Text>Feed</Text>
      <Button
        title="Go to Journals"
        onPress={() => props.navigation.navigate('Journal')}
      />
    </View>
  );
}

export default Feed;

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;
