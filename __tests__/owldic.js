/**
 * @format
 * OwlBot dictionary functions testing
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// import { setAuthenticationHeader } from "../src/services/owlbotApi.tsx"
import exportss from "../src/services/owlbotApi.tsx"

jest.mock('react-native-gesture-handler', () => {
  // eslint-disable-next-line global-require
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock') );

// describe('bar', () => {
//   it('should do what I like', () => {
//     expect(setAuthenticationHeader()).toMatchSnapshot();
//   });
// })

test("check auth header", () => {
  // console.log("en", process.env.NODE_ENV);
  const expectedAuthObj = { 
    headers: {
      "Authorization": "str"
    } 
  };
  expect( exportss.setAuthenticationHeader() ).toBe(true);
  // const actualAuthObj = setAuthenticationHeader();
  // console.log("dsd", actualAuthObj);
  // expect.objectContaining({
  //   "headers": ""
  // });
});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
