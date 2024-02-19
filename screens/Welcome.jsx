import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import styles from './Welcome.style';
import VerifyOtp from '../components/VerifyOtp';
// import TextInputMask from 'react-native-text-input-mask';

const Welcome = () => {

  const [mobileNumber, setMobileNumber] = useState([]);
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const countryCode = '+1';


  const handleMobileNumberChange = (number) => {
    setMobileNumber(number);
  };

  const fullMobileNumber = `${countryCode} ${mobileNumber}`;

  const handleSubmit = async () => {
    const fullMobileNumber = `${countryCode}${mobileNumber}`;
    
    try {
      // Replace this with your actual backend call
      // const response = await axios.post('BACKEND_ENDPOINT', { mobileNumber: fullMobileNumber });
      // if (response.data.success) {
      //   setSuccessMessage('Success message from backend');
      //   setErrorMessage('');
      // }

      // Example success response
      setIsSuccess(true);
      setErrorMessage('');
    } catch (error) {
      // Handle the error response
      // Example error message
      setIsSuccess(false);
      setSuccessMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>Welcome to Tracker app</Text>
      <Text style={styles.subTitle}>Verification</Text>
      <Text style={styles.description}>We will send you a One Time Password on your phone number</Text>
      <View>
        <TextInput
          style={styles.mobileInput}
          placeholder="Enter Mobile Number"
          value={fullMobileNumber}
          onChangeText={(text) => handleMobileNumberChange(text.replace(countryCode, '').trim())}
          keyboardType="phone-pad"
          maxLength={13}
        />
        {isSuccess !== true && (
          <TouchableOpacity
            onPress={handleSubmit}
              style={{
                backgroundColor: fullMobileNumber.length < 13 ? '#cdcbcb' : '#04213b',
                paddingVertical: 12,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}
              disabled={fullMobileNumber.length < 13}>
              <Text style={{ color: fullMobileNumber.length < 13 ? '#888888' : '#FFF', fontSize: 20 }}>
                Next
              </Text>
            </TouchableOpacity>
        )}
        
        {isSuccess !==null && (
          <VerifyOtp/>
        )}
        {errorMessage.length > 0 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

      </View>
    </SafeAreaView>
  )
}

export default Welcome