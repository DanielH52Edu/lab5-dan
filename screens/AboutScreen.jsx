import React from "react";
import MainLayout from "../layouts/MainLayout";
import {Button, Text} from "react-native";

export function AboutScreen({ navigation }) {

    return (
        <MainLayout>
            <Text>App Name: Lab5-Dan</Text>
            <Text>Current Date: { new Date().toLocaleDateString('en-US') }</Text>
            <Button
                title="Go Back Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    );
}
