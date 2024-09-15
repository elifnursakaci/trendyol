import React from 'react';
import {FlatList, ImageBackground, View, StyleSheet, Text} from 'react-native';
import WidgetHeader from '../components/ui/widgetHeader';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {RootState} from '../store';
import { WidgetProps } from '../models/widgets/widget';
import { height, width } from '../utils/constants';
import { Colors } from '../theme/colors';

const BestSeller: React.FC<WidgetProps> = ({item}) => {
  const {bestSeller} = useSelector((state: RootState) => state.products);
  const image = {uri: 'https://cdn.dsmcdn.com/mobile/background/flashsales_widgetbacground_android.png'};

  return (
    <ImageBackground source={image} style={styles.container} resizeMode="stretch">
      <View style={[widgetsStyle.container, {position: "absolute", backgroundColor: "transparent"}]}>
        <WidgetHeader widgetTitle={item.title} seeAll={true} color={Colors.White} category={"jewelery"} />
        <FlatList
          style={{marginLeft: 4}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={bestSeller}
          renderItem={({item}) => (
            <ProductItem
              item={item}
            />
          )}
        />
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: width,
    height: height*0.33,
    marginVertical: 10
  },
});

export default BestSeller;
