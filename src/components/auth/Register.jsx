import React, { useState } from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { TextInput } from "react-native";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View
            className={`m-auto w-full items-center justify-center mt-[${Constants.statusBarHeight}]`}
        >
            <Text className="m-auto w-1/2 text-center text-xl">
                Register to start using Fitness Center
            </Text>
            <TextInput
                className="border rounded-xl px-2 py-2 my-2 w-1/2"
                placeholder="Email"
                onChangeText={(input) => setEmail(input)}
            ></TextInput>
            <TextInput
                className="border rounded-xl px-2 py-2 my-2 w-1/2"
                placeholder="Password"
            ></TextInput>
        </View>
    );
}
