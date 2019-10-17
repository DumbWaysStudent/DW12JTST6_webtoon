import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, View, Button, Icon, Left, Body, Right } from 'native-base';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default class CreateWebtoonScreen extends Component {
  constructor() {
    super()
    this.state = {
      active: false,
      data:[
        {
          date: '17 September 2019',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 3
        },
        {
          date: '15 Desember 2019',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 2
        },
        {
          date: '1 Desember 2019',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 1
        }
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
            <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Create Webtoon</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-checkmark"></Icon>
            </Button>
          </Right>
        </Header>
        <View>
            <TextInput 
                placeholder='Title'
                style={{fontSize:20, height:50, borderWidth:1, paddingHorizontal:10, margin:10, borderRadius:5, color:"white", borderColor:"white"}}
            >

            </TextInput>
            <Text style={{marginVertical:10, fontSize:22, paddingHorizontal:10, color:'white'}}>Episode</Text>
        </View>
        <FlatList 
          keyExtractor={webtoon=> webtoon.episode}
          data = {this.state.data} 
          renderItem={({item})=>{
            return(
              <View style={{flex:1, margin:3}}>
                  <View style={{flex:1, flexDirection:'row', borderBottomWidth:1}}>
                      <Image 
                          source ={{uri : item.url}}
                          style = {{width:60, height:60, margin:5}}>

                      </Image>
                      <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={{color:'white'}}> Ep. {item.episode} </Text> 
                          <Text style={{color:'white'}}> {item.date} </Text> 
                          
                      </View>
                  </View>
                  <View style={{height:1, backgroundColor:'white'}}>
                  </View>
              </View>
          )
          }}>

        </FlatList>
        <View style={{ margin:10 }}>
          <Button block info onPress={()=> this.props.navigation.navigate('CreateEpisode')}>
              <Icon name="add"></Icon>
              <Text style={{fontWeight:'bold', color: 'white'}}>Add Episode</Text>
            </Button>
        </View>
      </Container>
    );
  }
}