import React from 'react'
import { StyleSheet,  View } from 'react-native'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>Track Create Screen</Text>
            <Map/>
        </SafeAreaView>
    )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
