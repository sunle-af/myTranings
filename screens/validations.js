import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, ImageBackground} from 'react-native';

export default function ValidationForm()  {
  const [email, setEmail] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [checkValidEmail, setCheckValidEmail] = React.useState(false);
  const [checkValidUsername, setCheckValidUsername] = React.useState(false);
  const [checkValidNumber, setCheckValidNumber] = React.useState(false);
  const [checkValidPassword, setCheckValidPassword] = React.useState(false);
  
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleCheckUsername = text => {
    let re = /^[a-zA-Z0-9]+$/;
     setUsername(text);
     if (re.test(text)) {
      setCheckValidUsername(false);
     }
     else {
      setCheckValidUsername(true);
     }
  };

  const handleCheckNumber = text => {
    let re = /^[0-9]{10}$/g;
     setTelephone(text);
     if (re.test(text)) {
      setCheckValidNumber(false);
     }
     else {
      setCheckValidNumber(true);
     }
  };

  const handleCheckPassword = text => {
    let re1 = /^.{8,}$/;    //min 8 characters
    let re2 = /(?=.*\\d)/;  //number required
    let re3 = /(?=.*[A-Z])/ //uppercase letter

     setPassword(text);
     if (re1.test(text) && re2.test(text) && re3.test(text)) {
      setCheckValidPassword(false);
     }
     else {
      setCheckValidPassword(true);
     }
  };

  return (
    <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/bg2.png')} >
    <View style={styles.container}>
      <SafeAreaView>
        <Text style = {styles.formLabel}>User Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => handleCheckUsername(text)}
        value={username}
        placeholder = "User Name"
        />

        {checkValidUsername ? (<Text style={styles.textFailed}>*Please enter alphanumeric characters only</Text>) : (<Text style={styles.textFailed}> </Text>)}
        <Text style = {styles.formLabel}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={text =>handleCheckEmail(text)}
        value={email}
        placeholder = "Email"
        keyboardType='email-address'
        textContentType='emailAddress'
        />
        {checkValidEmail ? (<Text style={styles.textFailed}>*Please enter a valid email</Text>) : (<Text style={styles.textFailed}> </Text>)}
        <Text style = {styles.formLabel}>Phone Number</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => handleCheckNumber(text)}
        value={telephone}
        placeholder = "Phone Number"
        />
        {checkValidNumber ? (<Text style={styles.textFailed}>*Please enter 10 digits</Text>) : (<Text style={styles.textFailed}> </Text>)}
        <Text style = {styles.formLabel}>Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={text => handleCheckPassword(text)}
        value={password}
        placeholder = "Password"
        textContentType='password'
        secureTextEntry={true}
        />
        {checkValidPassword ? (<Text style={styles.textFailed}>*Password must contain minimum 8 characters with number and uppercase letter</Text>) : (<Text style={styles.textFailed}> </Text>)}
        <Button
          style={styles.button}
          title="Sign up"
          color="black"
          accessibilityLabel='Sign up'
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>


   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'

  },
  paragraph: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formLabel: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white'
  },
  input: {
    height: 30,
    marginBottom: 0,
    padding:8,
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    marginBottom: 12,
    padding: 8,
  },
  textFailed: {
    alignSelf: 'flex-start',
    color: 'red',
    fontSize: 10
  }
});