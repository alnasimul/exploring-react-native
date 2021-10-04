import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button onPress={() => setCounter(counter + 1)} title="Increase"/>
            <Text style={styles.text}>Current Count: {counter} </Text>
            <Button onPress={() => setCounter(counter - 1)} title="Decrease"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'blue',
        marginVertical: 10
    }
});

export default CounterScreen;