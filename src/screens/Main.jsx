import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { useState } from "react";
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";

export default function Main() {
    const [calories, setCalories] = useState(0);
    const [input, setInput] = useState(0);

    function onChangeInput(text) {
        const newFormatedInput = text.replace(/[^0-9]/g, "");
        setInput(newFormatedInput);
    }

    return (
        <View className='app-container m-auto flex justify-between h-full w-full bg-slate-100'>
            <View className={`main-content mt-[${Constants.statusBarHeight + 1}]`}>
                <Text>Main Content</Text>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}
