import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";

// StyleSheets
import globalStyles from "../../styles/globalStyles";
import sliderItemStyle from "../../styles/SliderItemStyles";

const SliderItem = ({ item }) => {
    // Extract styles from styleSheets
    const { container } = globalStyles,
        { title, sliderImage, flexViewHalf, sliderItem } = sliderItemStyle;

    // Get window width and height
    const { width } = useWindowDimensions();

    return (
        <View style={[container, sliderItem, { width }]}>
            {/* Slider Image */}
            <Image
                source={{
                    uri: item.images[
                        // Generate a random index to choose from the images of the slide
                        Math.round(Math.random() * (item.images.length - 1))
                    ],
                }}
                style={[sliderImage, { width }]}
            />

            {/* Slider Title */}
            <View style={flexViewHalf}>
                <Text style={title}>{item.title}</Text>
            </View>
        </View>
    );
};

export default SliderItem;
