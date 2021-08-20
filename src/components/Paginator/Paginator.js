import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";

// StyleSheets
import paginatorStyles from "../../styles/PaginatorStyles";

const Paginator = ({ data, scrollX }) => {
    // Extract styles from styleSheets
    const { paginatorView, dot } = paginatorStyles;

    // Get the width of the window
    const { width } = useWindowDimensions();

    return (
        <View style={paginatorView}>
            {data.map((_, i) => {
                // Set constants for the style of the dots
                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width,
                ];

                // Width style
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: "clamp",
                });

                // Opacity style
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp",
                });

                return (
                    <Animated.View
                        style={[dot, { width: dotWidth, opacity }]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;
