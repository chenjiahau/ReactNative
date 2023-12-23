import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const Title = ({ text }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{text}</Text>
    </View>
  );
}

export default Title;