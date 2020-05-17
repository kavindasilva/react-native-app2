
import 'react-native';
import React from 'react';

import QrScanner, { setFlashMode } from "../src/qrscanner/qrmain"
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { PERMISSIONS } from "react-native-permissions"
jest.mock('react-native-permissions', () => require("react-native-permissions/mock") );

// const wrapper = shallow(<QrScanner />);
// expect(wrapper.instance().doSomethingFancy()).toEqual(true);

it('given a date in the past, colorForDueDate() returns red', () => {
    const wrapper =  new QrScanner();
    // const wrapper =  renderer.create( <QrScanner /> );
    // const wrapper = ShallowRenderer.createRenderer(<QrScanner/>);
    wrapper.setState({qrFlashMode: 0});
    expect( wrapper.setFlashMode() )
    .toBe(true);
  });

it('set flash mode', () => {
    // const fmresult = setFlashMode();
    const fmresult = renderer.create( <setFlashMode /> );
    expect( fmresult )
    .toBe(true);
  });

test('given empty GroceryShoppingList, user can add an item to it', () => {
    // const { getByPlaceholder, getByText, getAllByText } = renderer.create(
    //     <QrScanner />
    //   );
    
    //   fireEvent.changeText(
    //     getByPlaceholder('Enter grocery item'),
    //     'banana'
    //   );
    //   fireEvent.press(getByText('Add the item to list'));
    
    //   const bananaElements = getAllByText('banana');
    //   expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list

    // const bananaElements = "b";
    // expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
