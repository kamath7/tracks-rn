import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'
const TrackForm = () => {
    return (
        <>
        <Spacer>
         <Input placeholder="Enter track name"/>
         </Spacer>
         <Button title="Start Recording"/>  
        </>
    )
}

export default TrackForm

const styles = StyleSheet.create({})
