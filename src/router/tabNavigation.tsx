import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {
  CART_SCREEN,
  FAVORITES_SCREEN,
  PROFILE_SCREEN,
  Routes,
  TRENDYOLGO_SCREEN,
} from '../utils/routes';
import TabIcon from '../components/router/tabIcon';
import {Colors} from '../theme/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import Header from '../components/router/header';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const quantity = useSelector(
    (state: RootState) => state?.carts?.carts,
  )?.length;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route.name}
          />
        ),
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.Silver,
      })}>
      <Tab.Screen name={Routes.HOME_SCREEN} component={Home} options={{
        header: ()=> <Header />
      }} />
      <Tab.Screen name={TRENDYOLGO_SCREEN} component={TrendyolGo} />
      <Tab.Screen name={FAVORITES_SCREEN} component={Favorites} />
      <Tab.Screen
        name={CART_SCREEN}
        component={Cart}
        options={{
          tabBarBadge: quantity,
          tabBarBadgeStyle: {left: 5, fontWeight: '500', fontSize: 13, backgroundColor: Colors.Primary},
          headerTitle: ()=> (
            <Text style={{fontWeight: "500", fontSize: 17, color: Colors.Black}}>Sepetim</Text>
          )
        }}
      />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
