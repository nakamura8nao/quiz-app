import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function AnswerScreen(props) {
    const answer = useSelector(state => state.answer);
    const {answers} = answer;
    return (
        <View style={styles.container}>
        <Text>答え!</Text>
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Question');
            }}>
            <Text>{answers}</Text>
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
