import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux'
import store from './src/store'


const App = () => {
  return (
    <View>
      <Provider store={store}>
      <Main/>
      </Provider>  
    </View>
  )
}

export default App

const styles = StyleSheet.create({})