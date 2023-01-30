import React ,{useState,useRef,useEffect} from 'react';
import { FlatList, StyleSheet,ImageBackground,Keyboard, Text, View,Button,TextInput,TouchableOpacity,Dimensions,PixelRatio } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CalcPage(props){
    const [course,setCourse] = useState('');
    const [creditEarned,setCreditEarned] = useState('');
    const [totalCredit,setTotalCredit] = useState('');
    const [table,setTable] =useState([])
    function addData(){
        setTable( currData=>[...currData,{
            courseName:course, earnedCredit:creditEarned, totalNoCredit:totalCredit,id:Math.random().toString()
        }] )
        console.log('course added')
        setCourse('')
        setCreditEarned('')
        setTotalCredit('')
    }
    const [sgpa,setSGPA] = useState('')
        return (
            <>
            <StatusBar style='light'/>
            <ImageBackground style={{height:'100%'}} source={require('../assets/bg2.png')}>
                <View style={{padding:40}}>
                    <Text style={styles.header}>Worried about not knowing how to calculate your Grade?</Text>
                    </View>
                    <View style={{padding:28,flexDirection:'row',  justifyContent:'space-around',alignItems:'center' }}>
                    <TextInput placeholderTextColor={'white'} keyboardType='text' onChangeText={(text)=> setCourse(text)} value={course} style={styles.textInput} placeholder='Course' /> 
                    <TextInput placeholderTextColor={'white'} keyboardType='numeric'onChangeText={(text)=> setCreditEarned(text)} value={creditEarned} style={styles.textInput} placeholder='Credit Earned' /> 
                    <TextInput placeholderTextColor={'white'}  keyboardType='numeric'onChangeText={(text)=>{ setTotalCredit(text);  } } value={totalCredit} style={styles.textInput} placeholder='Total Credit' /> 
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center'}}>
                    <View style={{width:'50%',alignItems:'flex-start',  }}>
                        <TouchableOpacity onPress={()=> addData() }>
                        <View style={styles.button}>
                        <Text style={{color:'white', textAlign:'center'}}>Add Course</Text>
                        </View>
                    </TouchableOpacity>
                        </View>
                     
                      
                        <View style={{width:'50%', alignItems:'flex-end',  }}>
                        <TouchableOpacity onPress={()=>{ 
                            let tempSum=0;
                        table.map(element=>{
                                    element.totalXearned=  
                                        element.earnedCredit * element.totalNoCredit ;
                                        element.sumofcurrCredit = tempSum + parseInt(element.totalNoCredit) ;
                                        tempSum = element.sumofcurrCredit;
                                })
                        let sum=0;
                        table.map(element=>{
                                    element.sumOfTotalCredit=  
                                        sum + element.totalXearned ;
                                        sum = element.sumOfTotalCredit;
                                })
                                console.log(table)
                                setSGPA(table[table.length-1 ].sumOfTotalCredit / table[table.length-1].sumofcurrCredit  ) 
                                 // console.log(table[table.length-1 ].sumOfTotalCredit / table[table.length-1].sumofcurrCredit )
                            }
                        }>
                                <View style={styles.button}>
                                    <Text style={{color:'white', textAlign:'center'}}>Calculate S.G.P.A</Text>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={{width:'100%', paddingHorizontal:22,}}>
                    <View style={{borderWidth:1,borderTopLeftRadius:10,borderTopRightRadius:10, 
                                    padding:10,backgroundColor:'#1F8A70', flexDirection:'row',justifyContent:'space-around',alignItems:'center' }} >
                                    <Text style={{color:'#FFFBF5'}}>Course</Text>
                                    <Text style={{color:'#FFFBF5'}}>Credit Earned</Text>
                                    <Text style={{color:'#FFFBF5'}}>Total Credit</Text>
                                </View>
                    
                    </View>
                    <FlatList data={table}
                    style={{paddingHorizontal:6}}
                        renderItem={(itemData)=>{
                            return  (
                                <>
                                <View style={{borderWidth:0.5, padding:10,
                                    marginHorizontal:16,backgroundColor:'#F7EFE5', flexDirection:'row',justifyContent:'space-around',alignItems:'center' }} >
                                    <Text style={{textAlign:'center', color:'#03001C',}}>{itemData.item.courseName}</Text>
                                    <Text style={{textAlign:'center', color:'#03001C'}}>{itemData.item.earnedCredit}</Text>
                                    <Text style={{textAlign:'center', color:'#03001C'}}>{itemData.item.totalNoCredit}</Text>
                                    </View>
                                </>
                            )
                        }}
                        keyExtractor= {(item,index) =>{
                            return item.id;
                        }}
                        />
                     
                    {
                        sgpa==''?<Text></Text> : <View style={{alignItems:'center',padding:10}}>
                        <Text style={{color:'white',fontSize:25,fontWeight:'700' }}>Your SGPA IS {sgpa}</Text> 
                    </View>
                    }
            </ImageBackground>
            
            </>
      );
}

const styles = StyleSheet.create({
 appContainer:{
     flex:1,
     backgroundColor:'white',
     justifyContent:'space-around',
     alignItems:'center'
     
 },  
 header:
    { color:'white',padding:15,borderWidth:0.8,borderColor:'white',textAlign:'center', borderRadius:20}
 ,
 button:{
    width:'100%', padding:12,margin:8, borderRadius:15, backgroundColor:'#F48484'
 },
 textInput:{borderWidth:1, backgroundColor:'#100800', padding:3,textAlign:'center', marginRight:10,width:'30%',fontSize:10,color:'white', borderRadius:5, borderColor:'teal'}
 
  
});