import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {addAnswer} from '../store/actions/answer';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });  

export default function QuestionScreen(props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>質問</Text>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer(1)));
            props.navigation.navigate('Answer');
          }}>
        <Text>答え1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer(2)));
            props.navigation.navigate('Answer');
          }}>
        <Text>答え2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer(3)));
            props.navigation.navigate('Answer');
          }}>
        <Text>答え3</Text>
      </TouchableOpacity>
    </View>
  );
}

