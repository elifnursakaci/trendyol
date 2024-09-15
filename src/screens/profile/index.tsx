import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import ListEmpty from '../../components/ui/listEmpty';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../theme/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../models/productList/productListTypes';
import { Routes } from '../../utils/routes';
import { getUserInfo } from '../../store/actions/authActions';
import UserInfoComponent from '../../components/profile/userInfo';

const Profile: React.FC = () => {
  const {isLogin, userInfo} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if(isLogin) dispatch(getUserInfo({userId: 1}))
  }, [isLogin])
  

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View style={{flex: 1, margin: 10}}>
          <UserInfoComponent userInfo={userInfo} />
        </View>
      ) : (
        <ListEmpty
          title="Hesabım"
          btnTitle='Giriş Yap'
          description={`Hesabınızı görüntüleyebilmek için lütfen giriş yapın. \n\n Siparişlerinizi ve Elite üyelik durumunuzu, \n hesabımdan takip edebilirsiniz.`}
          icon={<AntDesign size={50} color={Colors.Primary} name={'smileo'} />}
          onPress={()=> navigation.navigate(Routes.LOGIN)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
