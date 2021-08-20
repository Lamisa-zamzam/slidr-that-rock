import React from "react";
import { View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";

// Components
import Slider from "../components/Slider/Slider";

// StyleSheets
import globalStyles from "../styles/globalStyles";

export default function App() {
    // Extract style from styleSheet
    const { container } = globalStyles;
    return (
        <>
            <Text
                style={{
                    marginTop: 20,
                    paddingVertical: 30,
                    paddingHorizontal: 10,
                    color: "#f4338f",
                    fontSize: 20,

                }}
            >
                Slidr That Rock
            </Text>
            <View style={container}>
                <Slider />
                <StatusBar style="auto" />
            </View>
        </>
    );
}
