import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, View, Button, Icon, Left, Body, Right, Content } from 'native-base';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default class EditEpisodeScreen extends Component {
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
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Create Episode</Text>
          </Body>
          <Right>
              <Icon name="done"></Icon>
          </Right>
        </Header>
        <View>
            <TextInput 
                placeholder='Name'
                style={{height:50, borderWidth:1, paddingHorizontal:10, margin:10, borderRadius:5}}
            >

            </TextInput>
            <Text style={{marginVertical:10, fontSize:22, paddingHorizontal:10}}>Add Images</Text>
        </View>
        <FlatList 
          keyExtractor={data=> data.title}
          data = {this.state.data} 
          renderItem={({item, index})=>{
          // console.log(`item = ${JSON.stringify(item)}, index = ${index}`);
          return(
              <View style={{flex:1, margin:3}}>
                  <View style={{flex:1, flexDirection:'row', borderBottomWidth:1}}>
                      <Image 
                          source ={{uri : item.url}}
                          style = {{width:60, height:60, margin:5}}>

                      </Image>
                      <Content>
                          <Text> {item.title} </Text> 
                          <Button danger style={{width:90}}>
                              <Icon name="trash"></Icon>
                              <Text style={{fontWeight:'bold', color:'white', paddingRight:15}}>Delete</Text>
                        </Button>
                          
                    </Content>
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
            <Button block danger style={{marginTop:10}}>
              <Icon name="trash"></Icon>
              <Text style={{fontWeight:'bold', color: 'white'}}>Delete Episode</Text>
            </Button>
        </View>
      </Container>
    );
  }
}