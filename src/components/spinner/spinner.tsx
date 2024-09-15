import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.Primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;