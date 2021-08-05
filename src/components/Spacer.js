//only to apply margin

import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = (props) => {
    return (
        <View style={styles.spacer}>
            {props.children}
        </View>
    )
}

export default Spacer

const styles = StyleSheet.create({
    spacer:{
        margin: 15
    }
})
