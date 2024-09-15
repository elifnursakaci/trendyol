import React from 'react';
import {SafeAreaView, StyleSheet, View, Pressable} from 'react-native';
import {height, width} from '../../utils/constants';
import CustomInput from '../ui/customInput';
import {Colors} from '../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <CustomInput placeholder="Marka, ürün veya kategori ara" showIcon={true} />
      </View>
      <View style={styles.iconContainer}>
        <Pressable>
          <FontAwesome size={20} color={Colors.Black} name="envelope-o" />
        </Pressable>
        <Pressable style={{backgroundColor: Colors.Primary, padding: 5, borderRadius:50}}>
          <FontAwesome size={20} color={Colors.White} name="bell-o" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.145,
    backgroundColor: Colors.BgHeader,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  searchContainer: {
    flex: 4,
    width: "100%",
    paddingLeft: 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingRight: 10
  },
});

export default Header;
