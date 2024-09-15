import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import type {UserInfo} from '../../models/slices/authSliceTypes';
import {Colors} from '../../theme/colors';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import CustomButton from '../products/customButton';
import { logOutUser } from '../../store/actions/authActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface UserInfoProps {
  userInfo: UserInfo | null;
}

const UserInfoComponent: React.FC<UserInfoProps> = ({userInfo}) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "space-between", gap: 5, marginTop: 5}}>
          <View
            style={{
              flex: 1,
              width: 60,
              height: 60,
              backgroundColor: Colors.Primary,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, textTransform: "capitalize", color: Colors.White, fontWeight: "600"}}>
              {userInfo?.name.firstname.charAt(0)}
              {userInfo?.name.lastname.charAt(0)}
            </Text>
          </View>
          <View style={{flex: 3, paddingLeft: 3}}>
            <Text style={{textTransform: "capitalize", color: Colors.Black, fontSize: 17, fontWeight: "600"}}>
              {userInfo?.name.firstname} {userInfo?.name.lastname}
            </Text>
            <Text style={{color: Colors.Gray, fontSize: 14, paddingBottom: 2}}>
              {userInfo?.email}
            </Text>
            <Text style={{color: Colors.Gray, fontSize: 14, fontWeight: "500"}}>
              {userInfo?.phone}
            </Text>
          </View>
          <View style={{flex: 2}}>
            <CustomButton title='Çıkış Yap' bg={Colors.White} text={Colors.Primary} onPress={()=>dispatch(logOutUser())} />
          </View>
        </View>

        <View style={{flexDirection: "row", marginVertical: 15, justifyContent: "space-between", backgroundColor: Colors.White, padding: 18, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6}}>
            <View style={{alignItems: "center"}}>
                <AntDesign size={20} color={Colors.Primary} name="clockcircle" />
                <Text style={{marginTop: 5, fontSize: 13}}>Önceden</Text>
                <Text style={{fontSize: 13}}>Gezdiklerim</Text>
            </View>
            <View style={{width: 0.7, height: 60, backgroundColor: Colors.LightGray}}></View>
            <View style={{alignItems: "center"}}>
                <Ionicons size={20} color={Colors.Primary} name="bookmark" />
                <Text style={{marginTop: 5, fontSize: 13}}>İndirim</Text>
                <Text style={{fontSize: 13}}>Kuponlarım</Text>
            </View>
            <View style={{width: 0.7, height: 60, backgroundColor: Colors.LightGray}}></View>
            <View style={{alignItems: "center"}}>
                <Ionicons size={20} color={Colors.Primary} name="chatbox-ellipses" />
                <Text style={{marginTop: 5, fontSize: 13}}>Trendyol</Text>
                <Text style={{fontSize: 13}}>Asistan</Text>
            </View>
            <View style={{width: 0.7, height: 60, backgroundColor: Colors.LightGray}}></View>
            <View style={{alignItems: "center"}}>
                <FontAwesome size={20} color={Colors.Primary} name="envelope" />
                <Text style={{marginTop: 5, fontSize: 13}}>Satıcı</Text>
                <Text style={{fontSize: 13}}>Mesajlarım</Text>
            </View>
        </View>

        <View style={{gap: 8}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: Colors.White, padding: 20, gap: 15, width: 180, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap:10}}>
                        <MaterialCommunityIcons size={26} color={Colors.Primary} name="package" />
                        <View>
                            <Text style={{fontSize: 13}}>Tüm</Text>
                            <Text style={{fontSize: 13}}>Siparişlerim</Text>
                        </View>
                    </View>
                    <FontAwesome5 size={20} color={Colors.Gray} name="chevron-right" />
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: Colors.White, padding: 20, gap: 15, width: 180, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <FontAwesome5 size={22} color={Colors.Primary} name="socks" />
                        <View>
                            <Text style={{fontSize: 13}}>Dolap'ta</Text>
                            <Text style={{fontSize: 13}}>Sat</Text>
                        </View>
                    </View>
                    <FontAwesome5 size={20} color={Colors.Gray} name="chevron-right" />
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: Colors.White, padding: 20, gap: 15, width: 180, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap:10}}>
                        <MaterialCommunityIcons size={26} color={Colors.Primary} name="message-text" />
                        <View>
                            <Text style={{fontSize: 13}}>Ürün & Satıcı</Text>
                            <Text style={{fontSize: 13}}>Yorumlarım</Text>
                        </View>
                    </View>
                    <FontAwesome5 size={20} color={Colors.Gray} name="chevron-right" />
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: Colors.White, padding: 20, gap: 15, width: 180, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <MaterialCommunityIcons size={26} color={Colors.Primary} name="package-up" />
                        <View>
                            <Text style={{fontSize: 13}}>Tekrar</Text>
                            <Text style={{fontSize: 13}}>Satın Al</Text>
                        </View>
                    </View>
                    <FontAwesome5 size={20} color={Colors.Gray} name="chevron-right" />
                </View>
            </View>
        </View>

        <View style={{backgroundColor: Colors.White, borderRadius: 10, marginVertical: 15, borderColor: Colors.LightGray, borderWidth: 0.6}}>
            <View style={{borderBottomWidth: 0.6, borderColor: Colors.LightGray, padding: 15}}><Text style={{fontSize: 16, fontWeight: "600", color: Colors.Black}}>Hesabım</Text></View>
            <View style={{ padding: 15, gap: 20}}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 3}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <FontAwesome size={22} color={Colors.Blue} name="star" />
                        <Text>Takip Ettiğim Fenomenler</Text>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <MaterialCommunityIcons size={22} color={Colors.Blue} name="diamond" />
                        <Text>Trendyol Elite</Text>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <FontAwesome5 size={18} color={Colors.Blue} name="store" />
                        <Text>Takip Ettiğim Mağazalar</Text>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10, paddingLeft:3}}>
                        <FontAwesome5 size={22} color={Colors.Blue} name="clipboard-check" />
                        <Text>Trendyol Seni Dinliyor</Text>
                        <View style={{paddingHorizontal: 4, paddingVertical: 2, borderRadius: 50, backgroundColor: "red"}}>
                            <Text style={{fontSize: 11, color: Colors.White, fontWeight: "600"}}>YENİ</Text>
                        </View>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <Ionicons size={22} color={Colors.Blue} name="settings-sharp" />
                        <Text>Hesap Ayarlarım</Text>
                        <View style={{paddingHorizontal: 5, paddingVertical: 2, borderRadius: 50, backgroundColor: "#FEF2E7", flexDirection: "row", alignItems: "center", gap: 5}}>
                            <MaterialCommunityIcons size={19} color={Colors.Primary} name="hanger" />
                            <Text style={{fontSize: 11, color: Colors.Primary, fontWeight: "600"}}>Boy-Kilo Bilgini Gir</Text>
                        </View>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 3}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <MaterialCommunityIcons size={22} color={Colors.Blue} name="shield-check" />
                        <Text>Güvenlik</Text>
                    </View>
                    <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                        <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
                    </View>
                </View>
            </View>
        </View>

        <View style={{backgroundColor: Colors.White, borderRadius: 10, borderColor: Colors.LightGray, borderWidth: 0.6, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                <AntDesign size={20} color={Colors.Blue} name="questioncircle" />
                <Text>Yardım & Sıkça Sorulan Sorular</Text>
            </View>
            <View style={{paddingLeft: 2 ,backgroundColor: "#F4F3FD", borderRadius: 50, width: 25, height: 25, justifyContent:"center", alignItems: "center"}}>
                <FontAwesome5 size={13} color={Colors.Blue} name="chevron-right" />
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserInfoComponent;
