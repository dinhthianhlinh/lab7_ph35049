import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextInput_custom = props => {
  return (
    <View>
      <TextInput {...props} placeholderTextColor={'#176B87'} />
    </View>
  );
};

export default TextInput_custom;

const styles = StyleSheet.create({});
