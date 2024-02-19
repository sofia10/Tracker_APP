import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import WorkingToggle from '../components/WorkingToggle'
import { useNavigation } from '@react-navigation/native';

const WorkingStatus = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.title}>My working status for today</Text>
      <View style={styles.toggleBlock}>
          <WorkingToggle/>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomTabNavigation')}
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

export default WorkingStatus

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 22
    },
    toggleBlock: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})