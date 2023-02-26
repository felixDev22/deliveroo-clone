import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { categoryStyles } from '../styles/category';

const CategoryCard = ({ title }) => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../assets/food1.jpg')}
        style={categoryStyles.topImage}
      />
      <Text style={categoryStyles.topText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
