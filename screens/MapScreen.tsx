import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {

const Stack= createStackNavigator();
const navigation=useNavigation();

  return (
    <View>
      <TouchableOpacity style={tw`absolute top-12 left-6 bg-gray-100 rounded-full p-3 z-50 shadow-lg`}
      onPress={()=>navigation.navigate('HomeScreen')}
      >
        <Icon name='menu' />
      </TouchableOpacity>
      
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
      <Stack.Navigator>
        <Stack.Screen
        name='NavigateCard'
        component={NavigateCard}
        options={{headerShown:false}}/>

        <Stack.Screen
        name='RideOptionsCard'
        component={RideOptionsCard}
        options={{headerShown:false}}/>
      </Stack.Navigator>
      
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})