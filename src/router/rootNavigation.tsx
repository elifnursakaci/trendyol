import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';
import {Routes} from '../utils/routes';
import ProductDetail from '../screens/products/productDetail';
import ProductList from '../screens/products/productList';
import {RootStackParamList} from '../models/productList/productListTypes';
import HeaderProductRoute from '../components/router/headerProductRoutes';
import Login from '../screens/auth/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {userLoginCheck} from '../store/slice/authSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(userLoginCheck(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <HeaderProductRoute />,
      }}>
      <Stack.Screen
        name={Routes.TAB}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={Routes.PRODUCT_LIST} component={ProductList} />
      <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
