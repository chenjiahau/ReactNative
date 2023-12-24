import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import globalStyle from '../../global-style';
import style from './style';

// UI
import Header from '../../UI/Header';
import ColorCard from '../../UI/ColorCard';

const ColorDetail = ({ route }) => {
  const navigation = useNavigation();
  const { category, color } = route?.params || {};

  const goBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    if (!color) {
      goBack();
    }
  }, [color]);

  return (
    <SafeAreaView style={globalStyle.screen}>
      <ScrollView style={style.container}>
        <View style={style.back}>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={style.backLabel}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ColorCard
            isSmallSize={false}
            itemWidth={'100%'}
            category={category}
            color={color}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ColorDetail;