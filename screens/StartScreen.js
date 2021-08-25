import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearAnswer } from '../store/actions/answer'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });  

export default function StartScreen(props) {
  const dispatch = useDispatch();
  dispatch((clearAnswer()));
  return (
    <View style={styles.container}>
      <Text>エンジニアがよく出会う英語クイズ！</Text>
      <TouchableOpacity
        onPress={() => {
            props.navigation.navigate('Question');
          }}>
        <Text>はじめる</Text>
      </TouchableOpacity>
    </View>
  );
}

