import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Colors} from '../theme/colors';
import CategoryItem from '../components/home/categoryItem';
import CategoryListHeader from '../components/home/categoryListHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {categoryMapping, categoryOrder} from '../utils/constants';

const Categories: React.FC = () => {
  const {categories} = useSelector((state: RootState) => state.categories);

  const sortedCategories = categoryOrder
    .filter(category => categories.includes(category))
    .map(category => ({
      original: category,
      translated: categoryMapping[category],
    }));

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<CategoryListHeader />}
        ListHeaderComponentStyle={styles.listHeader}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sortedCategories}
        renderItem={({item}) => (
          <CategoryItem
            originalTitle={item.original}
            translatedTitle={item.translated}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.6,
  },
  listHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default Categories;
