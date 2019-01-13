import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components/native';
import Navigation from './components/navigation/Navigation';
import theme from './theme/theme';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Navigation />
        </>
      </ThemeProvider>
    );
  }
}
