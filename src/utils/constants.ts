import {Dimensions} from 'react-native';

interface DimensionsType {
  width: number;
  height: number;
}
interface Category {
  id: number;
  title: string;
}
export interface Introduction {
  id: number;
  image: string;
  title?: string;
}

const {width, height}: DimensionsType = Dimensions.get('window');
const categories: Category[] = [
  {
    id: 1,
    title: 'Erkek',
  },
  {
    id: 2,
    title: 'Kadın',
  },
  {
    id: 3,
    title: 'Moda',
  },
  {
    id: 4,
    title: 'Ev & Yaşam',
  },
  {
    id: 5,
    title: 'Süpermarket',
  },
  {
    id: 6,
    title: 'Anne & Çocuk',
  },
  {
    id: 7,
    title: 'Kozmetik',
  },
  {
    id: 8,
    title: 'Elektronik',
  },
  {
    id: 9,
    title: 'Saat & Aksesuar',
  },
];
const introductionImg: Introduction[] = [
  {
    id: 1,
    image:
      'https://cdn.dsmcdn.com/ty1408/pimWidgetApi/mobile_20240708055919_uspabanner.jpg',
  },
  {
    id: 2,
    image:
      'https://cdn.dsmcdn.com/ty1317/pimWidgetApi/mobile_20240517060555_2844054KadinMobile202405161127.jpg',
  },
  {
    id: 3,
    image:
      'https://cdn.dsmcdn.com/ty1417/pimWidgetApi/mobile_20240712122630_2987294ElektronikMobile202407121503.jpg',
  },
  {
    id: 4,
    image:
      'https://cdn.dsmcdn.com/ty1383/pimWidgetApi/mobile_20240627063246_2331032KadinMobile202406131546.jpg',
  },
  {
    id: 5,
    image:
      'https://cdn.dsmcdn.com/ty1340/pimWidgetApi/mobile_20240531081738_eeahazagu.jpg',
  },
  {
    id: 6,
    image:
      'https://cdn.dsmcdn.com/ty1418/pimWidgetApi/mobile_20240712131630_548795AyakkabiAmpAmpAmpAmpAmpAmpAmpAmpAmpCantaMobile202406041503.jpg',
  },
  {
    id: 7,
    image:
      'https://cdn.dsmcdn.com/ty1411/pimWidgetApi/mobile_20240710151215_2979762ElektronikMobile202407101801.jpg',
  },
];
const introductionList: Introduction[] = [
  {
    id: 1,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png',
    title: 'Sana Özel',
  },
  {
    id: 2,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/mnresize/200/200/marketing/datascience/automation/2023/10/27/Gazze_Web_Circlebanner_202310271210.png',
    title: 'Gazze',
  },
  {
    id: 3,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2024/2/21/Deskte_V12_202402210905.png',
    title: 'Deprem',
  },
  {
    id: 4,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg',
    title: 'Apple',
  },
  {
    id: 5,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg',
    title: 'Pull & Bear',
  },
  {
    id: 6,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg',
    title: 'Phillips',
  },
  {
    id: 7,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Bosch_202301262207.png',
    title: 'Bosch',
  },
  {
    id: 8,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png',
    title: 'Adidas',
  },
  {
    id: 9,
    image:
      'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Dyson_202301270049.jpg',
    title: 'Dyson',
  },
];
export const categoryOrder: string[] = [
  "men's clothing",
  "women's clothing",
  'electronics',
  'jewelery',
];
export const categoryMapping: Record<string, string> = {
  "men's clothing": 'Erkek',
  "women's clothing": 'Kadın',
  electronics: 'Elektronik',
  jewelery: 'Mücevher',
};

export {width, height, categories, introductionImg, introductionList};
