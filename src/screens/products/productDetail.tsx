import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Pressable,
} from 'react-native';
import {ProductDetailProps} from '../../models/productList/productListTypes';
import {Colors} from '../../theme/colors';
import {height, width} from '../../utils/constants';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  SafeAreaProvider,
  SafeAreaView as SafeAreaViewWrapper,
} from 'react-native-safe-area-context';
import Seller from '../../components/products/seller';
import SelectSeller from '../../components/products/selectSeler';
import ProductDetailFooter from '../../components/products/productDetailFooter';

const ProductDetail: React.FC<ProductDetailProps> = ({route}) => {
  const {item} = route?.params;

  return (
    <SafeAreaProvider>
      <SafeAreaViewWrapper style={{flex: 1, backgroundColor: Colors.White}}>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imgContainer}>
              <Image source={{uri: item.image}} style={styles.image} />
            </View>
            <View style={styles.package}>
              <Octicons size={16} color={Colors.White} name="package" />
              <Text style={styles.packageText}>{`YARIN \nKARGODA`}</Text>
            </View>
            <Pressable style={styles.favoriteButton}>
              <AntDesign size={20} color={Colors.Black} name="hearto" />
            </Pressable>
            <View style={{backgroundColor: Colors.White}}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title.slice(0, 12)}
                <Text style={styles.description}> {item.description}</Text>
              </Text>
            </View>
            <Seller item={item} />
            <SelectSeller item={item} />
            <View style={styles.addList}>
              <Pressable style={styles.addListContainer}>
                <Feather size={16} color={Colors.Primary} name="bookmark" />
              </Pressable>
              <Text style={{fontSize: 16}}>Listeye Ekle</Text>
            </View>
            <View
              style={{
                padding: 10,
                marginTop: 10,
                backgroundColor: Colors.White,
                borderTopWidth: 0.5,
                borderColor: Colors.LightGray,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: Colors.Black,
                  }}>
                  Ürün Özellikleri
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: Colors.Primary, fontWeight: '500'}}>
                    Tümü
                  </Text>
                  <Feather
                    size={18}
                    color={Colors.Primary}
                    name="chevron-right"
                  />
                </View>
              </View>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{color: Colors.Black, textTransform: 'capitalize'}}>
                  {item.description}
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* add cart buttons */}
          <ProductDetailFooter item={item} />
        </SafeAreaView>
      </SafeAreaViewWrapper>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgWhite,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
    height: height * 0.4,
    backgroundColor: Colors.White,
    borderTopWidth: 0.5,
    borderColor: Colors.LightGray,
  },
  image: {
    width: width * 0.5,
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: Colors.White,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Black,
    margin: 10,
  },
  description: {
    color: Colors.Gray,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  package: {
    position: 'absolute',
    top: 25,
    left: 0,
    paddingVertical: 10,
    paddingRight: 12,
    paddingLeft: 5,
    borderRadius: 2,
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  packageText: {
    color: Colors.White,
    fontWeight: '600',
    fontSize: 11,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 25,
    backgroundColor: Colors.White,
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,
    elevation: 3,
  },
  addList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    gap: 14,
    marginTop: 10,
    backgroundColor: Colors.White,
    borderBottomWidth: 0.8,
    borderTopWidth: 0.5,
    borderColor: Colors.LightGray,
  },
  addListContainer: {
    borderWidth: 1.2,
    borderColor: Colors.Primary,
    borderRadius: 20,
    padding: 5,
  },
});

export default ProductDetail;
