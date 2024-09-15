import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import Swiper from 'react-native-swiper';
import {height, introductionImg, width} from '../utils/constants';
import IntroductionList from '../components/home/introductionList';

const Introduction: React.FC = () => {
  const renderPagination = (index: number, total: number) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.text}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };

  return (
    <View style={widgetsStyle.container}>
      <View style={{paddingTop: 5}}>
        <Swiper
          showsPagination={true}
          style={{height: height * 0.18}}
          showsButtons={false}
          renderPagination={renderPagination}
          autoplay={true}>
          {introductionImg.map(item => (
            <View
              key={item.id}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}} 
                resizeMode="cover"
                style={{flex: 1, width: width - 16, borderRadius: 5}}
              />
            </View>
          ))}
        </Swiper>
        <IntroductionList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 8,
    right: 14,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    width: width * 0.074,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontSize: 12, fontWeight: '500'},
});

export default Introduction;
