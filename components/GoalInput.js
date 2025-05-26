import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const GoalInput = (props) => {

    const [goalText, setGoalText] = useState("")

    function onInputHandler(goalTextInput) {
        setGoalText(goalTextInput)
    }

    function addgoalhandler() {
        props.setCourseGoal((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: goalText, key: Math.random().toString() },
        ])
    }
    return (
        <View style={styles.inputcontainer}>
            <TextInput style={styles.TextInput} placeholder='Add Your Goal!' onChangeText={onInputHandler} />
            <Button title='Tap Here!' onPress={addgoalhandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc'
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
})
