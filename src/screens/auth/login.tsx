import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../theme/colors';
import {AppDispatch, RootState} from '../../store';
import {height, width} from '../../utils/constants';
import CustomInput from '../../components/ui/customInput';
import CustomButton from '../../components/products/customButton';
import { loginSchema } from '../../utils/validationSchema';
import { loginUser } from '../../store/actions/authActions';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const {isLogin, pending} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]); 

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: Colors.Primary}}>
        <View
          style={{
            position: 'absolute',
            top: height * 0.08,
            zIndex: 99,
            right: 20,
          }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.Primary,
              padding: 8,
              borderRadius: 50,
              shadowColor: Colors.White,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
              elevation: 7,
            }}>
            <Ionicons name={'close-sharp'} color={Colors.White} size={28} />
          </Pressable>
        </View>
        <Image
          source={require('../../assets/trendyol.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        validationSchema={loginSchema}
        onSubmit={values => dispatch(loginUser(values))}
      >
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.loginBox}>
              <CustomInput
                placeholder="Kullanıcı Adı"
                showIcon={false}
                placeholderTextColor={Colors.Gray}
                value={values.username}
                onChangeText={handleChange('username')}
                errorText={errors?.username}
              />
              <CustomInput
                secureTextEntry={true}
                placeholder="Şifre"
                showIcon={false}
                placeholderTextColor={Colors.Gray}
                value={values.password}
                onChangeText={handleChange('password')}
                errorText={errors?.password}
              />
              <View
                style={{
                  marginTop: 13,
                  paddingHorizontal: 2
                }}>
                <CustomButton
                  bg={Colors.Primary}
                  text={Colors.White}
                  pending={pending}
                  title="Giriş Yap"
                  onPress={handleSubmit}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 4,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 25,
                }}>
                <Pressable>
                  <Text
                    style={{
                      color: Colors.Primary,
                      textDecorationLine: 'underline',
                    }}>
                    Şifremi Unuttum
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>
                    Üye değil misin?{' '}
                    <Text
                      style={{
                        color: Colors.Primary,
                        textDecorationLine: 'underline',
                      }}>
                      Üye Ol
                    </Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2,
  },
  loginBox: {
    width: width - 40,
    height: height * 0.41,
    gap: 10,
    position: 'absolute',
    backgroundColor: Colors.White,
    top: -height * 0.09,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default Login;
