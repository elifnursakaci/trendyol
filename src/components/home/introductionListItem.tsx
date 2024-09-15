import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Introduction, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';

interface IntroductionListItemProp {
  item: Introduction;
}

const IntroductionListItem: React.FC<IntroductionListItemProp> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',

    justifyContent: 'center',
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 8,
    backgroundColor: Colors.White,
    borderRadius: 12,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.Silver,
    borderRadius: (width * 0.14) / 2,
    width: width * 0.14,
    height: width * 0.14,
    marginBottom: 8,
    overflow: 'hidden',
    backgroundColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.Black,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default IntroductionListItem;
