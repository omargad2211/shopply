declare module "react-native-image-slider-box" {
  import { ImageStyle, ViewStyle } from "react-native";
  import React from "react";

  interface SliderBoxProps {
    images: string[];
    sliderBoxHeight?: number;
    parentWidth?: number;
    dotColor?: string;
    inactiveDotColor?: string;
    circleLoop?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    resizeMethod?: "auto" | "resize" | "scale";
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
    paginationBoxStyle?: ViewStyle;
    dotStyle?: ViewStyle;
    imageLoadingColor?: string;
    ImageComponentStyle?: ImageStyle;
    ImageComponent?: React.ComponentType<any>;
  }

  export class SliderBox extends React.Component<SliderBoxProps, any> {}
}
