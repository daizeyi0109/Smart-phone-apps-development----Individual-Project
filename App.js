import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import Button from "./Buttons/Buttons";

const App = () => {

  const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: "0",
  };

  const [state, setState] = useState(initialState);

  //  Test log function by using useEffect hooks
  useEffect(() => {
    console.log('--------------------------------------------------------')
    console.log('CurrentValue value changed:', state.currentValue);
    console.log('Operator value changed:', state.operator);
    console.log('Previous value changed:', state.previousValue);
    // handleEqual()
  }, [state]);

  // Handle the user input number
  const handleNumber = (value) => {
    operator = state.operator
    previousValue = state.previousValue
    currentValue = state.currentValue

    c_PreviousValue = parseFloat(previousValue)
    c_CurrentValue = parseFloat(currentValue)

    if (currentValue === "0" && operator === "+") {
      setState({
        currentValue: `${c_PreviousValue + value}`,
        operator: operator,
        previousValue: `${previousValue}`
      })
    } else if (currentValue === "0" && operator === "-") {
      setState({
        currentValue: `${c_PreviousValue - value}`,
        operator: operator,
        previousValue: `${previousValue}`
      })
    } else if (currentValue === "0" && operator === "*") {
      setState({
        currentValue: `${c_PreviousValue * value}`,
        operator: operator,
        previousValue: `${previousValue}`
      })
    } else if (currentValue === "0" && operator === "/") {
      setState({
        currentValue: `${c_PreviousValue / value}`,
        operator: operator,
        previousValue: `${previousValue}`
      })
    }
    else {
      setState({
        currentValue: `${currentValue}${value}`,
        operator: operator,
        previousValue: `${previousValue}`
      })

    }



  };

  // Handle the user input equal
  const handleEqual = (value) => {
    // console.log()
    console.log('Call handleEqual')
    const { currentValue, previousValue, operator } = state;
    console.log(state)
    const current = parseFloat(currentValue);
    // console.log(current)
    const previous = parseFloat(previousValue);
    // console.log(previous)
    return {
      currentValue: `${current}`,
      operator: null,
      previousValue: null
    };;

  };


  // Handle the user input button type
  const handleCalculator = (type, value) => {
    switch (type) {
      case "number":
        handleNumber(value);

        break;
      case "clear":
        setState(initialState);
        break;
      case "posneg":
        setState({
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        });
        break;
      case "percentage":
        setState({
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        });
        console.log(state.currentValue)
        break;

      case "operator":
        setState({
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        });
        break;

      case "equal":
        setState(handleEqual());
        break;

      default:
        break;
    }
  }



  // ----------------------------------------------------------------


  const onSignPressed = () => {
    Alert.alert("Finish by Dai Zeyi")
  }




  return (
    <>

      <View style={styles.container}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>COMP7506</Text>
        </View>

        <SafeAreaView style={{ borderColor: 'blue' }}>
          <Text style={styles.value}>
            {parseFloat(state.currentValue).toLocaleString()}
          </Text>

          <View style={styles.rowContainer}>
            <Button
              text="C"
              theme="accent"
              onPress={() => handleCalculator("clear")}
            />

            <Button
              text="+/-"
              theme="operator"
              onPress={() => handleCalculator("posneg")}
            />

            <Button
              text="%"
              theme="operator"
              onPress={() => handleCalculator("percentage")}
            />

            <Button
              text="/"
              theme="operator"
              onPress={() => handleCalculator("operator", "/")}
            />
          </View>

          <View style={styles.rowContainer}>
            <Button text="7" onPress={() => handleCalculator("number", 7)} />
            <Button text="8" onPress={() => handleCalculator("number", 8)} />
            <Button text="9" onPress={() => handleCalculator("number", 9)} />
            <Button
              text="x"
              theme="operator"
              onPress={() => handleCalculator("operator", "*")}
            />
          </View>

          <View style={styles.rowContainer}>
            <Button text="4" onPress={() => handleCalculator("number", 4)} />
            <Button text="5" onPress={() => handleCalculator("number", 5)} />
            <Button text="6" onPress={() => handleCalculator("number", 6)} />
            <Button
              text="-"
              theme="operator"
              onPress={() => handleCalculator("operator", "-")}
            />
          </View>

          <View style={styles.rowContainer}>
            <Button text="1" onPress={() => handleCalculator("number", 1)} />
            <Button text="2" onPress={() => handleCalculator("number", 2)} />
            <Button text="3" onPress={() => handleCalculator("number", 3)} />
            <Button
              text="+"
              theme="operator"
              onPress={() => handleCalculator("operator", "+")}
            />
          </View>

          <View style={styles.rowContainer}>
            <Button text="0" onPress={() => handleCalculator("number", 0)} />
            <Button text="." onPress={() => handleCalculator("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => handleCalculator("equal", "=")}
            />
            <Button
              text="Sign"
              theme="sign"
              onPress={onSignPressed}
            />

          </View>
        </SafeAreaView>
      </View >
    </>
  );
};

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  rowContainer: {
    flexDirection: "row",
  },
  value: {
    color: "rgb(40, 42, 53)",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },

  logo: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    height: 100,
    width: 200,
    fontSize: 20,
    textAlign: 'center',


  }
});

export default App;
