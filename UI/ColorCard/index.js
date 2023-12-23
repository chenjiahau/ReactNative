import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const ColorCard = ({ itemWidth, category, item }) => {
  return (
    <View style={style.container}>
      <View style={{ ...style.colorContainer, width: itemWidth }}>
        <View style={{ ...style.color1, backgroundColor: item.colors[0] }}></View>
        <View style={{ ...style.color2, backgroundColor: item.colors[1] }}></View>
        <View style={{ ...style.color3, backgroundColor: item.colors[2] }}></View>
        <View style={{ ...style.color4, backgroundColor: item.colors[3] }}></View>
      </View>
      {
        category?.name === 'All' && <Text style={style.label}>{item.parentName}</Text>
      }
    </View>
  );
}

export default ColorCard;