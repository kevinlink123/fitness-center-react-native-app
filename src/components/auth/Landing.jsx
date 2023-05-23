import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import Constants from 'expo-constants';
import { StatusBar } from "react-native";

export default function Landing({ navigation }) {
    return (
        <View className={`landing-screen-container mt-[${Constants.statusBarHeight}]`}>
            <Text>Landing Screen</Text>
            <Button title="Register" onPress={() => { navigation.navigate("Register") }} />
            <Button title="Login" onPress={() => { navigation.navigate("Login") }}/>
        </View>
    );
}
