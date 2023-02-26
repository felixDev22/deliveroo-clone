import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { homestyles } from '../styles/Home';
import { globalStyles } from '../styles/global';
import Down from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/Feather';
import MenuChange from 'react-native-vector-icons/AntDesign';
import Categories from '../components/Categories';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'DELIVEROO',
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={homestyles.top}>
        <View style={homestyles.home}>
          <Image
            source={require('../assets/profile.png')}
            style={globalStyles.profilePic}
          />
          <View style={homestyles.rightSide}>
            <Text style={homestyles.font1}>Deliver Now!</Text>
            <Text style={homestyles.font2}>
              Current Location
              <Down name="chevron-down" style={homestyles.down} />
            </Text>
          </View>
          <User name="user" style={homestyles.user} />
        </View>

        <View style={homestyles.inputSection}>
          <View style={homestyles.inputBox}>
            <SearchIcon name="search" />
            <TextInput
              placeholder="Pick restaurant"
              keyboardType="default"
              style={homestyles.input}
            />
          </View>
          <MenuChange name="menuunfold" style={homestyles.MenuChange} />
        </View>
      </View>

      <ScrollView>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
