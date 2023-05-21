/* eslint-disable react-native/no-inline-styles */
import Lottie from 'lottie-react-native';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import animations from '../assets/animation';
import {
  Review,
  AuthorizedIcon,
  UnAuthorizedIcon,
  InfoIcon,
  ReadMore,
  ArrowLeft,
} from '../assets/images/svgImages';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const topOffset =
  Platform.OS === 'ios' ? getStatusBarHeight() + 20 : getStatusBarHeight() - 20;

const SECURE_LINK = '#DEFFF7';
const BAD_LINK = '#E8CFCD';
const REVIEW_LINK = '#E8E7CD';

const ValidateLinkResult = ({navigation, route}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            backgroundColor:
              route.params.urlStatus === 'secure'
                ? SECURE_LINK
                : route.params.urlStatus === 'unsecure'
                ? BAD_LINK
                : REVIEW_LINK,
            paddingTop: 200,
            width: '100%',
            height: Dimensions.get('window').height * 0.3,
            position: 'relative',
            top: 0,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            backgroundColor: '#F3F5FF',
            width: 45,
            height: 45,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: topOffset,
            marginHorizontal: 16,
            alignSelf: 'flex-start',
          }}>
          <ArrowLeft />
        </TouchableOpacity>
        {route.params.urlStatus === 'secure' && (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              overflow: 'hidden',
              alignSelf: 'center',
              borderRadius: 100,
              padding: 20,
              marginTop: -100,
              elevation: 2,
            }}>
            <Lottie
              source={animations.checked}
              style={{
                height: 150,
                width: 150,
                alignSelf: 'center',
              }}
              autoPlay
              loop={false}
              speed={1}
            />
          </View>
        )}
        {route.params.urlStatus === 'unsecure' && (
          <View
            style={{
              backgroundColor: '#EADADC',
              overflow: 'hidden',
              alignSelf: 'center',
              borderRadius: 100,
              padding: 30,
              marginTop: -100,
              elevation: 2,
            }}>
            <Lottie
              source={animations.notSecure}
              style={{
                height: 120,
                width: 120,
                alignSelf: 'center',
              }}
              autoPlay
              loop={false}
              speed={1}
            />
          </View>
        )}
        {route.params.urlStatus === 'review' && (
          <View
            style={{
              backgroundColor: '#EEEDC9',
              overflow: 'hidden',
              alignSelf: 'center',
              borderRadius: 100,
              padding: 30,
              marginTop: -100,
              elevation: 2,
            }}>
            <Review />
          </View>
        )}
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold',
          }}>
          {route.params.urlStatus === 'secure' && 'Authorized link!'}
          {route.params.urlStatus === 'unsecure' && 'Not authorized link!'}
          {route.params.urlStatus === 'review' && 'This link need review!'}
        </Text>
        <View
          style={{
            marginTop: 40,
            backgroundColor: '#F0F0F0',
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 10,
            width: '90%',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: '#000',
              paddingTop: 10,
            }}>
            {'Link'}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: '#959595',
              paddingTop: 10,
            }}>
            {route?.params?.urlValue}
          </Text>
        </View>

        {route.params.urlStatus === 'secure' ||
        route.params.urlStatus === 'unsecure' ? (
          <View
            style={{
              width: '90%',
              paddingBottom: 20,
              marginTop: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor:
                (route.params.urlStatus === 'secure' && '#4FEDBD') ||
                (route.params.urlStatus === 'unsecure' && BAD_LINK) ||
                (route.params.urlStatus === 'review' && REVIEW_LINK),
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-start',
                paddingVertical: 25,
                flexDirection: 'row',
                paddingHorizontal: 20,
                backgroundColor:
                  (route.params.urlStatus === 'secure' && SECURE_LINK) ||
                  (route.params.urlStatus === 'unsecure' && BAD_LINK) ||
                  (route.params.urlStatus === 'review' && REVIEW_LINK),
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  color:
                    (route.params.urlStatus === 'secure' && '#00BF85') ||
                    (route.params.urlStatus === 'unsecure' && '#D14545') ||
                    (route.params.urlStatus === 'review' && '#000'),
                }}>
                {route.params.messages.title}
              </Text>
            </View>
            {route.params.messages.body.map(item => (
              <View
                style={{
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  paddingTop: 15,
                  alignItems: 'center',
                  backgroundColor:
                    route.params.urlStatus === 'review' && REVIEW_LINK,
                }}>
                {route.params.urlStatus === 'secure' && <AuthorizedIcon />}
                {route.params.urlStatus === 'unsecure' && <UnAuthorizedIcon />}

                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                    fontWeight: '400',
                    color:
                      (route.params.urlStatus === 'secure' && '#00BF85') ||
                      (route.params.urlStatus === 'unsecure' && '#D14545'),
                  }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        ) : null}

        {route.params.urlStatus === 'review' && (
          <View
            style={{
              width: '90%',
              // alignItems: 'center',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#E7D321',
              paddingVertical: 25,
              flexDirection: 'row',
              paddingHorizontal: 20,
              backgroundColor: REVIEW_LINK,
              marginTop: 30,
            }}>
            <InfoIcon />
            <View style={{paddingLeft: 10}}>
              <Text
                style={{
                  fontWeight: '500',
                  color: '#000',
                  fontSize: 14,
                  paddingBottom: 10,
                }}>
                {route.params.messages.title}
              </Text>
              {route.params.messages.body.map(item => (
                <Text
                  style={{
                    fontWeight: '400',
                    color: '#000',
                    fontSize: 12,
                  }}>
                  {item}
                </Text>
              ))}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <ReadMore width={15} height={15} marginTop={15} />

                <Text
                  style={{
                    fontWeight: '500',
                    color: '#E7D321',
                    fontSize: 14,
                    paddingTop: 15,
                    paddingLeft: 10,
                  }}>
                  {'Read more...'}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ValidateLinkResult;
