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
    flexViewOneThird: { flex: 0.3 },
});

export default sliderItemStyles;
