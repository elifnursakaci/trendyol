import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../theme/colors';
import CategoryItemProps from '../../models/home/categories';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { changeCategory } from '../../store/slice/categoriesSlice';

const CategoryItem: React.FC<CategoryItemProps> = ({originalTitle, translatedTitle}) => {
  const {selectedCategory} = useSelector((state:RootState)=>state.categories)  
  const dispatch = useDispatch()
return (
    <Pressable 
      onPress={() => dispatch(changeCategory(originalTitle))} 
      style={selectedCategory === originalTitle ? styles.selectedCategory : styles.container}>
      <Text style={selectedCategory === originalTitle ? styles.selectedTitle : styles.title}>
        {translatedTitle}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.Silver,
    margin: 5,
    borderRadius: 100
  },
  selectedCategory:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.Silver,
    margin: 5,
    borderRadius: 100,
    backgroundColor: Colors.Primary
  },
  title: {
    fontSize: 14,
    padding: 8,
    paddingHorizontal: 10,
    color: Colors.Gray,
    fontWeight: '500',
    textTransform: "capitalize"
  },
  selectedTitle:{
    fontSize: 14,
    padding: 8,
    paddingHorizontal: 10,
    color: Colors.White,
    fontWeight: '500',
    textTransform: "capitalize",
  }
});

export default CategoryItem;
