import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ImageDetail = ({site}) => {
    return (
      <View>
          <Text style={styles.textStyle} > {site.name} </Text>
          <Image  source={site.img} />
    </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
      fontSize: 25,
      marginBottom:10,
      color: "purple",
    },
  });

export default ImageDetail;