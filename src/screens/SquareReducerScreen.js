import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../compopnents/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch (action.colorTochange) {
    case "red":
     return (state.red + action.amount > 255 || state.red + action.amount < 0 ) ? state : { ...state, red: state.red + action.amount };
    case "green":
      return  (state.green + action.amount > 255 || state.green + action.amount < 0 ) ? state :  { ...state, green: state.green + action.amount };
    case "blue":
       return (state.blue + action.amount > 255 || state.blue + action.amount < 0 ) ? state : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state);
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorTochange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorTochange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorTochange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorTochange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorTochange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorTochange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />

      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          marginVertical: 50,
          marginLeft: 105,
        }}
      />
    </View>
  );
};

export default SquareReducerScreen;
