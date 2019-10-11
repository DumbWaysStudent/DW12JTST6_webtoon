  import { createStackNavigator, createAppContainer } from 'react-navigation';
  import LoginScreen from './src/screens/LoginScreen';
  import ForYouScreen from './src/screens/ForYouScreen';
  import DetailWebtoonScreen from './src/screens/DetailWebtoonScreen';
  import DetailEpsScreen from './src/screens/DetailEpsScreen';
  import MyWebtoonCreationScreen from './src/screens/MyWebtoonCreationScreen';
  import CreateWebtoonScreen from './src/screens/CreateWebtoonScreen';
  import CreateEpisodeScreen from './src/screens/CreateEpisodeScreen';
  import EditWebtoonScreen from './src/screens/EditWebtoonScreen';
  import EditEpisodeScreen from './src/screens/EditEpisodeScreen';
  import EditProfileScreen from './src/screens/EditProfileScreen';

  import React from 'react';
  import { StyleSheet } from 'react-native';
  import { Icon } from 'native-base';

  const navigator = createStackNavigator(
    {    
      Login:LoginScreen,
      ForYou: ForYouScreen,
      DetailWebtoon:DetailWebtoonScreen,
      DetailEps:DetailEpsScreen,
      MyWebtoonCreation:MyWebtoonCreationScreen,
      CreateWebtoon:CreateWebtoonScreen,
      CreateEpisode:CreateEpisodeScreen,
      EditWebtoon:EditWebtoonScreen,
      EditEpisode:EditEpisodeScreen,
      EditProfile:EditProfileScreen
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none'
    }
  );

  export default createAppContainer(navigator);