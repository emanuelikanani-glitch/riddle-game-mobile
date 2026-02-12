import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const riddles = [
  { question: "What has keys but can't open locks?", answer: "A piano", level: "easy" },
  { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "An echo", level: "medium" },
  { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps", level: "hard" }
];

const App = () => {
  const [currentRiddle, setCurrentRiddle] = useState({});
  const [hints, setHints] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load the first riddle on mount
    setCurrentRiddle(riddles[0]);
  }, []);

  const showHint = () => {
    if (hints < 3) {
      Alert.alert("Hint", "Try to think about what this could represent...");
      setHints(hints + 1);
    } else {
      Alert.alert("No more hints!", "You've used all your hints for this riddle.");
    }
  };

  const checkAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === currentRiddle.answer.toLowerCase()) {
      Alert.alert("Correct!", "Well done!");
      setProgress(progress + 1);
      // Load next riddle or finish
    } else {
      Alert.alert("Try Again", "That's not correct.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Riddle Game: Help Maya!`}</Text>
      <Text style={styles.riddle}>{currentRiddle.question}</Text>
      <Button title="Hint" onPress={showHint} />
      <Button title="Answer" onPress={() => checkAnswer("Your Answer Here")} />
      <Text style={styles.progress}>{`Progress: ${progress}/${riddles.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark theme
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
  },
  riddle: {
    fontSize: 18,
    color: '#ffffff',
    marginVertical: 20,
  },
  progress: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 20,
  },
});

export default App;