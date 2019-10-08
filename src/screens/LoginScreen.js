import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch} from 'react-native';
import { Container, Header, Content, Button , Icon, Row } from 'native-base';
import { NavigationActions } from 'react-navigation';
import ForYouScreen from './ForYouScreen';

export default class LoginScreen extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            validate_email : false,
            password:'',
            isSecureTextEntry:true,
            fixEmail: 'irvan@gmail.com',
            fixPassword : 'irvan'
        }
    }
    checkEmail =() =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.state.email) === false) {
            alert("Email is Not Correct");
            this.setState({validate_email:false})
            return false;
        }
        else {
            this.setState({validate_email:true})
            this.checkLogin()
        }
    }
    checkLogin = () =>{
        // cryp_password = md5(this.state.password)
        if(this.state.email === this.state.fixEmail && this.state.password === this.state.fixPassword){
            alert("Login Success !");
            this.props.navigation.navigate('ForYou');
        } 
        else{
            alert("incorrect username and password")
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:30}}>Login</Text>
                    <Text style={{fontSize:18}}>Login with your account WEBTOON</Text>
                </View>
                <View style={{marginVertical:10}}>
                    <TextInput
                        style={styles.inputField} 
                        placeholder="Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText = {(text)=>{
                            this.setState({
                                email:text
                            })
                        }}
                    />
                    
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TextInput 
                            style={styles.inputField}
                            placeholder="Password"
                            value={this.state.password}
                            secureTextEntry={this.state.isSecureTextEntry}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}
                        />
                        <Switch
                            onValueChange = {(value)=>{
                                this.setState({isSecureTextEntry:value});
                                this.setState({password : this.state.password + ' '});
                                this.setState({password : this.state.password.substring(0, this.state.password.length)});
                            }}
                            value = {this.state.isSecureTextEntry}
                        />
                        {/* <Icon name="eye" onLongPress={()=> this.showPassword()}/> */}
                    </View>
                    
                    <Button block info style={{borderRadius:5}} onPress={()=> this.checkEmail()}>
                        <Text style={{justifyContent:'center', color:'white'}}>Login</Text>
                    </Button>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputField:{
        width:200,
        borderWidth:1,
        height:44,
        borderRadius:5,
        paddingHorizontal:10,
        margin:14
    }
})