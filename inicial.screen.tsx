import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { inicialstyle } from "./inicial.style.";




export const InicialScreen = () => (

    return {
        <SafeAreaView>
        <View style={inicialstyle.View}>
    <Card>
        <Card.Title title="Help Me" titleStyle={inicialstyle.CardTitle}></Card.Title>
        <Image source={require('img/inclusao.png')} />
        <Subheading>Instruções e informações de modo fácil e acessível à todos.</Subheading>
        <Card.Content>
            <Bottom mode="contained" onPress={() => console.log('Pressed')}>Login</Bottom>
            <Bottom>Cadastre-se</Bottom>
        </Card.Content>
    </Card>
    </View>
    </SafeAreaView>
     
)