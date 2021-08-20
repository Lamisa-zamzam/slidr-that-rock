import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, Animated, Text } from "react-native";

// import slides from "../../data/Slides.json";
import SliderItem from "../SliderItem/SliderItem";
import Paginator from "../Paginator/Paginator";
import ScrollButton from "../ScrollButton/ScrollButton";

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    const scrollX = useRef(new Animated.Value(0)).current;
    // const viewConfig = useRef({ viewAreaCoverageThreshold: 50 }).current;
    const slidesRef = useRef(null);
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const ScrollToNext = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log("END");
        }
    };

    const ScrollToPrevious = () => {
        if (currentIndex > 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
        } else {
            console.log("END");
        }
    };

    useEffect(() => {
        fetch("https://aqueous-gorge-11678.herokuapp.com/")
            .then((res) => res.json())
            .then((slides) => setSlides(slides));
    }, []);

    return (
        <>
            {slides[0] ? (
                <View style={styles.container}>
                    <View style={{ flex: 3 }}>
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
                            // viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                    </View>

                    <Paginator data={slides} scrollX={scrollX} />
                    <ScrollButton
                        slidesLength={slides.length}
                        currentIndex={currentIndex}
                        direction="next"
                        scrollToNext={ScrollToNext}
                        percentage={(currentIndex + 1) * (100 / slides.length)}
                    />
                    <ScrollButton
                        currentIndex={currentIndex}
                        direction="previous"
                        scrollToPrevious={ScrollToPrevious}
                        percentage={(currentIndex + 1) * (100 / slides.length)}
                    />
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
