import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import quizData from '../data/quiz';
import { useDispatch } from 'react-redux';
import { addCorrect } from '../store/actions/answer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function AnswerScreen(props) {
    const dispatch = useDispatch();
    const {params} = props.route;
    let {result} = false;

    if (quizData[params['q'] - 1]['correctAnswer'] === params['a']) {
      result = true;
      dispatch((addCorrect()));
    }

    return (
        <View style={styles.container}>
          <Text>{result ? '正解！' : '残念！不正解！'}</Text>
          <Text>正解：{quizData[params['q'] - 1]['answer' + quizData[params['q'] - 1]['correctAnswer']]}</Text>
          <TouchableOpacity
              onPress={() => {
                  if (params['q'] < 5) {
                    props.navigation.navigate('Question', {'q': params['q'] + 1});
                  } else {
                    props.navigation.navigate('Result');
                  }
              }}>
              <Text>{params['q'] < 5 ? '次の問題' : '結果発表！'}</Text>
          </TouchableOpacity>
        </View>
    );
}
