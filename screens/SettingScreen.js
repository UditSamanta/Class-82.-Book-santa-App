import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends Component{
  constructor(){
    super();
    this.state ={
     emailId:"",
     firstName:"", 
     lastName:"",
     address:"",
     contact:"",
     docId:""
    }
  }

  getUserDatails = ()=>{
      var email = firebase.auth().currentUser.email;
      db.collection('users').where('email_id', "==", email).get().then(
        snapshot=>{
              snapshot.forEach(doc=>{
                  var data = doc.data()
                  this.setState({
                      emailId:data.email_id,
                      firstName:data.first_name,
                      lastName:data.last_name,
                      address:data.adress,
                      contact:data.contact,
                      docId:doc.id
                  })
              })
          }
      )
  }

  updateUserDetails=()=>{
      db.collection("users").doc(this.state.docId).update({
          "first_name":this.state.firstName,
          "last_name":this.state.lastName,
          "address":this.state.address,
          "contact":this.state.contact
      })
      Alert.alert("Profile Updated Succesfully")
  }

  componentDidMount(){
      this.getUserDatails()
  }


  render(){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <MyHeader title="Settings" navigation={this.props.navigation}/>
            <View style={styles.formContainer}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={(text)=>{
                    this.setState({
                        firstName:text
                    })
                }}
                value={this.state.firstName}
              />
              <TextInput
                style ={styles.formTextInput}
                maxLength={8}
                placeholder={"Last Name"}
                onChangeText ={(text)=>{
                    this.setState({
                        lastName:text
                    })
                }}
                value ={this.state.lastName}
              />
               <TextInput
                style ={styles.formTextInput}
                maxLength={10}
                placeholder={"Contact"}
                keyboardType={"numeric"}
                onChangeText ={(text)=>{
                    this.setState({
                        contact:text
                    })
                }}
                value ={this.state.cantact}
              />
               <TextInput
                style ={styles.formTextInput}
                multiline={true}
                placeholder={"Address"}
                onChangeText ={(text)=>{
                    this.setState({
                        address:text
                    })
                }}
                value ={this.state.address}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.updateUserDetails()}}
                >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    buttonText:
    {
         fontSize:25,
         fontWeight:"bold",
          color:"#fff" }

    }
)