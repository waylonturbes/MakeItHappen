import React from 'react';
import {View} from 'react-native';

import './config/unistyles';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export default function App() {
  const {styles} = useStyles(stylesheet);

  return <View style={styles.container}></View>;
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
}));
