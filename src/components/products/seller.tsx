import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../theme/colors';
import { Product } from '../../store/slice/productSlice';

interface SellerProps {
  item: Product
}

const Seller: React.FC<SellerProps> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{fontSize: 13}}>{item?.rating?.rate}</Text>
        <View style={{flexDirection: 'row', gap: 2}}>
          <FontAwesome size={13} color={Colors.Primary} name="star" />
          <FontAwesome size={13} color={Colors.Primary} name="star" />
          <FontAwesome size={13} color={Colors.Primary} name="star" />
          <FontAwesome size={13} color={Colors.Primary} name="star" />
          <FontAwesome size={13} color={Colors.Primary} name="star-half-full" />
        </View>
        <Text style={{fontSize: 13}}>3 Değerlendirme</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/cameraIcon.png')}
            style={{width: 24, height: 24}}></Image>
          <Entypo size={20} color={Colors.Black} name="chevron-right" />
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <AntDesign size={18} color={Colors.Black} name="hearto" />
        <Text style={{fontSize: 13}}>16</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: Colors.White,
    borderBottomWidth: 0.8,
    borderColor: Colors.LightGray,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Seller;
