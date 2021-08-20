import { StyleSheet } from "react-native";

const sliderItemStyles = StyleSheet.create({
    sliderItem: {
        height: 700,
    },
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
        flex: 0.5,
    },
    flexViewHalf: { flex: 0.5 },
});

export default sliderItemStyles;
