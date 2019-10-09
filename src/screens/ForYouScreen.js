import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-anchor-carousel';
import Constants from 'expo-constants';
import { Container, Header, Card, CardItem, Item, Input, Button, Icon} from 'native-base';
import ImageCarousel from '../components/ImageCarousel';
import FlatListItem from '../components/FlatListItem'; 
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import Slideshow from 'react-native-image-slider-show';
const { width } = Dimensions.get('window'); 
class ForYouScreen extends Component {
  constructor(){
    super();
    this.state={
      position: 1,
      interval: null,
      data:[
        {
          title:'The Secret of',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        },
        {
          title:'Young Mom',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        },
        {
          title:'Terlalu Cantik',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
        }
      ]
    }
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.data.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
        <Slideshow 
            dataSource={this.state.data}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
          {/* <Card>
              <CardItem>
                  <Image source={{uri: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
          </Card> */}
          <Text style={{fontSize:18, fontWeight:"bold"}}>Favorites</Text>
          <View style={styles.container}>
            <View style={styles.carouselContainer2}>
              <ImageCarousel/>
            </View>
          </View>
          <Text style={{fontSize:18, fontWeight:"bold"}}>All</Text>
          <FlatList 
            keyExtractor={data=> data.title}
            data = {this.state.data} 
            renderItem={({item, index})=>{
              // console.log(`item = ${JSON.stringify(item)}, index = ${index}`);
              return(
                <View>
                  <FlatListItem item={item} index = {index}>

                  </FlatListItem>
                </View>
                
              )
            }}
          >

          </FlatList>
        </ScrollView>
      </Container>
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
  if (routeName === 'ForYouScreen') {
    iconName = `ios-keypad${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Favourite') {
    iconName = `ios-star${focused ? '' : '-outline'}`;
  }
   else{
    iconName = `ios-contact${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      ForyouScreen: { screen: ForYouScreen },
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
    carouselContainer: {
    height: 100,
    width: width,
    borderWidth: 5,
    borderColor: 'white',
  },
  carouselContainer2: { 
    width: width,
    height:width*0.8, 
    marginTop:5
  }, 
});