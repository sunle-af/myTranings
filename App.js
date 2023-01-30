
import React, {useState} from 'react';

import { StyleSheet, View, Text, TextInput,Button,TouchableOpacity } from 'react-native';
const App = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return (
      <View style={styles.container}>

      <View style={{borderRadius:20,padding:20, backgroundColor:'#FFD4D4',}}>
    <TextInput
          value={userName}
          onChangeText={
            (userName) => setUserName(userName)
          }
          placeholder={'Email'}
          style={styles.input}
        />
        {
         //here we can apply some email regex 
        userName==''?<Text></Text>:
          reg.test(userName)==false?<Text style={{color: 'red'}}>Please enter a valid email</Text>:<Text style={{color: 'green'}}>Entred Email is valid</Text>
        }
        <TextInput
          value={pass}
          secureTextEntry={true}
          onChangeText={
            (pass) => setPass(pass)
            }
          placeholder={'Password'}
          style={styles.input}
        />
         {
            pass===''?
            <Text style={{color: 'red',fontSize:10,marginBottom:10, }}>Enter your secured password 🔒</Text>:<Text style={{color: 'green' ,fontSize:10,marginBottom:10}}>Entred Password is valid</Text>
        }
       
       <TouchableOpacity onPress={()=>
        alert('Success Login')
        }>
            <View style={{width:'100%',marign:10, alignItems:'center',borderRadius:20, backgroundColor:'#5BC0F8', padding:10,}}>
            <Text style={{color:'white'}}>LOGIN</Text>
            </View>
       </TouchableOpacity>
        
        
      </View>


        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor: '#84D2C5',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },
});

export default App;