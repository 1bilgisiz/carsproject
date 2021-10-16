import React from "react";
import { View, Text, Image, Linking } from "react-native";

import Item from "./Item";
import ItemSection from "./ItemSection";
import Button from "./Button";


const CarDetail = ({ brand }) => {
    const{HeaderContainer, HeaderText, imageStyle}=styles;
    
     return (
         <Item>
             <ItemSection>
                 <View style={HeaderContainer} > 
                    <Text style={HeaderText} > {brand.brand} </Text>
                    <Text style={HeaderText} > {brand.model[0].name} </Text>
                </View>
            </ItemSection>
            <ItemSection>
              <Image style={imageStyle} source={{ uri: brand.model[0].image}}/>
            </ItemSection>
            <ItemSection>
                <Button buttonpress={() => {
                    Linking.openURL(brand.model[0].url);
                }}/>
            </ItemSection>
        </Item>
    );
};

const styles = {
    HeaderContainer :{
        flexDirection: "column",
        justifyContent:"space-between",
    },
    HeaderText:{
        fontSize: 14,
        fontWeight: "500",
        textTransform: "uppercase",
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0,
    }
};

export default CarDetail;




