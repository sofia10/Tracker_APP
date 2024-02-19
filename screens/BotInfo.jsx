import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import Bot from '../components/Bot';

const BotInfo = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Bot />
      <TouchableOpacity
        // onPress={() => navigation.navigate('BottomTabNavigation')}
        onPress={() => navigation.navigate('WorkingStatus')}
        style={{
          backgroundColor: '#04213b',
          paddingVertical: 12,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          marginTop: 20,
          position: 'absolute',
          bottom: 100,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: "#FFF", fontSize: 20}}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BotInfo

const styles = StyleSheet.create({})