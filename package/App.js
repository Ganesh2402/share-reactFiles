import React from 'react';
import {StackNavigator} from 'react-navigation';

import MapScreen from './AppMapScreen';
import ProfileScreen  from './profileScreen';

const App = StackNavigator({
  Home: { screen: MapScreen },
  Profile: { screen: ProfileScreen },
});

export default App;
