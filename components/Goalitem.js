import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Goalitem = (props) => {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem} >
                <Text style={styles.goalText} >{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default Goalitem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",

    },
    goalText: {
        color: "#fff"
    }
})