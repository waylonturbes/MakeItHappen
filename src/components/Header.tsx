import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {Button} from './Button';

export function Header() {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Pressable role="button">
        <Text>Go Back</Text>
      </Pressable>
      <Button>Test</Button>
      <View style={styles.innerContainer} />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: '100%',
    height: 60,
  },
  innerContainer: {
    width: '100%',
    maxWidth: theme.breakpoints.lg,
  },
}));
