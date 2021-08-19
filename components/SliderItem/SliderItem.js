import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions,
} from "react-native";

const url =
    "https://tse3.mm.bing.net/th?id=OIP.Pz41etqzp1j7tlMIA-zJ0gAAAA&pid=Api&P=0&w=300&h=300";

const SliderItem = ({ item }) => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image
                source={{ uri: item.images[0] }}
                style={{
                    width,
                    height,
                    flex: 0.3,
                    resizeMode: "cover",
                    justifyContent: "center",
                }}
            />

            {/* <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
            </View> */}
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
