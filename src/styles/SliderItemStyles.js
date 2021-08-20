import { StyleSheet } from "react-native";

const sliderItemStyles = StyleSheet.create({
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "#493d8a",
        textAlign: "center",
    },
    sliderImage: {
        resizeMode: "cover",
        justifyContent: "center",
    },
    flexViewHalf: { flex: 0.5 },
});

export default sliderItemStyles;
