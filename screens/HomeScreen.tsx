import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from 'twrnc';
import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {

  const dispatch = useDispatch()
//   const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
    
      <View style={tw`p-5`}>
        <Image
        style={{width: 100, height: 100, resizeMode: 'contain'}}
        source={
          {uri: 'https://links.papareact.com/gzs'}
          }></Image>
      
      <GooglePlacesAutocomplete
      styles={{
        container:{
          flex: 0,
        },
        textInput:{
          fontSize: 18,
        },
      }}
      onPress={(data, details=null)=> {
        dispatch(setOrigin({
          location: details.geometry.location,
          description: data.description,
        }))
        dispatch(setDestination(null))
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      placeholder='Where from?'
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      />
      <NavOptions/>
      <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })