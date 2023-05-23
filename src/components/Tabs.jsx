import React from "react";
import Main from "../screens/Main";
import Routines from "../screens/Routines";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Nutrition from "../screens/Nutrition";
import Evolution from "../screens/Evolution";

const Tab = createBottomTabNavigator();
export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'rgb(249, 74, 41)',
                tabBarInactiveTintColor: 'grey',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight:  'semibold',
                    fontSize: 25,
                    color: 'tomato'
                }
            }}
        >
            <Tab.Screen
                name={"Home"}
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name="home"
                            size={30}
                            color={focused ? "rgb(249, 74, 41)" : "black"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"Rutinas"}
                component={Routines}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="weight-lifter"
                            size={30}
                            color={focused ? "rgb(249, 74, 41)" : "black"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"Alimentación"}
                component={Nutrition}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="food-variant"
                            size={30}
                            color={focused ? "rgb(249, 74, 41)" : "black"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"Evolución"}
                component={Evolution}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="elevation-rise"
                            size={30}
                            color={focused ? "rgb(249, 74, 41)" : "black"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
