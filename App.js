  import { createStackNavigator, createAppContainer } from 'react-navigation';
  import LoginScreen from './src/screens/LoginScreen';
  import ForYouScreen from './src/screens/ForYouScreen';

  const navigator = createStackNavigator(
    {    
      Login:LoginScreen,
      ForYou: ForYouScreen,
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  );

  export default createAppContainer(navigator);