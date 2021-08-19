import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Slider from "./components/slider/Slider";

export default function App() {
    return (
        <View style={styles.container}>
            <Slider />
            <StatusBar style="auto" />
            <Image
                source={
                    "https://tse4.mm.bing.net/th?id=OIP.fOG8huu2ze1pUU0sEKUFPAAAAA&pid=Api&P=0&w=300&h=300"
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
