  import { createStackNavigator, createAppContainer } from 'react-navigation';
  import LoginScreen from './src/screens/LoginScreen';
  import ForYouScreen from './src/screens/ForYouScreen';
  import DetailWebtoonScreen from './src/screens/DetailWebtoonScreen';
  import DetailEpsScreen from './src/screens/DetailEpsScreen';

  import React from 'react';
  import { StyleSheet } from 'react-native';
  import { Icon } from 'native-base';

  const navigator = createStackNavigator(
    {    
      Login:LoginScreen,
      ForYou: ForYouScreen,
      DetailWebtoon:DetailWebtoonScreen,
      DetailEps:DetailEpsScreen,

    },
    {
      initialRouteName: 'ForYou',
      headerMode: 'none'
    }
  );

  export default createAppContainer(navigator);