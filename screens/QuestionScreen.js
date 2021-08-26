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
    question: {
      margin: 10,
    },
    choice: {
      margin: 20,
    }
  });  

export default function QuestionScreen(props) {
  const {params} = props.route;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{params['q']}問目！</Text>
      <Text style={styles.question}>{quizData[params['q'] - 1]['question']}</Text>
      <Text style={styles.question}>例文：{quizData[params['q'] - 1]['ex']}</Text>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 1});
          }}>
        <Text style={styles.choice}>{quizData[params['q'] - 1]['answer1']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 2});
          }}>
        <Text style={styles.choice}>{quizData[params['q'] - 1]['answer2']}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Answer', {'q': params['q'], a: 3});
          }}>
        <Text style={styles.choice}>{quizData[params['q'] - 1]['answer3']}</Text>
      </TouchableOpacity>
    </View>
  );
}

