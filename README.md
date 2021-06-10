# React Native Swipe Button

This component can be used to have an animated swipable button in your react-native app.

![npm](https://shields.cdn.bka.li/npm/dt/@dillionverma/react-native-swipe-button?style=for-the-badge)
![npm (scoped)](https://shields.cdn.bka.li/npm/v/@dillionverma/react-native-swipe-button?label=version&style=for-the-badge)
![GitHub issues](https://shields.cdn.bka.li/github/issues/dillionverma/react-native-swipe-button?style=for-the-badge)
![GitHub pull requests](https://shields.cdn.bka.li/github/issues-pr/dillionverma/react-native-swipe-button?style=for-the-badge)

![@dillionverma/react-native-swipe-button](https://raw.githubusercontent.com/dillionverma/react-native-swipe-button/master/docs/example.gif)

## Install

```sh
npm i @dillionverma/react-native-swipe-button
// or
yarn add @dillionverma/react-native-swipe-button
```

## Props

| Prop                        | Type                    | Description                                                                        |
| --------------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| title                       | string **Required**     | The text that will be displayed inside the button                                  |
| onSwipeStart                | () => void              | Callback that will be invoked when the user starts swiping                         |
| onSwipeEnd                  | () => void              | Callback that will be invoked when the user ends swiping                           |
| onComplete                  | () => void **Required** | Callback function that will be invoked when the button has reached the final state |
| height                      | number                  | The height of the container. Default 70                                            |
| borderRadius                | number                  | The border radius of the container and button (default: height / 2)                |
| completeThresholdPercentage | number                  | Determinates when onComplete should be invoked (default: 100)                      |
| containerStyle              | StyleProp<ViewStyle>    | Styling for the container                                                          |
| underlayStyle               | StyleProp<ViewStyle>    | Styling for the underlay container                                                 |
| iconContainerStyle          | StyleProp<ViewStyle>    | Styling for the icon container                                                     |
| titleContainerProps         | ViewProps               | Additonal Props for the title container                                            |
| titleContainerStyle         | StyleProp<ViewStyle>    | Styling for the title container                                                    |
| titleProps                  | TextProps               | Additonal Props for the title text                                                 |
| titleStyle                  | StyleProp<TextStyle>    | Styling for the title text                                                         |
