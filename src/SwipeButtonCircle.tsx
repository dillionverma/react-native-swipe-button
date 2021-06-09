import React, { ReactNode } from 'react';
import { Animated, GestureResponderHandlers, StyleSheet } from 'react-native';
import { SwipeButtonCommonProps } from './SwipeButton';

export interface SwipeButtonCircleProps extends SwipeButtonCommonProps {
  /**
   * GestureHandlers for when swiping the button
   */
  panHandlers: GestureResponderHandlers;

  /**
   * Opacity of the element
   */
  opacity?: number;

  /**
   * Element that should be displaied inside the button
   */
  Icon: ReactNode;

  /**
   * Determinates the value of the button
   */
  translateX: Animated.Value;
}

const SwipeButtonCircle = ({
  Icon,
  opacity,
  panHandlers,
  translateX,
  height,
  borderRadius,
}: SwipeButtonCircleProps) => (
  <Animated.View
    testID="Button"
    {...panHandlers}
    style={[
      styles.iconContainer,
      {
        opacity,
        width: height,
        height,
        borderRadius,
        transform: [{ translateX }],
      },
    ]}
  >
    <Animated.View
      testID="IconContainer"
      style={[
        styles.innerIconContainer,
        {
          width: height,
          height,
          borderRadius,
        },
        { opacity },
      ]}
    >
      {Icon}
    </Animated.View>
  </Animated.View>
);

export default SwipeButtonCircle;

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
