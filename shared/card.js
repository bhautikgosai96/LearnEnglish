import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props) => {
  const styles = StyleSheet.create({
    card: {
      //height: 50,
      borderRadius: 6,
      elevation: 1,
      borderWidth: 1,
      borderColor: props.color,
      backgroundColor: props.bgcolor,
      shadowOffset: {width: 1, height: 1},
      //shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
    },
    cardContent: {
      color: 'red',
      fontFamily: 'Poppins',
      fontSize: 17,
      marginHorizontal: 18,
      marginVertical: 10,
    },
  });
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;
