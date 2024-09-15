import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import WidgetHeader from '../components/ui/widgetHeader';
import {WidgetProps} from '../models/widgets/widget';
import ProductItem from '../components/products/productItem';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const ForYouProducts: React.FC<WidgetProps> = ({item}) => {
  const {products} = useSelector((state: RootState) => state.products);

  return (
    <View style={widgetsStyle.container}>
      <WidgetHeader widgetTitle={item.title} seeAll={false} />
      <FlatList
        style={{marginLeft: 4}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
     
    </View>
  );
};

export default ForYouProducts;
