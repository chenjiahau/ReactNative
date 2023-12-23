import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const Home = () => {
  return (
    <View style={style.container}>
      <Text style={style.label}>Favorite Color</Text>
    </View>
  );
}

export default Home;