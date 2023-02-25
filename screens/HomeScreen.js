import { Text, SafeAreaView, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { homestyles } from '../styles/Home';
import { globalStyles } from '../styles/global';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'DELIVEROO',
    });
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={homestyles.home}>
        <Image
          source={require('../assets/profile.png')}
          style={globalStyles.profilePic}
        />
        <View>
          <Text style={homestyles.font1}>Deliver Now!</Text>
          <Text style={homestyles.font2}>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
