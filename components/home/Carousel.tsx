import { View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?mountain",
    "https://source.unsplash.com/1024x768/?forest",
  ];

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor="#FF6347"
        inactiveDotColor="#90A4AE"
        sliderBoxHeight={200}
        ImageComponentStyle={{ width: "90%", borderRadius: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    borderRadius: 10,
    width: "90%", // Ensure images take proper width
    marginTop: 10,
  },
});

export default Carousel;
