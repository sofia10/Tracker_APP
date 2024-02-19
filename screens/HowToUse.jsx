import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FAQAccordion from '../components/FAQAccordion'
import Bot from '../components/Bot'

const HowToUse = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Bot/>
        <Text style={styles.title}>FAQ</Text>
      <FAQAccordion/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HowToUse

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20
  }
})