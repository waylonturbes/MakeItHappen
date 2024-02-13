import React from 'react';
import {Text, View} from 'react-native';

import './config/unistyles';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Header} from './components/Header';

export default function App() {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Header />
      <Text>Test</Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.bg.screen,
    color: theme.colors.fg.neutralOnScreen,
  },
}));
