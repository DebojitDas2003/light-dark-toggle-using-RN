import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [background, setBackground] = useState('')

  const toggle = () => {
    if (background !== `rgb(0,0,0)`) {
      setBackground(`rgb(0,0,0)`)
    } else {
      setBackground(`rgb(255,255,255)`)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={styles.title}>index</Text>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.buttonText}>Toggle</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    padding: 20,
  },
})

export default index
