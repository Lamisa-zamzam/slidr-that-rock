import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Animated, Text } from "react-native";

// Components
import SliderItem from "../SliderItem/SliderItem";
import Paginator from "../Paginator/Paginator";
import ScrollButton from "../ScrollButton/ScrollButton";

// StyleSheets
import sliderStyles from "../../styles/SliderStyles";
import globalStyles from "../../styles/globalStyles";

export default function Slider() {
    // Extract styles from the stylesheets
    const { container } = globalStyles,
        { flexView } = sliderStyles;

    // Initial states of slide index and slides
    const [currentIndex, setCurrentIndex] = useState(0),
        [slides, setSlides] = useState([]);

    // Refs
    const scrollX = useRef(new Animated.Value(0)).current,
        slidesRef = useRef(null),
        onViewableItemsChanged = useRef(({ viewableItems }) => {
            // If items change change the current index of the slides
            setCurrentIndex(viewableItems[0].index);
        }).current;

    // Function to move the slider to the next slide
    const ScrollToNext = () => {
        // If there are one or more slides left to go, increment the current index by 1
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    // Function to move the slider to the previous slide
    const ScrollToPrevious = () => {
        // If there are one or more slides left to go back, decrement the current index by 1
        if (currentIndex > 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
        }
    };

    // Fetch data from endpoint on server
    useEffect(() => {
        fetch("https://aqueous-gorge-11678.herokuapp.com/")
            .then((res) => res.json())
            .then((slides) => setSlides(slides));
    }, []);

    return (
        <>
            {/* Show the slider after the data is loaded from the server */}
            {slides[0] ? (
                <View style={container}>
                    <View style={flexView}>
                        {/* Slider */}
                        <FlatList
                            data={slides}
                            renderItem={({ item }) => (
                                <SliderItem
                                    key={item.id.toString()}
                                    item={item}
                                />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: { x: scrollX },
                                        },
                                    },
                                ],
                                {
                                    useNativeDriver: false,
                                }
                            )}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={onViewableItemsChanged}
                            ref={slidesRef}
                        />
                    </View>

                    {/* Paginator with dots */}
                    <Paginator data={slides} scrollX={scrollX} />

                    {/* Scroll to next button */}
                    <ScrollButton
                        slidesLength={slides.length}
                        currentIndex={currentIndex}
                        direction="next"
                        scrollToNext={ScrollToNext}
                        percentage={(currentIndex + 1) * (100 / slides.length)}
                    />

                    {/* Scroll to previous button */}
                    <ScrollButton
                        currentIndex={currentIndex}
                        direction="previous"
                        scrollToPrevious={ScrollToPrevious}
                        percentage={(currentIndex + 1) * (100 / slides.length)}
                    />
                </View>
            ) : (
                // Show when the data loads from the server
                <Text>Loading...</Text>
            )}
        </>
    );
}
