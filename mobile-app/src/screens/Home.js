/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {
  AvatarIcon,
  NotificationIcon,
  ArrowRight,
  ValidateLinkIcon,
  ValidateMessageIcon,
} from '../assets/images/svgImages';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const topOffset =
  Platform.OS === 'ios' ? getStatusBarHeight() + 20 : getStatusBarHeight() - 20;

const Home = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: topOffset}}
      contentContainerStyle={{paddingBottom: 40}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
            <View
              style={{
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 2,
              }}>
              <AvatarIcon />
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Amjed
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                amjed@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F3F5FF',
              padding: 15,
              borderRadius: 30,
              alignItems: 'center',
              marginHorizontal: 16,
            }}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 30,
            textAlign: 'left',
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            paddingLeft: 21,
            fontSize: 24,
            lineHeight: 35,
          }}>
          {'How are you\nfeeling today?'}
        </Text>
        {/** cards */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 21,
            justifyContent: 'space-between',
            marginTop: 30,
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: '#F3F5FF',
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderRadius: 12,
              height: 144,
              width: 174,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AuthorizedLinks')}
              activeOpacity={0.7}
              style={{flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 24, fontWeight: '600'}}>
                  {'Authorized\nLinks'}
                </Text>
                <Text style={{marginTop: 10, fontSize: 48, fontWeight: '900'}}>
                  13
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ArrowRight />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#F3F5FF',
                padding: 15,
                borderRadius: 12,
                width: 160,
                height: 68,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    {'Need review links'}
                  </Text>
                  <Text
                    style={{marginTop: 10, fontSize: 20, fontWeight: '900'}}>
                    3
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowRight />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#F3F5FF',
                paddingVertical: 10,
                paddingHorizontal: 5,
                borderRadius: 12,
                width: 160,
                height: 68,
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    {'Non authorized links'}
                  </Text>
                  <Text
                    style={{marginTop: 10, fontSize: 20, fontWeight: '900'}}>
                    22
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowRight />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/** cards */}

        {/** Services */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 21,
            width: '100%',
          }}>
          <Text style={{marginLeft: 5}}>Services</Text>
          {/** validate link */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ValidateUrl')}
            activeOpacity={0.7}
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 2,
              }}>
              <ValidateLinkIcon />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                flex: 1,
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  marginBottom: 30,
                  color: '#242424',
                  fontSize: 24,
                  fontWeight: '600',
                }}>
                {'Validate\nLink'}
              </Text>
              <Text style={{color: '#242424', fontSize: 12}}>
                {'22 actions'}
              </Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          {/** validate link */}

          {/** validate message */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ValidateMessage')}
            activeOpacity={0.7}
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 2,
              }}>
              <ValidateMessageIcon />
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                flex: 1,
                paddingLeft: 10,
              }}>
              <Text
                style={{
                  marginBottom: 30,
                  color: '#242424',
                  fontSize: 24,
                  fontWeight: '600',
                }}>
                {'Validate\nmessage'}
              </Text>
              <Text style={{color: '#242424', fontSize: 12}}>
                {'12 actions'}
              </Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
          {/** validate message */}
        </View>
        {/** Services */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  errorStyle: {
    borderWidth: StyleSheet.hairlineWidth * 3,
    borderColor: 'red',
    borderRadius: 10,
  },
  errorText: {
    alignSelf: 'flex-start',
    paddingTop: 5,
    color: 'red',
    marginHorizontal: 30,
    fontSize: 16,
  },
});
