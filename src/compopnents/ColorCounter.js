import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    const styles = StyleSheet.create({
        text: {
            textAlign: 'center',
            fontSize: 15,
            color: color.toLowerCase()
        }
    })
    return (
       <View>
           <Text style={styles.text}>{color}</Text>
           <Button onPress={() => onIncrease()} color={color.toLowerCase()} title={`Increase ${color}`}/>
           <Button onPress={() => onDecrease()} color={color.toLowerCase()} title={`Decrease ${color}`}/>
       </View>
    );
};

export default ColorCounter;