import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.textStyle}>Hey Sadaf you are damn cool !</Text>
        </View>
    );
};

const styles =StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'purple'
    }
})

export default ComponentsScreen;
