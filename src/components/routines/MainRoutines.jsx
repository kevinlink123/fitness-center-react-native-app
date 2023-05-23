import React from "react";
import { View, Text, Button } from "react-native";

export default function MainRutines({ navigation }) {
    return (
        <View className="rutines-screen-container w-full items-center justify-center">
            <View>
                <Text className="text-xl text-center my-3 px-10">
                    No hay ninguna rutina de ejercicios creada, crea una nueva
                    clickeando en el boton de abajo!
                </Text>
            </View>
            <Button onPress={() => { navigation.navigate('NewRoutine') }} className="m-auto" title="Crear Rutina" color={"#30E3DF"} />
        </View>
    );
}
