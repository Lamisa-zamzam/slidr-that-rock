import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";

// Components
import Slider from "../components/Slider/Slider";

// StyleSheets
import globalStyles from "../styles/globalStyles";

export default function App() {
    const { container } = globalStyles;
    return (
        <View style={container}>
            <Slider />
            <StatusBar style="auto" />
        </View>
    );
}
