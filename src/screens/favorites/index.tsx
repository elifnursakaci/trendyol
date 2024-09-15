import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Colors} from '../../theme/colors';
import FavoriteItem from '../../components/favorites/favoriteItem';
import ListEmpty from '../../components/ui/listEmpty';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/routes';
import { RootStackParamList } from '../../models/productList/productListTypes';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <ListEmpty
            title="Favori İlk Ürününü Ekle"
            btnTitle='Alışverişe Devam Et'
            description="Beğendiğin ürünü favorilerine ekle, fiyatlarını takip et."
            icon={<AntDesign size={50} color={Colors.Primary} name={'heart'} />}
            onPress={()=> navigation.navigate(Routes.HOME_SCREEN)}
          />
        }
        data={favorites}
        renderItem={({item}) => <FavoriteItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
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

export default Favorites;
