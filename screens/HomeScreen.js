import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headersTitle: 'DELIVEROO',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.home}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  home: {
    flex: 1,
    backgroundColor: '#680747',
    color: '#fff',
  },
});

export default HomeScreen;
