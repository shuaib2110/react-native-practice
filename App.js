import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
// import GoalInput from './components/GoalInput';
import Goalitem from './components/Goalitem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([]);


  function deleteItemHandler() {
    console.log("DELETE")
  }


  return (
    <View style={styles.container}>
      <GoalInput setCourseGoal={setCourseGoal} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoal} renderItem={(itemData) => {
          return <Goalitem text={itemData.item.text} onDeleteItem={deleteItemHandler} />
        }} alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.key
          }}
        />
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

  goalsContainer: {
    flex: 8,
  },



});
