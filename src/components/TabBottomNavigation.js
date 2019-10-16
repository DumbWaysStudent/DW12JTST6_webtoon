import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class ForYou extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ForYou</Text>
      </View>
    );
  }
}

class Favourite extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favourite!</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      );
    }
  }

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'ForYou') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Favourite') {
    iconName = `ios-star${focused ? '' : '-outline'}`;
  }
   else{
    iconName = `ios-profile${focused ? '' : '-outline'}`;
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Foryou: { screen: ForYou },
      Favourite: { screen: Favourite },
      Profile: { screen: Profile },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);