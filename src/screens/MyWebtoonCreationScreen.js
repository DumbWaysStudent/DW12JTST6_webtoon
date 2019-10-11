import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, View, Button, Icon, Fab, Left, Body } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

export default class MyWebtoonCreationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      data:[
        {
          title:'The Secret of',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 32
        },
        {
          title:'Young Mom',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 20
        },
        {
          title:'Terlalu Cantik',
          url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          episode: 42
        }
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
            <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>My Webtoon</Text>
          </Body>
        </Header>
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
                      <View style={{flex:1, justifyContent:'center'}}>
                          <Text> {item.title} </Text> 
                          <Text> {item.date} </Text> 
                          
                      </View>
                  </View>
                  <View style={{height:1, backgroundColor:'white'}}>
                  </View>
              </View>
          )
          }}>

        </FlatList>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('CreateWebtoon')}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}