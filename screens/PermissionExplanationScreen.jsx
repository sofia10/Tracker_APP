import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Linking from 'expo-linking';

const PermissionExplanationScreen = () => {
  const openSettings = () => {
    Linking.openSettings();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>
          We need access to your location to provide the best experience in our app. 
          This allows us to show you personalized content and suggestions based on your area.
          Please enable location services for our app in your device settings.
        </Text>
        <TouchableOpacity style={styles.button} onPress={openSettings}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PermissionExplanationScreen

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50
  },
  button: {
    backgroundColor: '#04213b',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    position: 'absolute',
    bottom: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
})