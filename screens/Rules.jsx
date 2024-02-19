import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const rules = [
  'Do not do late/early Pickup or Delivery without our confirmation',
  'Never cancel the booked load',
  'Must accept Tracking app if requested',
  'Never do partials (multiple loads at the same time)',
  'Once booked, do not disable the tracking app',
  'Once booked, must have good communication',
];

const Rules = () => {
  
  return (
     <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Company's Policy</Text>
      <View style={styles.ruleList}>
        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleItemContainer}>
            <Text style={styles.ruleIcon}>⛔️</Text>
            <Text style={styles.ruleText}>{rule}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.warning}>
        Please read our rules carefully; violation of these rules may result in CHARGES, a Decrease in RATING, and CONTRACT TERMINATION in most cases
      </Text>
    </SafeAreaView>
  )
}

export default Rules

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 30,
  },
  ruleList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 50,
    width: '90%',
  },
  ruleItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  ruleIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  ruleText: {
    fontSize: 16,
  },
  warning: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    lineHeight: 26,
    textAlign: 'center'
  },
})