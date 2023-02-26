import { ScrollView, Text } from 'react-native';
import React from 'react';
import { categoryStyles } from '../styles/category';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizonatalScrollIndicator={false}
      style={categoryStyles.wrapper}>
      <CategoryCard title="food 1" />
      <CategoryCard title="food 2" />
      <CategoryCard title="food 3" />
      <CategoryCard title="food 4" />
      <CategoryCard title="food 5" />
      <CategoryCard title="food 6" />
    </ScrollView>
  );
};

export default Categories;
