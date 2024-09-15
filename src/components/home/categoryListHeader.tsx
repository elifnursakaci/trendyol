import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme/colors';
import SearchSvg from '../svg/searchSvg';

const CategoryListHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <SearchSvg />
        <Text style={styles.text}>Kategoriler</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.White,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Silver,
  },
  textBox: {
    borderWidth: 1,
    borderColor: Colors.Silver,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    shadowColor: Colors.Gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: Colors.DarkGray,
    fontWeight: '600',
    marginLeft: 8,
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: Colors.Silver,
    marginLeft: 15,
  },
});

export default CategoryListHeader;
