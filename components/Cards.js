import React from "react";
import { Image, View, Text, StyleSheet } from 'react-native';

const Cards = (props) => {

    return (
        <View style={[styles.item, {backgroundColor: props.color}]}>
        
            <View style={ styles.itemLeft}>
                <Text style={ styles.itemText }>{props.text}</Text>   
            </View>
            <Image source={props.image} style={styles.sectionImage}/>        
        </View>

    )
}

const styles = StyleSheet.create({
    item:{
        height: 180,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText:{
        fontSize: 20,
        fontFamily: 'Inter_500Medium',
        paddingLeft: 30
    },
    sectionImage:{
        width: 220,
        height: 220,
    },

});

export default Cards;