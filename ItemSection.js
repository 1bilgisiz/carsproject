import React from "react";
import { View , Text} from "react-native";

const  ItemSection = props => {
    return <View  style={styles.viewStyles} >{props.children}</View>;
};
 
const styles = {
    viewStyles: {
        borderBottomWidth: 1,
        borderColor: "gainsboro",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 5
    }
};

export default ItemSection;
