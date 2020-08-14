import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import OpenURLButton from './url';
import Card from '../shared/card';

const Standard10List = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    item: {
      //backgroundColor: "pink",
      color: 'white',
      marginTop: 3,
      padding: 0,
      fontSize: 18,
    },
    btn: {
      color: 'red',
    },
  });

  const unitName = navigation.getParam('lessonName');
  const materialLink = navigation.getParam('materialLink');
  const quizLink = navigation.getParam('quizLink');
  const youtubeLink = navigation.getParam('youtubeLink');

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.item}>{navigation.getParam("name")}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Card color="#eee">
          <Text style={styles.item}>{unitName}</Text>
        </Card> */}
        {/* <Text style={styles.item}>{unitName}</Text> */}
        <Card bgcolor="white">
          <Card bgcolor="#2b374f">
            <Text style={styles.item}>Youtube Videos</Text>
          </Card>
          {youtubeLink.map((item, index) => {
            return (
              <View key={index} style={styles.btn}>
                <OpenURLButton
                  url={item.youtubeLink}
                  clr={`#9aa3a8`}>{`${item.youtubeTopicName} `}</OpenURLButton>
              </View>
            );
          })}
        </Card>
        <Card bgcolor="white">
          <Card bgcolor="#2b374f">
            <Text style={styles.item}>Materials/PDFs</Text>
          </Card>
          {materialLink.map((item, index) => {
            return (
              <View key={index} style={styles.btn}>
                <OpenURLButton
                  url={item.materialLink}
                  clr={`#9aa3a8`}>{`${item.materialTopicName} `}</OpenURLButton>
              </View>
            );
          })}
        </Card>
        <Card bgcolor="white">
          <Card bgcolor="#2b374f">
            <Text style={styles.item}>Quiz</Text>
          </Card>
          {quizLink.map((item, index) => {
            return (
              <View key={index} style={styles.btn}>
                <OpenURLButton
                  url={item.quizLink}
                  clr={`#9aa3a8`}>{`${item.quizTopicName} `}</OpenURLButton>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
};

export default Standard10List;
