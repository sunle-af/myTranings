import React ,{useState,useRef,useEffect} from 'react';
import { Alert, StyleSheet,ImageBackground,Image, Text, View,Button,TextInput,TouchableOpacity,Dimensions,PixelRatio } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RadioGroup from 'react-native-radio-buttons-group';
import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from 'expo-checkbox';

export default function UserRegisterPage( {name,desc} ){
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setEmail] = useState('');
    const [value, onChangeText] = React.useState('Comment');
    const [isSelected, setSelection] = useState(false);
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').height;
    const [radioButtons, setRadioButtons] = useState([
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Male',
          value: 'option1'
      },
      {
          id: '2',
          label: 'Female',
          value: 'option2'
      }
  ]);
  const [isChecked, setChecked] = useState(false);

  
  const data = [
      {key:'1', value:'Computer Science Engineering', disabled:true},
      {key:'2', value:'Electrical Engineering'},
      {key:'3', value:'Electronic Engineering'},
      {key:'4', value:'History',},
      {key:'5', value:'Political Sciences'},
  ]
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
        return (
            <>
             <View style={{flexDirection:'row',justifyContent:'space-around',borderWidth:1,padding:10, alignItems:'center'}}>
                        <View>
                            <Image source={require('../assets/bg1.png')} style={{borderRadius:10, width:100,height:100}} />
                        </View>  
                <View style={{marginLeft:10, width:'60%'}}>
                <Text style={{fontSize:20, color:'black'}}>{name}</Text>
                    <Text > {desc} </Text>
                </View>  
                    </View>
            <StatusBar style='light'/>
            
               {/* <View style={styles.appContainer}> */}
               {/* <ImageBackground style={{width:'100%', height:'100%'}} source={require ('../assets/bg1.png')} >
                 
                <View style={{paddingLeft:25,paddingRight:25,paddingTop:25,paddingBottom:60, width:'100%',height:deviceHeight>600?550:hp('80%') , backgroundColor:'white', bottom:0,position:'absolute',borderTopLeftRadius:30,borderTopRightRadius:30}}>  
                   
                    
                       <View style={{ backgroundColor:'white'}}>
                       <Text style={{fontFamily: 'Open-sans', fontSize:22, fontWeight:'400'}}>Let's create your profile </Text>
                       
                                    <TextInput  onChangeText={newfirstName => setFirstName(newfirstName)}  placeholder="Name" 
                                    style={{fontFamily: 'Open-sans', marginTop: 20,marginBottom:17,paddingBottom:8,
                                    borderColor: ' #1E1E1E;',
                                    borderBottomWidth: 0.75
                                    }}
                                    />
                                     <TextInput onChangeText={email => setEmail(email)} placeholder="Email" 
                                     style={{fontFamily: 'Open-sans',
                                      marginBottom:17,paddingBottom:8,
                                        borderColor: ' #1E1E1E;',
                                        borderBottomWidth: 0.75
                                    }}
                                    />
                                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10, alignItems:'center'}}>
                                    <Text style={{fontFamily: 'Open-sans',
                                        borderColor: ' #1E1E1E;',width:'50%'
                                    }}>Education</Text>
                                    <SelectList 
                                    // setSelected={(val) => setSelected(val)} 
                                    data={data} 
                                    containerStyle={{ width:'40%'}}
                                    save="value"
                                    />
                                    </View>
                                   
                                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10, alignItems:'center'}}>
                                    <Text style={{fontFamily: 'Open-sans',
                                        borderColor: ' #1E1E1E;' , width:'40%'
                                    }}>Gender</Text>
                                        <RadioGroup containerStyle={{ backgroundColor:'white',flexDirection:'row' }}
                                        radioButtons={radioButtons} 
                                                                // onPress={onPressRadioButton} 
                                        />
                                    </View>
                                    
                                       <TextInput
                                        editable
                                        multiline
                                        numberOfLines={5}
                                        maxLength={40}
                                        onChangeText={text => onChangeText(text)}
                                        value={value}
                                        style={{padding: 4,borderRadius:5, borderColor: ' #1E1E1E;',
                                        borderWidth: 0.75}}
                                      />

                                <View style={{paddingVertical:10, flexDirection:'row',alignItems:'center',}}>
                                <Text style={{fontWeight:'600',marginRight:20}}>Hobbies</Text>
                                <Checkbox 
                                        style={{  margin: 8,}}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#4630EB' : undefined}
                                        /> 
                                <Text>Drawing</Text>
                                <Checkbox 
                                        style={{  margin: 8,}}
                                        // value={isChecked}
                                        // onValueChange={setChecked}
                                        color={isChecked ? '#4630EB' : undefined}
                                        /> 
                                <Text>Singing</Text>
                                <Checkbox 
                                        style={{  margin: 8,}}
                                        // value={isChecked}
                                        // onValueChange={setChecked}
                                        color={isChecked ? '#4630EB' : undefined}
                                        /> 
                                <Text>Dancing</Text>
                                </View>
                                <View>
                                    <Button title='Submit'/>
                                </View>
                               
                       </View>
                   </View>
               </ImageBackground> */}

           {/* </View> */}
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