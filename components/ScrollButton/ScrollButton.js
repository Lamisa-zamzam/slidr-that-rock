import React, { useRef, useEffect } from "react";
import {
    StyleSheet,
    Animated,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

const NextButton = ({
    direction,
    scrollToNext,
    scrollToPrevious,
    percentage,
    currentIndex,
    slidesLength,
}) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                const strokeDashoffset =
                    circumference - (circumference * value.value) / 100;
                if (progressRef?.current !== null) {
                    progressRef.current.setNativeProps({
                        strokeDashoffset,
                    });
                }
            },
            [percentage]
        );

        return () => {
            progressAnimation.removeAllListeners();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        ref={progressRef}
                        stroke="#F4338F"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>
            <TouchableOpacity
                onPress={direction === "next" ? scrollToNext : scrollToPrevious}
                style={styles.button}
                activeOpacity={0.6}
                disabled={
                    direction === "next"
                        ? currentIndex >= slidesLength - 1
                        : currentIndex <= 0
                }
            >
                <AntDesign
                    name={direction === "next" ? "arrowright" : "arrowleft"}
                    size={32}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
};

export default NextButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        position: "absolute",
        backgroundColor: "#f4338f",
        borderRadius: 100,
        padding: 20,
    },
});
