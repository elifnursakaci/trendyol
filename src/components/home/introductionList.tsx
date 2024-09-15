import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {introductionList} from '../../utils/constants';
import IntroductionListItem from './introductionListItem';

const IntroductionList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>
        Hizmetlerimizi Keşfet..
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={introductionList}
        renderItem={({item}) => <IntroductionListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginTop: 12,
  },
});

export default IntroductionList;
