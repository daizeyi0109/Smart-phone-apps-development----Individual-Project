import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const Buttons = ({ onPress, text, size, theme }) => {

    const buttonStyles = [styles.buttonNumber];
    const textStyles = [styles.textNumber];

    if (size === "size") {
        buttonStyles.push(styles.buttonSize);
    }

    else if (theme === "operator") {
        buttonStyles.push(styles.buttonOperator);
        textStyles.push(styles.textOperator);

    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
        textStyles.push(styles.textAccent);

    } else if (theme === "sign") {
        buttonStyles.push(styles.buttonSign);
        textStyles.push(styles.textSign);
    }



    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};

const width = Dimensions.get("window").width;

const buttonWidth = width / 5;

const styles = StyleSheet.create({

    buttonNumber: {
        backgroundColor: "rgb(241,243,244)",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin: 5,
    },
    textNumber: {
        color: "rgb(40, 42, 53)",
        fontSize: 24,
    },

    buttonSize: {
        width: width / 3 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },

    buttonOperator: {
        backgroundColor: "rgb(83, 131, 236)",
    },
    textOperator: {
        color: "white",
    },

    buttonAccent: {
        backgroundColor: "rgb(255,165,0)",
    },
    textAccent: {
        color: "rgb(40, 42, 53)",
    },



    buttonSign: {
        backgroundColor: "rgb(40, 42, 53)",
    },
    textSign: {
        color: "white",
    },


});

export default Buttons;
