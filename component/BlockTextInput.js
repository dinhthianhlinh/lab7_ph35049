import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextInput_custom from './TextInput_custom';

const BlockTextInput = ({
  title,
  placehoder,
  err,
  sec,
  img,
  onPress,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInput}>
        <TextInput_custom
          placeholder={placehoder}
          {...props}
          secureTextEntry={sec}
        />
        {img ? (
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../images/hide.png')} />
          </TouchableOpacity>
        ) : (
          ''
        )}
        {img == false ? (
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../images/view.png')} />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <Text style={styles.err}>{err}</Text>
    </View>
  );
};

export default BlockTextInput;

const styles = StyleSheet.create({
  title: {
    color: '#016A70',
    fontSize: 15,
    marginBottom: 3,
  },
  err: {
    color: 'red',
    fontSize: 14,
    marginBottom: 7,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#176B87',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 0,
    color: '#176B87',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
});
