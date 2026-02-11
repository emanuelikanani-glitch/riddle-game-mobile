import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RiddleScreen = ({ riddle, hint, onHintRequest }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.riddleText}>{riddle}</Text>
            <Button title='Show Hint' onPress={onHintRequest} />
            {hint && <Text style={styles.hintText}>{hint}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    riddleText: {
        fontSize: 24,
        marginBottom: 20,
    },
    hintText: {
        fontSize: 18,
        marginTop: 20,
        color: 'gray',
    },
});

export default RiddleScreen;