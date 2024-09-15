import React from 'react';
import {StyleSheet, View, TextInput, Pressable, Text} from 'react-native';
import {CustomInputProps} from '../../models/components/customInputProps';
import {Colors} from '../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  name = 'search',
  showIcon,
  secureTextEntry,
  value,
  onChangeText,
  errorText,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {showIcon && (
        <Pressable
          style={styles.iconWrapper}
          onPress={() => navigation.goBack()}>
          <Feather size={22} color={Colors.Black} name={name} />
        </Pressable>
      )}
      <TextInput
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.Gray}
        placeholder={placeholder}
        style={[styles.input, !showIcon && {paddingLeft: 16}]}
      />
      <Text style={errorText ? styles.text : {display: 'none'}}>
        {errorText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Colors.White,
    borderWidth: 1.2,
    borderColor: Colors.LightGray,
    margin: 10,
    borderRadius: 14,
    padding: 24,
    paddingLeft: 40,
    width: '100%',
  },
  iconWrapper: {
    position: 'absolute',
    left: 0,
    padding: 10,
    zIndex: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Primary,
    position: 'absolute',
    bottom: -8,
    left: 5,
  },
});

export default CustomInput;
