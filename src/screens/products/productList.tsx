import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {ProductListProps} from '../../models/productList/productListTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getProducts} from '../../store/actions/productActions';
import ProductItem from '../../components/products/productItem';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {removeProduct} from '../../store/slice/productSlice';
import Spinner from '../../components/spinner/spinner';

const ProductList: React.FC<ProductListProps> = ({route}) => {
  const {category} = route?.params;
  const dispatch = useDispatch<AppDispatch>();
  const {products, pending} = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts({category: category}));
    return () => {
      removeProduct(); 
    };
  }, [category, dispatch]); 

  if (pending) {
    return (
      <View style={styles.pending}>
        <Spinner />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={{marginLeft: 4}}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            style={styles.product}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgWhite,
    paddingHorizontal: 3,
  },
  pending: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    width: width * 0.46,
    marginVertical: 6,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.Platinium,
    backgroundColor: Colors.White,
    borderRadius: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ProductList;
