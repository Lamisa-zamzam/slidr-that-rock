import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";

// StyleSheets
import globalStyles from "../../styles/globalStyles";
import sliderItemStyle from "../../styles/SliderItemStyles";

const SliderItem = ({ item }) => {
    // Extract styles from styleSheets
    const { container } = globalStyles,
        { title, sliderImage, flexViewOneThird } = sliderItemStyle;

    // Get window width and height
    const { width, height } = useWindowDimensions();

    // Generate a random index to choose from the images of the slide
    const generateRandomSlideIndex = (min, max) =>
        Math.round(Math.random() * (max - min) + min);

    // Get a random index for choosing an image
    const randomSlideIndex = generateRandomSlideIndex(
        item.images.length - 1,
        0
    );

    return (
        <View style={[container, { width, height }]}>
            {/* Slider Image */}
            <Image
                source={{ uri: item.images[randomSlideIndex] }}
                style={[sliderImage, flexViewOneThird, { width, height }]}
            />

            {/* Slider Title */}
            <View style={flexViewOneThird}>
                <Text style={title}>{item.title}</Text>
            </View>
        </View>
    );
};

export default SliderItem;
