import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/* screens */
import StartScreen from '../screens/StartScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AnswerScreen from '../screens/AnswerScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Question" component={QuestionScreen} />
            <Stack.Screen name="Answer" component={AnswerScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigaotor = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
