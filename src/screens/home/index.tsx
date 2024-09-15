import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from 'react-native';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import ForYouProducts from '../../widgets/forYouProducts';
import BestSeller from '../../widgets/bestSeller';
import Introduction from '../../widgets/introduction';
import NewArrival from '../../widgets/newArrival';
import {Widget} from '../../models/widgets/widget';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSellerProducts, getNewArrivalProducts, getProducts} from '../../store/actions/productActions';
import { AppDispatch, RootState } from '../../store';
import { getCategories } from '../../store/actions/categoriesActions';
import { getCarts } from '../../store/actions/cartsActions';

const Home: React.FC = () => {
  const {selectedCategory} = useSelector((state:RootState)=> state.categories)
  const dispatch = useDispatch<AppDispatch>(); // dispatch'in tipi
  
  useEffect(() => {
    dispatch(getBestSellerProducts({limit:5}));
    dispatch(getNewArrivalProducts({limit:5, sort:"desc"}));
    dispatch(getCategories())
  }, []);
  useEffect(() => {
    dispatch(getProducts({category: selectedCategory}));
  }, [selectedCategory])

  const widgetItems: ListRenderItem<Widget> = ({item}) => {
    switch (item.component) {
      case 'categories':
        return <Categories />;
      case 'introduction':
        return <Introduction />;
      case 'forYouProduct':
        return <ForYouProducts item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'newArrival':
        return <NewArrival item={item} />;
      default:
        return <Text>Veriler yüklenemedi :/ Daha sonra tekrar deneyin.</Text>;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={widgets}
        renderItem={widgetItems}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
