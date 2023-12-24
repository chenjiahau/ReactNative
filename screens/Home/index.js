import React, { useState, useEffect } from 'react';
import {
  Text, View, ScrollView, TouchableOpacity, FlatList, Pressable,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import globalStyle from '../../global-style';
import style from './style';

// Data
import categories from '../../data/categories';
import colors from '../../data/colors';

// UI
import Header from '../../UI/Header';
import Title from '../../UI/Title';
import ColorCard from '../../UI/ColorCard';

const Home = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const colorCardWidth = (Dimensions.get('window').width - 32 - 16) / 3;

  const getSelectedCategoryStyle = (selectedCategory, category) => {
    if (selectedCategory?.id === category?.id) {
      return {
        ...style.selectedCategory,
        borderBottomColor: category.color,
      }
    }

    return null;
  }

  const changeCategory = (category) => {
    setSelectedCategory(category);

    if (category?.id === 0) {
      setSelectedColors(colors.map((color, index) => ({ id: index, ...color })));
    } else {
      const updatedColors = colors.filter(color => color.categoryId === category.id);
      setSelectedColors(updatedColors.map((color, index) => ({ id: index, ...color })));
    }
  }

  useEffect(() => {
    setSelectedCategory(categories[0]);
    setSelectedColors(colors.map((color, index) => ({ id: index, ...color })));
  }, []);

  return (
    <SafeAreaView style={globalStyle.screen}>
      <View style={style.container}>
        <Header />
        <View style={style.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <View
                style={{ ...style.categoryLabelView, ...getSelectedCategoryStyle(selectedCategory, item) }}
              >
                <TouchableOpacity
                  onPress={() => changeCategory(item)}
                >
                  <Text
                    style={{
                      ...style.categoryLabel,
                      color: item.color,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <View style={style.categoriesContainer}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ height: 48, alignItems: 'center', justifyContent: 'center' }}
            showsHorizontalScrollIndicator={false}
          >
            {
              categories.map(category => (
                <View
                  key={category.id}
                  style={{ ...style.categoryLabelView, ...getSelectedCategoryStyle(selectedCategory, category) }}
                >
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={{
                        ...style.categoryLabel,
                        color: category.color,
                      }}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView >
        </View> */}
        {/* <View style={style.colorTitleContainer}>
          <Title text={selectedCategory?.name} />
        </View> */}
        <View style={style.colorContainer}>
          <FlatList
            data={selectedColors}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate('ColorDetail', { category: selectedCategory, color: item })}>
                <ColorCard itemWidth={colorCardWidth} category={selectedCategory} color={item} />
              </Pressable>
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View >
    </SafeAreaView>
  );
}

export default Home;