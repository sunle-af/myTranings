import React ,{useState,useRef,useEffect} from 'react';
import { StyleSheet,ImageBackground,Image, Text, View,Button,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function UserRegisterPage( { navigation} ){
    
    
    let name= navigation.getParam('name')
    let desc = navigation.getParam('desc')

    const[likes,setLikes]=useState(1)
    function likeButton(){
        setLikes(parseInt(likes)+1)
        console.log(likes)
    }
    function dislikeButton(){
        if(likes>0){
            setLikes(likes-1)
        console.log(likes)

        }
    }
        return (
            <>
        <View style={styles.appContainer}>
             <ImageBackground style={{justifyContent:'space-around',alignItems:'center', width:'100%', height:'100%'}} source={require ('../assets/bg.jpg')} >
                 <View>
                 <View style={{flexDirection:'row',borderRadius:10, justifyContent:'space-around',borderWidth:1,padding:10, alignItems:'center'}}>
                        <View>
                            <Image source={require('../assets/bg1.png')} style={{borderRadius:10, width:100,height:100}} />
                        </View>  
                <View style={{marginLeft:10, width:'60%'}}>
                <Text style={{fontSize:20, color:'black'}}>{name}</Text>
                    <Text > {desc} </Text>
                </View>  
                    </View>
                    <View style={{flexDirection:'row',padding:20, justifyContent:'space-around'}}>
                        
                    <Button onPress={likeButton}  title='Like' />
                    <Button onPress={dislikeButton}  title='Dislike' />
                    </View>
                    <Text style={{fontSize:40, textAlign:'center',color:'white'}} >{likes}</Text>
                 </View>
            <StatusBar style='light'/>
               </ImageBackground>  
           </View>

            </>
      );
}

const styles = StyleSheet.create({
    
 appContainer:{
     flex:1,
     backgroundColor:'red'
 },  
 borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: "#1E1E1E",
    borderRadius:20,
  },
  
  
});