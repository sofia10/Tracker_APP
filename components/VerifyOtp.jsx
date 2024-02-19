import { AppState, Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


const VerifyOtp = () => {

  const [appState, setAppState] = useState(AppState.currentState);

  const navigation = useNavigation();

  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  // Refs for the text inputs
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  };

  const handleVerifyOtp = async () => {
    const otp = otp1 + otp2 + otp3 + otp4;

    if (otp.length === 4) {
        try {
          const hasLocationPermission = await getLocationPermission();
              if (hasLocationPermission) {
                navigation.navigate('BotInfo');
              } else {
                navigation.navigate('PermissionExplanationScreen');
              }

            // Replace with backend OTP verification endpoint
            // const response = await axios.post('BACKEND_VERIFY_ENDPOINT', { otp });
            // Handle the response
            // if(response.data.succes){
            //   const hasLocationPermission = await getLocationPermission();
            //   if (hasLocationPermission) {
            //     navigation.navigate('BotInfo');
            //   } else {
            //     navigation.navigate('PermissionExplanationScreen');
            //   }
            // }
        } catch (error) {
            // Alert.alert("Verification Failed", "The OTP verification failed.");
        }
    } else {
        // Alert.alert("Incomplete OTP", "Please enter all 4 digits of the OTP.");
    }
  };

  const handleTextChange = (text, setOtpFunction, nextRef, prevRef, prevValue) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setOtpFunction(numericText);

    if (numericText.length > (prevValue ? prevValue.length : 0) && nextRef) {
      nextRef.current?.focus();
    } else if (numericText.length === 0 && prevValue && prevValue.length > 0 && prevRef) {
      prevRef.current?.focus();
    }
  };

  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
      handleVerifyOtp(); // Recheck permission when app comes to foreground
    }
    setAppState(nextAppState);
  };
  
  useEffect(() => {
    if (otp1 && otp2 && otp3 && otp4) {
        handleVerifyOtp();
    }

    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      appStateSubscription.remove();
    };

}, [otp1, otp2, otp3, otp4, appState]); // Dependencies array

  return (
    <View>
      <Text style={{textAlign: 'left', fontWeight: 'bold'}}>Enter the verification code:</Text>
      <View style={styles.container}>
        <TextInput
          ref={otp1Ref}
          style={styles.input}
          value={otp1}
          onChangeText={(text) => handleTextChange(text, setOtp1, otp2Ref, null, otp1)} 
          maxLength={1}
          keyboardType="numeric"
          autoFocus
        />
        <TextInput
          ref={otp2Ref}
          style={styles.input}
          value={otp2}
          onChangeText={(text) => handleTextChange(text, setOtp2, otp3Ref, otp1Ref, otp2)} 
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          ref={otp3Ref}
          style={styles.input}
          value={otp3}
          onChangeText={(text) => handleTextChange(text, setOtp3, otp4Ref, otp2Ref, otp3)} 
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          ref={otp4Ref}
          style={styles.input}
          value={otp4}
          onChangeText={(text) => handleTextChange(text, setOtp4, null, otp3Ref, otp4)} 
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
      {/* <TouchableOpacity
        onPress={handleVerifyOtp}
        style={{
          backgroundColor: '#04213b',
          paddingVertical: 12,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          marginTop: 20
        }}>
        <Text style={{color: "#FFF", fontSize: 20}}>Verify OTP</Text>
      </TouchableOpacity> */}
    </View>
  )
}



export default VerifyOtp

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '20%',
    height: 80,
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#000',
  }
})