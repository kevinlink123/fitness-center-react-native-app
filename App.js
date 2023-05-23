import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./src/components/Tabs";
import StackNavigator from "./src/components/StackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}
