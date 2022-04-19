import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, deleteTodo, updateTodo} from '../actions/index';

const Todo = () => {
  const [inputData, setInput] = useState('');
  const {todoReducers} = useSelector(state => state);
  const dispatch = useDispatch();
  const HloHandle = () => {
    alert('hlo');
  };
  const HandleChnge = e => {
    setInput(e);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.Text}>Add Todos</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(addTodo(inputData));
          setInput('');
        }}>
        <Text style={styles.Add}>+</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.play}
          value={inputData}
          onChangeText={e => {
            HandleChnge(e);
          }}
        />
      </View>
      <ScrollView>
        {todoReducers?.map(elem => (
          <>
            <View key={elem.id}>
              <TouchableOpacity onPress={() => setInput(elem.payload)}>
                <Text style={styles.on}>{elem.payload}</Text>
              </TouchableOpacity>

              <Button
                style={styles.Button}
                title="delete"
                onPress={() => dispatch(deleteTodo(elem.id))}
              />

              <Button
                title="update"
                onPress={() => {
                  dispatch(updateTodo(elem.id, inputData));
                  setInput('');
                }}
              />
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  on: {
    fontSize: 24,
    color: 'black',
    backgroundColor: 'white',
    margin: 13,
    padding: 16,
    borderRadius: 12,
  },
  Button: {
    margin: 10,
    marginBottom: 34,
    padding: 45,
  },
  Text: {
    fontSize: 34,
  },
  play: {
    fontSize: 34,
    color: 'red',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
    padding: 26,
  },
  Add: {
    position: 'absolute',
    fontSize: 44,
    left: 345,
    bottom: 6,
  },
  screen: {
    backgroundColor: 'gray',
  },
});
