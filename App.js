import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.containerRow}>
        <View style={styles.row1}></View>
        <View style={styles.row2}></View>
        <View style={styles.row3}></View>
        <View style={styles.row4}></View>
      </View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box1:{
    flex: 1,
    backgroundColor: '#1FBCD3',
  },
  box2:{
    flex: 2,
    backgroundColor: '#F6B6CA',

  },
  containerRow:{
    flex: 3,
    flexDirection: 'row',
    gap: 10

  },
  box4:{
    flex: 2,
    backgroundColor: '#F7BFA8',

  },
  box5:{
    flex: 1,
    backgroundColor: '#CBE2B4',

  },
  row1:{
    flex: 1,
    backgroundColor: '#ACABAB',
  },
  row2:{
    flex: 2,
    backgroundColor: '#EEEEEE',

  },
  row3:{
    flex: 2,
    backgroundColor: '#E7C2BB',

  },
  row4:{
    flex: 1,
    backgroundColor: '#5F5F5F',
  },
});

