import React, {useEffect} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getCarts} from '../../store/actions/cartsActions';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/products/customButton';
import CartItem from '../../components/cart/cartItem';
import Spinner from '../../components/spinner/spinner';

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {carts, pending, totalPrice} = useSelector((state: RootState) => state.carts);

  useEffect(() => {
    dispatch(getCarts({userId: 2}));
  }, []);

  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={carts}
          renderItem={({item}) => <CartItem item={item} />}
        />
      )}
      <View style={styles.footerContainer}>
        <View style={styles.footerPrice}>
          <Text style={styles.total}>Toplam</Text>
          <Text style={styles.price}>{totalPrice} TL</Text>
          <Text style={styles.freeShipping}>Kargo Bedava</Text>
        </View>
        <View style={styles.footerButton}>
          <CustomButton
            title="Sepeti Onayla"
            bg={Colors.Primary}
            text={Colors.White}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgWhite,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.White,
    borderTopWidth: 0.5,
    borderColor: Colors.LightGray,
  },
  footerPrice: {
    flex: 1,
    gap: 3,
  },
  total: {
    color: Colors.Black,
  },
  price: {
    fontWeight: '700',
    fontSize: 15,
    color: 'green',
  },
  freeShipping: {
    fontWeight: '600',
    color: '#32CD32',
  },
  footerButton: {
    flex: 1.5,
  },
});

export default Cart;
