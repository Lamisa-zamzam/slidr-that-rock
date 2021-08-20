import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

// SVG and icons
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

// StyleSheets
import globalStyles from "../../styles/globalStyles";
import scrollButtonStyles from "../../styles/ScrollButtonStyles";

const NextButton = ({
    direction,
    scrollToNext,
    scrollToPrevious,
    percentage,
    currentIndex,
    slidesLength,
}) => {
    // Extract style from styleSheets
    const { container } = globalStyles,
        { button } = scrollButtonStyles;

    // Declare constants for the Circle SVGs
    const size = 128,
        strokeWidth = 2,
        center = size / 2,
        radius = size / 2 - strokeWidth / 2,
        circumference = 2 * Math.PI * radius;

    // Refs
    const progressAnimation = useRef(new Animated.Value(0)).current,
        progressRef = useRef(null);

    // Handle the animation
    const handleAnimation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    // Trigger animation function call
    useEffect(() => {
        handleAnimation(percentage);
    }, [percentage]);

    // Set event listener to progress animation ref
    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                // Set what the stroke width will be
                const strokeDashoffset =
                    circumference - (circumference * value.value) / 100;

                // If progressRef is initiated, set the stroke
                if (progressRef?.current) {
                    progressRef.current.setNativeProps({
                        strokeDashoffset,
                    });
                }
            },
            [percentage]
        );

        // Do the cleanup -- on component unmount
        return () => {
            progressAnimation.removeAllListeners();
        };
    }, []);

    return (
        <View style={container}>
            <Svg width={size} height={size}>
                {/* Rotate the Circles to get the expected output */}
                <G rotation="-90" origin={center}>
                    {/* The gray circle */}
                    <Circle
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />

                    {/* The animated pink circle */}
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

            {/* The button to scroll the slider */}
            <TouchableOpacity
                // Function call depending on the direction
                onPress={direction === "next" ? scrollToNext : scrollToPrevious}
                style={button}
                activeOpacity={0.6}
                // disabled if no slides to move in the requested direction
                disabled={
                    direction === "next"
                        ? currentIndex >= slidesLength - 1
                        : currentIndex <= 0
                }
            >
                {/* Icon */}
                <AntDesign
                    // Icon depending on the direction
                    name={direction === "next" ? "arrowright" : "arrowleft"}
                    size={32}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
};

export default NextButton;
