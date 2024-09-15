import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../utils/routes';
import {Product} from '../../store/slice/productSlice';

type RootStackParamList = {
  [Routes.PRODUCT_DETAIL]: {item: Product};
  [Routes.PRODUCT_LIST]: {category: string};
  [Routes.TAB]: undefined;
  [Routes.HOME_SCREEN]: undefined;
  [Routes.LOGIN]: undefined;
};

type ProductListScreenRouteProp = RouteProp<
  RootStackParamList,
  Routes.PRODUCT_LIST
>;
type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  Routes.PRODUCT_DETAIL
>;

type ProductListProps = {
  route: ProductListScreenRouteProp;
};
type ProductDetailProps = {
  route: ProductDetailScreenRouteProp;
};

export type {ProductListProps, RootStackParamList, ProductDetailProps};
