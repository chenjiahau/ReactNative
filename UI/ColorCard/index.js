import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const ColorCard = ({ itemWidth, category, color, isSmallSize = true }) => {
  const sizeStyle = isSmallSize ? style.smallSize : style.largeSize;

  return (
    <View style={style.container}>
      <View style={{ ...style.colorContainer, width: itemWidth }}>
        <View style={{ ...sizeStyle.color1, backgroundColor: color.colors[0] }}>
          {
            !isSmallSize && (
              <View style={sizeStyle.colorLabelContainer}>
                <Text style={sizeStyle.colorLabel}>{color.colors[0]}</Text>
              </View>
            )
          }
        </View>
        <View style={{ ...sizeStyle.color2, backgroundColor: color.colors[1] }}>
          {
            !isSmallSize && (
              <View style={sizeStyle.colorLabelContainer}>
                <Text style={sizeStyle.colorLabel}>{color.colors[1]}</Text>
              </View>
            )
          }
        </View>
        <View style={{ ...sizeStyle.color3, backgroundColor: color.colors[2] }}>
          {
            !isSmallSize && (
              <View style={sizeStyle.colorLabelContainer}>
                <Text style={sizeStyle.colorLabel}>{color.colors[2]}</Text>
              </View>
            )
          }
        </View>
        <View style={{ ...sizeStyle.color4, backgroundColor: color.colors[3] }}>
          {
            !isSmallSize && (
              <View style={sizeStyle.colorLabelContainer}>
                <Text style={sizeStyle.colorLabel}>{color.colors[3]}</Text>
              </View>
            )
          }
        </View>
      </View>
      {
        isSmallSize ? (
          <>
            {category?.name === 'All' && <Text style={sizeStyle.label}>{color.parentName}</Text>}
          </>
        ) : (
          <>
            <Text style={sizeStyle.label}>{color.parentName}</Text>
          </>
        )

      }
    </View>
  );
}

export default ColorCard;