import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Linking,
  Button,
  ScrollView,
} from 'react-native';
import OpenURLButton from './url';
import Card from '../shared/card';

const Standard9List = ({navigation}) => {
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
      margin: 3,
      padding: 0,
      fontSize: 18,
    },
    btn: {
      marginTop: 0,
    },
    card: {
      backgroundColor: 'blue',
    },
  });
  const unitName = navigation.getParam('lessonName');
  const materialLink = navigation.getParam('materialLink');
  const quizLink = navigation.getParam('quizLink');
  const youtubeLink = navigation.getParam('youtubeLink');

  // const OpenURLButton = ({ url, children }) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return <Button style={styles.btn} title={children} onPress={handlePress} />;
  // };popins

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Card color="#eee">
          <Text style={styles.item}>{unitName}</Text>9aa3a8  e7e7e7  fadb67
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

export default Standard9List;
