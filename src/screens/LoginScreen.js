import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import { Button, Icon, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../components/Logo';

export default class LoginScreen extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            validate_email : false,
            password:'',
            isSecureTextEntry:false,
            fixEmail: 'irvan@gmail.com',
            fixPassword : 'irvan',
            loading:false
        }
    }
    
    // handleChange = event =>{
    //     this.setState({
    //         email:event.target.value,
    //         password:event.target.value
    //     })
    // }
    // handleSubmit = (email, password) => {
    //     axios.post('http://192.168.0.62:5000/api/v1/login', {email,password})
    //     .then(res => {
    //         const newEmail = this.state.email;
    //         const newPassword = this.state.password;
    //         this.setState({
    //             email:newEmail,
    //             password:newPassword
    //         })
            
    //     })
    //     .catch((error)=>{
    //         throw error
    //     });
    //     alert(this.state.email);
    // }

    // makeRemoteRequest = ()=>{
    //     this.setState({loading:true})
    //     setTimeout(()=>{
    //         axios.get('http://192.168.0.62:5000/api/v1/webtoons').then(res=>{
    //             const newData = this.state.data.concat(res.data);
    //             this.setState({
    //                 loading:false,
    //                 data:newData
    //             })
    //         }).catch(err=>{
    //             throw err;
    //         });
    //     }, 1500)
    // }
    // componentDidMount(){
    //     this.makeRemoteRequest()
    // }

    checkEmail = () =>{
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
    showPassword=()=>{
        this.setState({
            isSecureTextEntry: !this.state.isSecureTextEntry
        })
    }
    render(){
        return (   
            <View style={styles.container}>
                <Logo/>
                <View style={styles.form}>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        autoCapitalize="none"
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText = {(text)=>{
                            this.setState({
                                email:text
                            })
                        }}
                    />
                    <TextInput 
                        autoCapitalize="none"
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        value={this.state.password}
                        secureTextEntry={!this.state.isSecureTextEntry}
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                        }}
                    >
                    </TextInput>
                    {/* <TouchableOpacity onPress={this.showPassword}>
                        <Icon 
                            style={{marginTop:15, fontSize:33, paddingHorizontal:5, borderRadius:5}}
                            name={this.state.isSecureTextEntry ? 'eye': 'eye'}></Icon>
                    </TouchableOpacity> */}
                    
                    <Button block info style={styles.button} onPress={()=> this.checkEmail()}>
                        <Text style={{justifyContent:'center', color:'white'}}>Login</Text>
                    </Button>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {        
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    form : {
        flexGrow: 1,
        // justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        height:45,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
})