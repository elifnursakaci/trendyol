import React from 'react';
import {Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
import { Colors } from '../../theme/colors';
import { CustomButtonProps } from '../../models/components/button';

const CustomButton: React.FC<CustomButtonProps> = ({title, bg, text, onPress, pending}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, bg ? {backgroundColor: bg} : styles.container]}>
      {pending ? (
        <ActivityIndicator size={"small"} color={Colors.White} />
      ) : (
        <Text style={[styles.text, text ? {color: text} : styles.text ]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.1,
    borderColor: Colors.Primary,
    padding: 13,
    paddingHorizontal: 25,
    borderRadius: 4
  },
  text:{
    color: Colors.Primary,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center"
  }
});

export default CustomButton;
