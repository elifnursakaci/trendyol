import React from 'react';
import {Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CART_SCREEN, FAVORITES_SCREEN, PROFILE_SCREEN, Routes, TRENDYOLGO_SCREEN} from '../../utils/routes';
import { TabIconProps } from '../../models/router';

const TabIcon: React.FC<TabIconProps> = ({focused, size, color, name}) => {
  if (name === Routes.HOME_SCREEN)
    return <Entypo size={size} color={color} name="home" />;
  if (name === TRENDYOLGO_SCREEN)
    return <Image source={require("../../assets/go-logo.png")} style={{width: 30, height:16}} />
  if (name === FAVORITES_SCREEN)
    return <Entypo size={size} color={color} name="heart" />;
  if (name === CART_SCREEN)
    return <FontAwesome size={size} color={color} name="shopping-cart" />;
  if (name === PROFILE_SCREEN)
    return <Ionicons size={size} color={color} name="person" />;
};

export default TabIcon;
