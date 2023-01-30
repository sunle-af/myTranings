import React ,{useState,useRef,useEffect} from 'react';
import { ImageBackground,Image, Text, View,Linking,TextInput,TouchableOpacity, } from 'react-native';

import { StatusBar } from 'expo-status-bar';


export default function AboutPage({navigation}){
    return(
      <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/bg2.png')} >
        
        <View style={{flex:1,padding:26,}}>
        
        <Image source=
        {{uri:'https://media.licdn.com/dms/image/C4D03AQHE4PUNFCEM0w/profile-displayphoto-shrink_800_800/0/1650875363192?e=2147483647&v=beta&t=A1LBbD2xattTWBoo9FtoEuZu7eyQ3jdCk7QWnwBu2bs'}} 
        style={{alignSelf:'center',margin:10, borderRadius:75, width:150,height:150}} />

        <View style={{flex:1,justifyContent:'space-around',alignItems:'center',  flexDirection:'row' ,  }}>
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.33)',width:'50%',alignItems:'center', padding:18 ,borderRadius:50 }} >
              <Text style={{color:'white'}} >ABOUT ME</Text>
            </View>
        </View>

        <View style={{padding:30 , flex:1}}>
            <Text style={{color:'white',textAlign:'center', fontSize:16}}>     
            I am Subhash Suryawanshi, a computer science professional with a Bachelors from IIT.
            Skilled in software development, problem-solving, and data structures. 
            Dedicated to writing efficient code and delivering high-quality solutions.
            </Text>
            <Text style={{color:'white',textAlign:'center', fontSize:16}} >
            A passionate and driven software developer always eager for new challenges.
            </Text>
          </View>



        <View style={{width:'100%', backgroundColor:'rgba(0, 0, 0, 0.33)',borderRadius:50, justifyContent:'space-around',
        alignItems:'center',  flexDirection:'row' ,}}>
              <TouchableOpacity  onPress={()=> navigation.navigate('ContactPage')}>
              <View style={{  width:'33%',alignItems:'center', padding:18 , }} >
                <Image source={ require('../assets/heart.jpg')} style={{width:20,height:20}} />
              </View>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
        <View style={{width:'33%',alignItems:'center', padding:18 , }} >
                <Image source={ require('../assets/home.jpg')} style={{width:20,height:20}} />
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=> navigation.navigate('AboutPage')}>
            <View style={{width:'33%',alignItems:'center', padding:18 , }} >
                  <Image source={ require('../assets/contact.png')} style={{width:20,height:20}} />
            </View>
    </TouchableOpacity>
         
       </View>
       
          </View>
  
        
        </ImageBackground>
    )
  }