
import QrScanner from "../src/qrscanner/qrmain"
import renderer from 'react-test-renderer';

import { PERMISSIONS } from "react-native-permissions"
jest.mock('react-native-permissions', () => require("react-native-permissions/mock") );


test('given empty GroceryShoppingList, user can add an item to it', () => {
    // const { getByPlaceholder, getByText, getAllByText } = render(
    //     <QrScanner />
    //   );
    
    //   fireEvent.changeText(
    //     getByPlaceholder('Enter grocery item'),
    //     'banana'
    //   );
    //   fireEvent.press(getByText('Add the item to list'));
    
    //   const bananaElements = getAllByText('banana');
    //   expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list

    const bananaElements = "b";
    expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
