import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginstyle } from "./login.style.";




export const InicialScreen = () => (

    return {
        <SafeAreaView>
        <View style={width=80%;}>
    <Card>
        <Card.Content>
        <TextInput label="Email" keyboardType="email-address"> </TextInput>
    <TextInput label="Senha" secureTextEntry=true> </TextInput>
    <Button uppercase={false} style={margin:2;}>Esqueci a senha</Button>
            <Button mode="contained" onPress={() => console.log('Pressed')}>Login</Button>
            
        </Card.Content>
 </Card>
    </View>
    </SafeAreaView>
     
)