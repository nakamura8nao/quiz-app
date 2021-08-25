import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const NextButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>次へ</Text>
    </TouchableOpacity>
  );
};

export default NextButton;