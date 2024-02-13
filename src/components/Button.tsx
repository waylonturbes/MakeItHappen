import React, {JSX} from 'react';
import {Pressable, Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

import {Colors} from '../config/themes';

export type ButtonProps = {
  children: string;
  bgColor?: keyof Colors['bg'];
  fgColor?: keyof Colors['fg'];
  rightElement?: JSX.Element | null;
  leftElement?: JSX.Element | null;
  disabled?: boolean;
  variant?: 'solid' | 'outline' | 'ghost';
  gap?: number;
};

export function Button({
  bgColor = 'primary',
  children,
  fgColor = 'neutralOnPrimary',
  disabled = false,
  variant = 'solid',
  rightElement = null,
  leftElement = null,
  gap = 4,
}: ButtonProps) {
  const {styles} = useStyles(stylesheet);
  return (
    <Pressable role="button" disabled={disabled}>
      {({pressed}) => (
        <View
          style={styles.innerContainer(
            bgColor,
            fgColor,
            variant,
            gap,
            pressed,
          )}>
          {rightElement}
          <Text>{children}</Text>
          {leftElement}
        </View>
      )}
    </Pressable>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {},
  innerContainer: (
    bgColor: keyof Colors['bg'],
    fgColor: keyof Colors['fg'],
    variant: Required<ButtonProps['variant']>,
    gap: Required<ButtonProps['gap']>,
    pressed: boolean,
  ) => ({
    backgroundColor: variant === 'solid' ? theme.colors.bg[bgColor] : undefined,
    color: theme.colors.fg[fgColor],
    borderColor: pressed
      ? theme.colors.fg.neutralOnPrimary
      : theme.colors.fg[fgColor],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap,
    borderWidth: 1,
  }),
}));
