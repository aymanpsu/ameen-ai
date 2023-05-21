/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {ArrowLeft, LinkIcon, Verified} from '../assets/images/svgImages';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const topOffset =
  Platform.OS === 'ios' ? getStatusBarHeight() + 20 : getStatusBarHeight() - 20;

const data = [
  {url: 'https://www.absher.sa', date: 'Sun, May 21'},
  {url: 'https://uas.gaca.gov.sa', date: 'Mon, May 17'},
  {url: 'https://www.awqaf.gov.sa', date: 'Sun, May 16'},
  {url: 'https://www.etimad.sa', date: 'Sun, May 21'},
  {url: 'https://www.qabol.sa', date: 'Sun, May 21'},
  {url: 'https://insights.expro.gov.sa', date: 'Sun, May 21'},
  {url: 'https://snad.org.sa', date: 'Sun, May 26'},
];

const AuthorizedLinks = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [urlStatus, setUrlStatus] = useState('secure');
  const [urlValue, setUrlValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // default value to validate it using useForm
  const validateLink = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Result', {
        urlStatus: urlStatus,
        urlValue: urlValue,
      });
    }, 1500);

    console.log('validateLink called');
  };

  const onUrlChange = text => {
    setUrlValue(text);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: topOffset,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            backgroundColor: '#F3F5FF',
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

        {data.map(item => (
          <View
            style={{
              backgroundColor: '#F3F5FF',
              paddingHorizontal: 11,
              borderRadius: 12,
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 65,
              marginVertical: 15,
            }}>
            <View
              style={{
                padding: 20,
                backgroundColor: '#FFF',
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <LinkIcon />
            </View>
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{
                  paddingBottom: 10,
                  fontWeight: '600',
                  color: '#000',
                  fontSize: 12,
                }}>
                {item.url}
              </Text>
              <Text
                style={{
                  paddingBottom: 10,
                  fontWeight: '400',
                  color: '#000',
                  fontSize: 10,
                }}>
                {item.date}
              </Text>
            </View>
            <View>
              <Verified />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AuthorizedLinks;

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
