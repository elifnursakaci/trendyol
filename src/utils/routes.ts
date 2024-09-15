// enum tanımlandığında, TypeScript otomatik olarak her bir enum üyesinin tipini belirler.
export enum Routes {
  PRODUCT_DETAIL = 'Ürün Detay',
  PRODUCT_LIST = 'Ürünler',
  TAB = 'Trendyol',
  HOME_SCREEN = 'Anasayfa',
  LOGIN = 'Giriş Yap',
}
const TRENDYOLGO_SCREEN: string = 'Trendyol GO';
const FAVORITES_SCREEN: string = 'Favorilerim';
const CART_SCREEN: string = 'Sepetim';
const PROFILE_SCREEN: string = 'Hesabım';

export {TRENDYOLGO_SCREEN, FAVORITES_SCREEN, CART_SCREEN, PROFILE_SCREEN};
