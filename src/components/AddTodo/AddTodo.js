import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../../actions'
import {cuid} from 'cuid'
const AddTodo = () => {
    const [task,setTask] = useState('');
    const dispatch = useDispatch()
const handleInputChange = (text) => {
   setTask(text)
}
const handleSubmit = () =>{
   dispatch(addTodo({task:Task ,id:cuid()}))
}
  return (
    <View>
        <View >
        <TextInput onChange={handleInputChange} />
      <TouchableOpacity onPress={handleSubmit}>
      <Text>Add</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}
export default AddTodo

const styles = StyleSheet.create({})