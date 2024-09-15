import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {height, width} from '../../utils/constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {Product} from '../../store/slice/productSlice';
import {Colors} from '../../theme/colors';
import {Routes} from '../../utils/routes';
import {RootStackParamList} from '../../models/productList/productListTypes';
import CustomButton from '../products/customButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {updateCarts} from '../../store/actions/cartsActions';
import {removeFavorite} from '../../store/slice/favoritesSlice';

interface FavoriteItemProps {
  item: Product;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (item) navigation.navigate(Routes.PRODUCT_DETAIL, {item: item});
      }}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item?.image}} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item?.title}
          </Text>
          <View style={styles.rateContainer}>
            <Text style={styles.rating}>{item?.rating?.rate}</Text>
            <FontAwesome size={14} color={Colors.Primary} name="star" />
          </View>
          <Text style={styles.freeShipping}>Kargo Bedava</Text>
          <Text style={styles.price}>{item?.price} TL</Text>
          <View style={styles.buttons}>
            <CustomButton
              title="Sil"
              text={Colors.Primary}
              bg={Colors.White}
              onPress={() => dispatch(removeFavorite(item.id))}
            />
            <CustomButton
              title="Sepete Ekle"
              text={Colors.White}
              bg={Colors.Primary}
              onPress={() =>
                dispatch(
                  updateCarts({
                    userId: 2,
                    date: '2019-12-10',
                    products: [{productId: item.id, quantity: 1}],
                  }),
                )
              }
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: Colors.White,
    borderRadius: 8,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Platinium,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 3,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Black,
    marginBottom: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: Colors.Grey,
    marginRight: 5,
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
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FavoriteItem;
