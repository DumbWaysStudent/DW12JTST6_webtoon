import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, View, Button, Icon, Left, Body, Right, Content } from 'native-base';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default class CreateEpisodeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      data:[
        {
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          title: '1. cover.png'
        },
        {
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          title: '2. introduction.png'
        },
      ]
    };
  }
  render() {
    return (  
      <Container style={{backgroundColor:'#455a64'}}>
        <Header style={{marginTop:20, backgroundColor:'#02a6f7'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Create Episode</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-checkmark"></Icon>
            </Button>
          </Right>
        </Header>
        <View>
            <TextInput 
                placeholder='Name'
                style={{height:50, borderWidth:1, paddingHorizontal:10, margin:10, borderRadius:5, color:"white", borderColor:"white"}}
            >

            </TextInput>
            <Text style={{marginVertical:10, fontSize:22, paddingHorizontal:10, color:'white'}}>Add Images</Text>
        </View>
        <FlatList 
          keyExtractor={data=> data.title}
          data = {this.state.data} 
          renderItem={({item, index})=>{
            return(
              <View style={{flex:1, margin:3}}>
                  <View style={{flex:1, flexDirection:'row', borderBottomWidth:1}}>
                      <Image 
                          source ={{uri : item.url}}
                          style = {{width:60, height:60, margin:5}}>
                      </Image>
                      <View style={{flex:1}}>
                        <Text> {item.title} </Text>
                        <Button rounded danger style={{width:50,height:50}}>
                          <Icon name="trash"></Icon>
                        </Button>
                      </View> 
                  </View>
                  <View style={{height:1, backgroundColor:'white'}}>
                  </View>
              </View>
            )
          }}>

        </FlatList>
        <View style={{ margin:10 }}>
          <Button block info>
              <Icon name="add"></Icon>
              <Text style={{fontWeight:'bold', color: 'white'}}>Image</Text>
            </Button>
        </View>
      </Container>
    );
  }
}