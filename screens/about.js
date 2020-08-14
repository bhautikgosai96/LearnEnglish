import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../shared/card';

const About = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 20,
      fontSize: 30,
      // alignItems: "center",
      // justifyContent: "center",
    },
    item: {
      // backgroundColor: "pink",
      // marginTop: 20,
      // padding: 30,
      fontFamily: 'Poppins',
      fontSize: 20,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card bgcolor="white">
          <Text style={styles.item}>
            Hello Students,
            {'\n'} {'\n'}I am an English teacher of P. P. Savani Vidhabhavan,
            Surat.I have been teaching an English in Std. 9th and 10th for the
            last 25 years.
            {'\n'}
            {'\n'}I have prepared a mobile application for the students of
            Gujarat. Through which you can watch video lectures of each unit.
            You will be able to download related material and evaluate yourself
            through quiz. For any dout or suggestion, you can contact me via
            gmail.
            {'\n'}
            {'\n'}Nitin Gosai
            {'\n'}Email : niting5969@gmail.com
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default About;
