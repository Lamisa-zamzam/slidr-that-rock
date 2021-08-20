import React from "react";
import { View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";

// Components
import Slider from "../components/Slider/Slider";

// StyleSheets
import globalStyles from "../styles/globalStyles";

export default function App() {
    // Extract style from styleSheet
    const { container, brandName } = globalStyles;
    return (
        <>
            <Text style={brandName}>Slidr That Rock</Text>
            <View style={container}>
                <Slider />
                <StatusBar style="auto" />
            </View>
        </>
    );
}
