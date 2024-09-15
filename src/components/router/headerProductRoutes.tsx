import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {height, width} from '../../utils/constants';
import CustomInput from '../ui/customInput';
import {Colors} from '../../theme/colors';

const HeaderProductRoute: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <CustomInput placeholder="İşte Aradığın Ürünler" name='arrow-left' showIcon={true} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.140,
    backgroundColor: Colors.BgHeader,
    width: width,
    gap: 10,
  },
  searchContainer: {
    flex: 4,
    width: "97%",
    paddingLeft: 10
  },
});

export default HeaderProductRoute;
