import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ResultScreen(props) {
    const state = useSelector(state => state.answer);
    return (
        <View style={styles.container}>
          <Text>5問中、{state['correctCount']}問正解！</Text>
          <TouchableOpacity
              onPress={() => {
                  props.navigation.navigate('Start');
              }}>
              <Text>もう一度やる！</Text>
          </TouchableOpacity>
        </View>
    );
}
