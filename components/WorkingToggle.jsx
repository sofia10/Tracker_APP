import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const WorkingToggle = () => {
  const [isWorking, setIsWorking] = useState(false);

  const toggleWorkingStatus = () => setIsWorking(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#34C759" }}
        thumbColor={isWorking ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleWorkingStatus}
        value={isWorking}
        style={styles.switchStyle}
      />
      <Text style={styles.statusText}>{isWorking ? "On" : "Off"}</Text>
    </View>
  )
}

export default WorkingToggle

const styles = StyleSheet.create({
  statusText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center'
  },
  switchStyle: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] 
  }
})