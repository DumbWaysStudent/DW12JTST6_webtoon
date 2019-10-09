import React, { Component } from 'react';
import { Image, Text, FlatList, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Button, Icon, Left, Body, Right } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';
export default class DetailEpsScreen extends Component {
    constructor(){
        super();
        this.state={
          data:[
            {
              title:'The Secret of',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              date: '1 Januari 2019'
            },
            {
              title:'Young Mom',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              date: '1 Februari 2019'
            },
            {
              title:'Terlalu Cantik',
              url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
              date: '1 Maret 2019'
            }
          ]
        }
      }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Icon name="back"></Icon>
              </Left>
                <Body>
                    <Text>Title</Text>
                </Body>
                <Right>
                    <Icon name="share"></Icon>
                </Right>
            </CardItem>
                <FlatList 
                    keyExtractor={data=> data.title}
                    data = {this.state.data} 
                    renderItem={({item, index})=>{
                    // console.log(`item = ${JSON.stringify(item)}, index = ${index}`);
                    return(
                        <View style={{flex:1, margin:3}}>
                            <View style={{flex:1}}>
                                <Image 
                                    source ={{uri : item.url}}
                                    style = {{width:300, height:400, margin:5}}>

                                </Image>
                            </View>
                            <View style={{height:1, backgroundColor:'white'}}>
                            </View>
                        </View>
                    )
                    }}>
                </FlatList>
          </Card>
        </Content>
      </Container>
      
    );
  }
}