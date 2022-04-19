import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Todo from './src/components/Todo'
import { Provider } from 'react-redux'
import store from './src/store'
const App = () => {
  return (
  <Provider  store ={store}>
    <View style={styles.screen}>
    <Todo/> 
    </View>
  </Provider>
    
  )
}

export default App

const styles = StyleSheet.create({
  screen:{
    flex : 1,
    backgroundColor:"gray",
  }
})