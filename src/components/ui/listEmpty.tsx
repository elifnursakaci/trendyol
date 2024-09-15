import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import CustomButton from '../products/customButton';
import {height} from '../../utils/constants';
import { ListEmptyComponentProps } from '../../models/components/listEmpty';

const ListEmpty: React.FC<ListEmptyComponentProps> = ({
  icon,
  title,
  btnTitle,
  description,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 5}}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.button}>
        <CustomButton
          title={btnTitle}
          onPress={onPress}
          bg={Colors.Primary}
          text={Colors.White}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 250,
  },
  icon: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 25,
    marginHorizontal: 150,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.Black,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.Gray,
    marginVertical: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 15,
  },
});

export default ListEmpty;
