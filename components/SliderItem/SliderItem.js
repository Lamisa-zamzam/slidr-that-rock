import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
} from "react-native";

const SliderItem = ({ item }) => {
    const { width, height } = useWindowDimensions();

    const generateRandomSlideIndex = (min, max) =>
        Math.round(Math.random() * (max - min) + min);

    const randomSlideIndex = generateRandomSlideIndex(
        item.images.length - 1,
        0
    );

    return (
        <View style={[styles.container, { width, height }]}>
            <Image
                source={{ uri: item.images[randomSlideIndex] }}
                style={{
                    width,
                    height,
                    flex: 0.3,
                    resizeMode: "cover",
                    justifyContent: "center",
                }}
            />

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );
};

export default SliderItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "#493d8a",
        textAlign: "center",
    },
});
