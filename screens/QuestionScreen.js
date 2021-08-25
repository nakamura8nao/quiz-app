import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {addAnswer} from '../store/actions/answer';
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
  const dispatch = useDispatch();
  const {params} = props.route;

  return (
    <View style={styles.container}>
      <Text>{params['q']}問目！</Text>
      <Text>{quizData[params['q'] - 1]['question']}</Text>
      <Text>例文：{quizData[params['q'] - 1]['ex']}</Text>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer({answer: {'q': params['q'], a: 1}} )));
            props.navigation.navigate('Answer', {'q': params['q']});
          }}>
        <Text>{quizData[params['q'] - 1]['answer1']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer({answer: {'q': params['q'], a: 2}} )));
            props.navigation.navigate('Answer', {'q': params['q']});
          }}>
        <Text>{quizData[params['q'] - 1]['answer2']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            dispatch((addAnswer({answer: {'q': params['q'], a: 3}} )));
            props.navigation.navigate('Answer', {'q': params['q']});
          }}>
        <Text>{quizData[params['q'] - 1]['answer3']}</Text>
      </TouchableOpacity>
    </View>
  );
}

