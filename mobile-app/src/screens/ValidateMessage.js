/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {
  ValidateMessageAvatar,
  SearchingIcon,
  ArrowLeft,
} from '../assets/images/svgImages';
import {TextInput} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const topOffset =
  Platform.OS === 'ios' ? getStatusBarHeight() + 20 : getStatusBarHeight() - 20;

const ValidateMessage = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [urlStatus, setUrlStatus] = useState('unsecure');
  const [urlValue, setUrlValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // default value to validate it using useForm
  const validateLink = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ValidateMessageResult', {
        messageStatus: urlStatus,
        messageValue: urlValue,
        extractedTarget: 'www.bit.ly',
        messages: {
          title:
            urlStatus === 'secure'
              ? 'Passed 2 out of 2 scrutiny criteria'
              : urlStatus === 'unsecure'
              ? '3 issues have fond'
              : urlStatus === 'review'
              ? 'The link is sent for review'
              : '',
          body:
            urlStatus === 'unsecure'
              ? [
                  'This is official government service provider website',
                  'This website is hosted in Saudi',
                ]
              : urlStatus === 'secure'
              ? [
                  'This is a fake copy website from amazon.sa',
                  'This website is not hosted in Saudi',
                  'This online store is not registered in maroof',
                ]
              : urlStatus === 'review'
              ? ['We will let you once we validated ']
              : [''],
        },
      });
    }, 1500);
  };

  const onUrlChange = text => {
    setUrlValue(text);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: topOffset,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            backgroundColor: '#F3F5FF',
            //   padding: 20,
            width: 45,
            height: 45,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 16,
            alignSelf: 'flex-start',
            marginVertical: 10,
          }}>
          <ArrowLeft />
        </TouchableOpacity>

        <ValidateMessageAvatar height={300} />
        <Text
          style={{
            marginVertical: 30,
            textAlign: 'center',
            alignSelf: 'center',
            fontWeight: 'bold',
            paddingLeft: 21,
            fontSize: 24,
          }}>
          {'Validate Messages'}
        </Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              width: '90%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
            },
            errorMessage !== '' ? styles.errorStyle : null,
          ]}>
          <View style={{alignSelf: 'flex-start', marginTop: 5}}>
            <SearchingIcon />
          </View>
          <TextInput
            placeholder="Paste the message to validate"
            keyboardType="default"
            autoCapitalize="none"
            blurOnSubmit={true}
            placeholderTextColor={'#B1B1B1'}
            onChangeText={value => onUrlChange(value)}
            defaultValue={urlValue}
            multiline={true}
            style={{flex: 1, paddingLeft: 15, fontWeight: '500', height: 211}}
          />
        </View>
        {errorMessage !== '' && (
          <Text style={[styles.errorText, {color: '#EF4444'}]}>
            {errorMessage}
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => validateLink()}
          style={{
            backgroundColor: '#03C1A6',
            width: '90%',
            borderRadius: 10,
            padding: 15,
            marginTop: 20,
            alignItems: 'center',
          }}>
          {loading ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              <ActivityIndicator animating size="small" color={'#FFFFFF'} />
            </View>
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              {'Validate'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ValidateMessage;

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
