import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const TrendyolGo: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}> TrendyolGo...... </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
});

export default TrendyolGo;
