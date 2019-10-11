import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base';
import { Text, View, Image, TextInput } from 'react-native';

export default class EditProfile extends Component {
    constructor(){
      super();
      this.state={
        name:'Irvan',
        url: 'https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png'
      }
    }
    render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Edit Profile</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='create' />
              </Button>
            </Right>
          </Header>
          <View style={{flex:1}}>
            <View style={{ flex: 1, alignItems: 'center', marginVertical:20 }}>
              <Image 
                source={{uri: this.state.url}}
                style={{width:200, height:200}}
              >
  
              </Image>
              <TextInput 
                style={{ fontSize:18, fontWeight:'bold', borderWidth:1, height:44, width:200, paddingHorizontal:10, borderRadius:5, margin:20}}
                value={this.state.name}
              >
              </TextInput>
            </View>
          </View>
        </Container>
      );
    }
  }