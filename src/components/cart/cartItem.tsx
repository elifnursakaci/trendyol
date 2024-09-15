import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {height, width} from '../../utils/constants';
import {ProductQuantity, setTotalPrice} from '../../store/slice/cartsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {getRequest} from '../../service/requests';
import {PRODUCTS_URL} from '../../service/urls';
import {Product} from '../../store/slice/productSlice';
import {Colors} from '../../theme/colors';
import {Routes} from '../../utils/routes';
import {RootStackParamList} from '../../models/productList/productListTypes';

interface CartItemProps {
  item: ProductQuantity;
}
const CartItem: React.FC<CartItemProps> = ({item}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const productUrl: string = `${PRODUCTS_URL}/${item.productId}`;
    getRequest<Product>(productUrl, {}).then(data => {
      setProduct(data.data);
      dispatch(setTotalPrice(data.data.price));
    });
  }, [item.productId, item.quantity, dispatch]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (product)
          navigation.navigate(Routes.PRODUCT_DETAIL, {item: product});
      }}>
      <View style={styles.wrapper}>
        <Image source={{uri: product?.image}} style={styles.image} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {product?.title}
          </Text>
          <Text style={styles.rating}>{product?.rating?.rate}</Text>
          <Text style={styles.freeShipping}>Kargo Bedava</Text>
          <Text style={styles.price}>{product?.price} TL</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.Platinium,
    borderRadius: 8,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Black,
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: Colors.Grey,
    marginBottom: 5,
  },
  freeShipping: {
    fontSize: 14,
    color: Colors.Green,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: Colors.Primary,
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default CartItem;
