import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native';
import Card from '../shared/card';

const OpenURLButton = ({url, children, clr}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    item: {
      backgroundColor: 'pink',
      marginTop: 10,
      padding: 20,
      fontSize: 20,
      marginBottom: 10,
    },
    btn: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'Poppins',
      fontWeight: 'bold',
    },
  });

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Card color={clr} bgcolor="white">
        <Text style={styles.btn}>{children}</Text>
      </Card>
    </TouchableOpacity>
  );
  //return <Button color={clr} title={children} onPress={handlePress} />;
};

export default OpenURLButton;
