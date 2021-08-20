import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";

import sliderItemStyle from "../../styles/SliderItemStyles";

import globalStyles from "../../styles/globalStyles";

const SliderItem = ({ item }) => {
    const { container } = globalStyles;
    const { width, height } = useWindowDimensions();

    const generateRandomSlideIndex = (min, max) =>
        Math.round(Math.random() * (max - min) + min);

    const randomSlideIndex = generateRandomSlideIndex(
        item.images.length - 1,
        0
    );

    const { title, sliderImage, flexViewOneThird } = sliderItemStyle;

    return (
        <View style={[container, { width, height }]}>
            <Image
                source={{ uri: item.images[randomSlideIndex] }}
                style={[sliderImage, { width, height }]}
            />

            <View style={flexViewOneThird}>
                <Text style={title}>{item.title}</Text>
            </View>
        </View>
    );
};

export default SliderItem;
