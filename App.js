import React from 'react';
import { StyleSheet, Button, TextInput, View, SafeAreaView, Text, Alert } from 'react-native';
import {useState} from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { TouchableHighlight } from "react-native";




const Separator = () => {
  return <View style={styles.separator} />
};



export default function App() {
  const [inputValue, setInputValue] = useState();
  const [tasks, setTasks] = useState([]);


  const handleOnChange = (enteredValue)=>{
    setInputValue(enteredValue);
  }
  const addTask = ()=>{
    tasks.push(inputValue);
    setInputValue('');
    setTasks(tasks);
  }
  const clearTasks = () =>{
    setInputValue('');
    setTasks([]);
  }

  const removeTask = (elt, key) =>{
    console.log('elt', elt.target);
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Tasks list</Text>
        <Separator/>
        <Text style={styles.question}>A new task ?</Text>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="todo" value={inputValue} onChangeText={handleOnChange} onSubmitEditing={addTask} />
            <Button style={styles.btnAdd} title="Add" onPress={addTask} /><Button title="Clear" onPress={clearTasks} />
          </View>
      </View>
      <View style={styles.listItems}>
      {tasks.map(
          (task, index)=>{
            return (
            <ListItem key={'task_'+index} bottomDivider
                bottomDivider
  
                containerStyle={{ backgroundColor: "#efefef" }}
                disabledStyle={{ opacity: 0.5 }}
                onLongPress={removeTask}
                onPress={() => console.log("onPress()")}
                pad={20}
                topDivider
              >
              <ListItem.Content>
                <ListItem.Title><Text>#{index + 1}</Text></ListItem.Title>
              </ListItem.Content>
              <ListItem.Subtitle>
                  <Text>{task}</Text>
                </ListItem.Subtitle>
                <ListItem.CheckBox />
            </ListItem>
            )
          }
        )}
      </View>
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:30
  },
  container2 : {
      flexDirection: "column",
      alignItems:"flex-start"
  },
  listItems : {
    borderStyle:'dashed',
    padding:10,
    borderWidth:1,
    borderColor:'red'
},
  title: {
    textAlign: 'center',
    fontWeight:"bold",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  question:{
    textAlign:'center',
  },
  input:{
    textAlign:'center',
    width: "50%",
  },
  tasks:{
    borderStyle:'dashed',
    padding:10,
    borderWidth:1,
    borderColor:'red'
  },
  inputBox:{
    borderWidth:1,
    flexDirection:"row",
    alignItems:"stretch",
  },
  btnAdd:{
    backgroundColor:"#ff0000",
    borderWidth:2,
  }
});
