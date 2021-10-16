import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    const {ButtonStyle, textStyle}= Styles
    return (
    <TouchableOpacity onPress ={props.buttonpress}
     style={ButtonStyle} >
    <Text style={textStyle} > Siteye Git </Text>
    </TouchableOpacity>
    );
}

const Styles ={
    ButtonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:'gainsboro',
        borderWidth:1,
        borderColor: 'white',
        marginLeft:7,
        marginRight: 7,
    },
    textStyle: {
        fontSize: 15,
        fontWeight:'500',
        paddingTop:6,
        paddingBottom:6,
        color: 'black'
    }
}

export default Button;