import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddTodo from './components/AddTodo/AddTodo'

const Main = () => {
  return (
    <View>
      <Text>Add Todo</Text>
      <AddTodo/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})