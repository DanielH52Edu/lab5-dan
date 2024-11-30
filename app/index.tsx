import React from "react";
import {HomeScreen} from "@/screens/HomeScreen";
import {AboutScreen} from "@/screens/AboutScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Index() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}
