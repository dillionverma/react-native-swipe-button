import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { DEFAULT_HEIGHT, DEFAULT_TEXT_COLOR } from './constants';
import { SwipeButtonCommonProps } from './SwipeButton';

export interface SwipeButtonTextProps
  extends Omit<SwipeButtonCommonProps, 'borderRadius'> {
  /**
   * The text that will be displaied in the container
   */
  title: string;

  /**
   * Additional props for the title text
   */
  titleProps?: TextProps;

  /**
   * Additional styling for the title text
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Additional props for the title container
   */
  titleContainerProps?: ViewProps;

  /**
   * Additional styling for the title container
   */
  titleContainerStyle?: StyleProp<ViewStyle>;
}

const SwipeButtonText = ({
  title,
  titleStyle,
  titleContainerProps,
  titleContainerStyle,
  titleProps,
  height = DEFAULT_HEIGHT,
}: SwipeButtonTextProps) => {
  return (
    <View
      testID="TitleContainer"
      style={[styles.titleContainer, { height }, titleContainerStyle]}
      {...titleContainerProps}
    >
      <Text
        numberOfLines={2}
        allowFontScaling={false}
        style={[styles.title, titleStyle]}
        testID="Title"
        {...titleProps}
      >
        {title}
      </Text>
    </View>
  );
};

export default SwipeButtonText;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    maxWidth: '50%',
    textAlign: 'center',
    color: DEFAULT_TEXT_COLOR,
  },
});
