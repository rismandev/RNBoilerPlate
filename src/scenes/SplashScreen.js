import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// Icons
import MdIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = () => {
  return (
    <View style={styles.Container}>
      <MdIcon name="react" size={80} color="skyblue" />
      <Text style={styles.Text}>React Native</Text>
      <Text>Boiler Platinum</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  Text: {fontFamily: 'Ionicons', fontSize: 30},
});
