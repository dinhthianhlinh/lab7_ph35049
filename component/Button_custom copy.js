import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button_custom = ({title, onPress, ...props}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        {...props}
        style={[props.styles, styles.btn]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button_custom;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FE7A36',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
  },
});
