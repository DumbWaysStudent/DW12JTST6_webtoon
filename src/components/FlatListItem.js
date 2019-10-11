import React, { Component } from "react";
import {  Image, Text, TouchableOpacity } from "react-native";
import { View, Button } from "native-base";

export default class FlatListItem extends Component{

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, flexDirection:'row', borderBottomWidth:1}}>
                    <TouchableOpacity>
                        <Image 
                            source ={{uri : this.props.item.url}}
                            style = {{width:50, height:50, margin:5}}>

                        </Image>
                    </TouchableOpacity>

                    <View style={{flex:1, justifyContent:'center', margin:2}}>
                        <Text> {this.props.item.title} </Text> 
                        <Button block info style={{width:100}} onPress={()=>this.props.navigation.navigate('DetailWebtoon')}>
                            <Text>Add Favorite</Text>
                        </Button>
                    </View>
                </View>
                <View style={{height:1, backgroundColor:'white'}}>
                </View>
            </View>
            
        )
    }
}