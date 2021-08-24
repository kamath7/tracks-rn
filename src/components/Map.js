import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Text} from 'react-native-elements'
import MapView from 'react-native-maps'
const Map = () => {
    return (
      <MapView style={styles.map} initialRegion={{
          latitude:12.9141,
          longitude:74.8560,
          latitudeDelta:0.01, //basically zoom levels
          longitudeDelta: 0.01
      }}/>
    )
}

export default Map

const styles = StyleSheet.create({
    map:{
        height:300
    }
})
