import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const deviceWidth = Dimensions.get('window').width;

const Bot = () => {
    const isFocused = useIsFocused();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pauseAsync();
        } else {
            videoRef.current.playAsync();
        }
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        if(!isFocused && videoRef.current) {
            videoRef.current.pauseAsync();
        }
    }, [isFocused]);

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 26, marginTop: 30, textAlign: 'center'}}>How to use Bot</Text>
        <TouchableWithoutFeedback onPress={togglePlayPause}>
            <Video 
                ref={videoRef}
                source={require('../assets/videos/instruction.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping
                style={{ width: deviceWidth, height: 300 }}
            />
        </TouchableWithoutFeedback>      
    </View>
  )
}

export default Bot

const styles = StyleSheet.create({})