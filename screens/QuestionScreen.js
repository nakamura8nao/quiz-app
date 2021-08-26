import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import quizData from '../data/quiz';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });  

export default function QuestionScreen(props) {
  const {params} = props.route;

  return (
    <View style={styles.container}>
      <Text>{params['q']}問目！</Text>
      <Text>{quizData[params['q'] - 1]['question']}</Text>
      <Text>例文：{quizData[params['q'] - 1]['ex']}</Text>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 1});
          }}>
        <Text>{quizData[params['q'] - 1]['answer1']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 2});
          }}>
        <Text>{quizData[params['q'] - 1]['answer2']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 3});
          }}>
        <Text>{quizData[params['q'] - 1]['answer3']}</Text>
      </TouchableOpacity>
    </View>
  );
}

