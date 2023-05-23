import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { View, Text } from "react-native";
import MainRoutines from "../components/routines/MainRoutines";
import NewRoutine from "../components/routines/NewRoutine";

const Stack = createNativeStackNavigator();
export default function Rutines() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainRutines" component={MainRoutines}/>
            <Stack.Screen name="NewRoutine" component={NewRoutine}/>
        </Stack.Navigator>
    );
}
