import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import WidgetHeaderProps from '../../models/components/widgetHeaderProps';
import {Colors} from '../../theme/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../utils/routes';
import { RootStackParamList } from '../../models/productList/productListTypes';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  widgetTitle,
  seeAll,
  color,
  category
}) => {

  const navigation:any = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>{widgetTitle}</Text>
      {seeAll && (
        <Pressable onPress={()=>navigation.navigate(Routes.PRODUCT_LIST, {category:category})} >
          <Text style={[styles.text, {color: color || Colors.Primary}]}>
            Tümünü Gör
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.Primary,
  },
});

export default WidgetHeader;
