import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Slider from "./components/slider/Slider";

import globalStyles from "./styles/globalStyles";

export default function App() {
    const { container } = globalStyles;
    return (
        <View style={container}>
            <Slider />
            <StatusBar style="auto" />
        </View>
    );
}
