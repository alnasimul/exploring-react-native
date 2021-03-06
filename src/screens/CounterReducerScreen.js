import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }

    switch(action.type){
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
           return (state.count <= 0) ? state : { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}
const CounterReducerScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ type: 'increment', payload: 1 })}/>
            <Text style={styles.text}>Current Count: {state.count}</Text>
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrement', payload: 1})}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 5
    }
})

export default CounterReducerScreen;