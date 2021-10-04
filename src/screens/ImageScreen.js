import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../compopnents/ImageDetail";
import mountain from "../../assets/mountain.jpg";
import forest from "../../assets/forest.jpg";
import beach from "../../assets/beach.jpg";

const ImageScreen = () => {
  const sites = [
    { name: "Montain", img: mountain },
    { name: "Forest", img: forest },
    { name: "Beach", img: beach },
  ];
  return (
    <View>
      {sites.map((site, index) => (
        <ImageDetail key={index} site={site} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
