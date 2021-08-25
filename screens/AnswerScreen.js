import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import quizData from '../data/quiz';

export default function AnswerScreen(props) {
    const answer = useSelector(state => state.answer);
    const {answers} = answer;
    const {params} = props.route;

    return (
        <View style={styles.container}>
        <Text>正解：{quizData[params['q'] - 1]['answer' + quizData[params['q'] - 1]['correctAnswer']]}</Text>
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Question', {'q': params['q'] + 1});
            }}>
            <Text>次の問題</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
