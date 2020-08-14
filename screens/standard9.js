import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Card from '../shared/card';
import firebaseDB from '../firebase';

const Standard9 = ({navigation}) => {
  const [unitList, setUnitList] = useState([
    {unitName: 'Unit-2', name: 'One', id: 1},
    {unitName: 'Unit-2', name: 'Two', id: 2},
    {unitName: 'Unit-3', name: 'Three', id: 3},
    {unitName: 'Unit-4', name: 'Four', id: 4},
    {unitName: 'Unit-5', name: 'Five', id: 5},
    {unitName: 'Unit-6', name: '', id: 6},
    {unitName: 'Unit-7', name: '', id: 7},
    {unitName: 'Unit-8', name: '', id: 8},
    {unitName: 'Unit-9', name: '', id: 9},
    {unitName: 'Unit-11', name: '', id: 10},
  ]);

  const [list, setlist] = useState([]);

  useEffect(() => {
    firebaseDB.child('standard/').on('value', (snapshot) => {
      let arr = [];
      let lst;
      if (snapshot.val() != null) {
        lst = snapshot.val();

        Object.keys(lst).map((id) => {
          if (lst[id]['standard'] == '9') {
            arr.push(lst[id]);
          }
        });
        setlist(arr);
      }
    });
  }, []);

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
      //marginTop: 20,
      //padding: 30,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {Object.keys(list).map((id) => {
          return (
            <View key={id}>
              <Text>{list[id].lessonName}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <ScrollView>
        {list.map((id) => {
          return (
            <View key={id}>
              <Text>
                {id.id}
                {id.lessonName}
              </Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <FlatList
        data={list}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.lessonName}</Text>;
        }}
      /> */}
      <FlatList
        data={list}
        keyExtractor={(item) => item.lessonName}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Standard9List', item);
              }}>
              <Card bgcolor="white">
                <Text style={styles.item}>{item.lessonName}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Standard9;
