import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 50,fontWeight: 'bold',alignItems: 'center',justifyContent: 'center', backgroundColor : 'blue', textAlign : 'center', color : 'white'}}>
                Story Hub 
                </Text>

        
              <Image  source = {require('../assets/readinglogo.png')}
               style = {{marginTop: 20,width: 200,height: 200,marginLeft: 55}}/>

                <Text style={{fontSize: 40,fontWeight: 'bold',alignItems: 'center',justifyContent: 'center', backgroundColor : 'red', textAlign : 'center', color : 'white'}}>
                 READING SCREEN
                </Text>
            </View>
        )
    }
}