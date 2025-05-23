import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [goalText, setGoalText] = useState("")
  const [courseGoal, setCourseGoal] = useState([])

  function onInputHandler(goalTextInput) {
    setGoalText(goalTextInput)
  }

  function addgoalhandler() {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      goalText,
    ])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.TextInput} placeholder='Add Your Goal!' onChangeText={onInputHandler} />
        <Button title='Tap Here!' onPress={addgoalhandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={true}>

          {courseGoal.map((goal) => (
            <View key={goal} style={styles.goalItem} >

              <Text style={styles.goalText} >{goal}</Text>

            </View>
          ))}
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    margin: 8,
  },
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
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",

  },
  goalText: {
    color: "#fff"
  }

});
