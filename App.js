import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [riddle, setRiddle] = React.useState('What has keys but can't open locks?');
  const [answer, setAnswer] = React.useState('');

  const checkAnswer = () => {
    if (answer.toLowerCase() === 'piano') {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.riddle}>{riddle}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setAnswer}
        value={answer}
        placeholder="Your answer"
      />
      <Button title="Check Answer" onPress={checkAnswer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  riddle: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
});
