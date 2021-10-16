import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
    const {textStyling, ViewStyling} = styles;

    return (
        <View style={ViewStyling} >
            <Text style={textStyling} >{props.title} </Text>
            
        </View> 
    );
};

    const styles = {
        textStyling: {
            fontSize :22,
            

        },
        ViewStyling: {
            backgroundColor: "gainsboro",
            height: 60,
            justifyContent: 'center',
            alignItems:'center',
            paddingTop: 15

        },
    };



export default Header;
