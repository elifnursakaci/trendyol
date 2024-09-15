import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import { Product } from '../../store/slice/productSlice';

interface SelectSellerProps {
  item: Product
}

const SelectSeller: React.FC<SelectSellerProps> = ({item}) => {
  return (
    <View
      style={styles.container}>
      <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Text style={{fontSize: 13, color: Colors.Gray, fontWeight: '500'}}>
          Seçili Satıcı:
        </Text>
        <Text style={{fontSize: 13, color: '#4169E1', fontWeight: '500'}}>
          {item.title.slice(0,10)}
        </Text>
        <View
          style={{
            backgroundColor: '#4169E1',
            borderRadius: 20,
            padding: 2,
            marginRight: 3,
          }}>
          <Feather size={14} color={Colors.White} name="check" />
        </View>
        <View
          style={{
            backgroundColor: Colors.Primary,
            paddingVertical: 3,
            paddingHorizontal: 4,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 12, color: Colors.White}}>{item.rating.rate}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 13, color: Colors.Black}}>2 soru & cevap</Text>
        <Entypo size={20} color={Colors.Black} name="chevron-right" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderColor: Colors.LightGray,
  },
});

export default SelectSeller;
