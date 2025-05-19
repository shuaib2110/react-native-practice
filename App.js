import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Add Your Goal!' />
        <Button title='Tap Here!'/>
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
   padding:50,
   gap:20
  },

});
