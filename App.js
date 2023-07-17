import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DisplayJokes from './app/components/DisplayJokes';

export default function App() {
  return (
    <View style={styles.container}>
      <DisplayJokes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: {
    color: "white",
  }
});
