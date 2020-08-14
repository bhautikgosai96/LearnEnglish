import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
//import {MaterialIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/FontAwesome5';
const Header = ({navigation, title}) => {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      color: 'white',
      letterSpacing: 1,
      marginLeft: 10,
      justifyContent: 'center',
    },
    icon: {
      position: 'absolute',
      left: 5,
    },
  });

  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      {/* <MaterialIcons
        name="menu"
        size={30}
        onPress={openMenu}
        style={styles.icon}
      /> */}
      {/* <Icon name="menu" onPress={openMenu} /> */}
      <TouchableOpacity onPress={openMenu}>
        {/*Donute Button Image */}
        <Image
          source={require('./baseline_menu_white_24.png')}
          style={{width: 25, height: 25, marginLeft: 0}}
        />
      </TouchableOpacity>
      {/* <MaterialIcons name="menu" onPress={openMenu}></MaterialIcons> */}
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
