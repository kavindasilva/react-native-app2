/**
 * @format
 * OwlBot dictionary functions testing
 */

import 'react-native';
import React from 'react';
import App from '../App';
import envConfig from "../env";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import exportss, {getWord} from "../src/services/owlbotApi.tsx"

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

test("check auth header api key", () => {
  const apiKey = "Token "+envConfig.owlbotApiKey;
  expect( exportss.setAuthenticationHeader() ).toEqual(expect.objectContaining({
    "headers": {"Authorization": apiKey }
  }));
});

test("getWord empty", async () => {
  const resp = await getWord();
  console.log("get1:", resp);
  expect( resp.err ).toBe(false);
  expect( resp.msg ).toContain('undefined');
});

test("getWord owl", async () => {
  const resp = await getWord("owl");
  expect( resp.err ).toBe(false);
});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
