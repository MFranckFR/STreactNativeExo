import React from 'react';
import { StyleSheet, Button, Modal, TextInput, View, SafeAreaView, Text, Alert } from 'react-native';
import {useState} from 'react';
import { FlatList } from 'react-native';
import TaskItem  from './components/TaskItem';

const Separator = () => {
  return <View style={styles.separator} />
};

export default function App() {
  const [inputValue, setInputValue] = useState();
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const handleOnChange = (enteredValue)=>{
    setInputValue(enteredValue);
  }
  const handleAddTask = ()=>{
    let _task = inputValue.trim();
    if(_task != ''){
      tasks.push(_task);
      setInputValue('');
      setTasks(tasks);
    }
  }
  const clearTasks = () =>{
    setInputValue('');
    setTasks([]);
  }

  const handRemoveTask = (index, item) =>{
    setTasks(tasks.filter((e,i)=>i !== index));
  }

  const handCancel = () =>{
    setShowModal(!showModal);
  }

  const renderItem = (item) => {
    const _index = item.index,
    _title = ('task#' + ( + 1)),
     _text = item.item,
     _styles = {
        text:styles.taskItemBox,
        title:styles.taskItemTitle,
        box:styles.taskItemBox,
        trash:styles.taskItemBtnTrash,
      };
    return (
      <TaskItem onDelete={()=>{handRemoveTask(_index, _text)}}
                onPress={()=>{console.log('Press btn ' + _index)}}
                index={_index}
                title={_title}
                text={_text}
                styles={_styles}
              />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Tasks list</Text>
        <Separator/>
      <Modal visible={showModal} 
              animationType={'fade'}
              transparent={false}>
        <Button  onPress={()=>{setShowModal(!showModal)}} 
          style={styles.question} title="A new task ?"></Button>
      </Modal>

      </View>
      <Modal style={styles.modal}
              visible={!showModal}
              animationType={'fade'}
              transparent={false}>

         <View style={styles.buttons}>
            <Button title="BACK" style={styles.btnCancel} onPress={handCancel} />
            <TextInput style={styles.input} placeholder="New Task" value={inputValue} onChangeText={handleOnChange} onSubmitEditing={handleAddTask} />
            <Button style={styles.btnAdd} title="Add" onPress={handleAddTask} />
         </View>

      <View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          style={styles.tasks}
          keyExtractor={item=>'index' + getRandomColor()}
        />
        <Button title="Clear" onPress={clearTasks} />
      </View>
      </Modal>
    </View>
  </SafeAreaView>
  );
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const styles = StyleSheet.create({
  modal:{
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:"center",
  },
  container: {
    padding:10
  },
  container2 : {
      flexDirection: "column",
      justifyContent:"center",
      alignItems:'center',
      padding:5,
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
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  question:{
    textAlign:'center',
  },
  input:{
    textAlign:'center',
    width: "100%",
    borderColor:'black',
    borderWidth:1,
    margin:10,
  },
  tasks:{
    padding:5,
    borderStyle:'solid',
    borderWidth:2,
    borderColor:'red',
    padding:5,
    marginLeft:5,
    width:"100%",
  },
  taskItemBox:{
    flexDirection:"row",
    backgroundColor:'lightgray',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    borderColor:'black',
    padding:10,
  },
  taskItemTitle:{
    fontWeight:'bold',
  },
  taskItemText:{
    backgroundColor:'#efefef',
    fontStyle:'italic',
    width:"50%",
  },
  taskItemBtnTrash:{
    borderColor:'yellow',
  },
  btnAdd:{
    backgroundColor:"#ff0000",
    borderWidth:2,
  },
  btnCancel:{
    borderWidth:1,
  },
  buttons:{
    padding:5,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    width:"50%",
  },
});

// <ListItem key={'task_'+index} bottomDivider
            //     bottomDivider
            //     containerStyle={{ backgroundColor: "#efefef" }}
            //     disabledStyle={{ opacity: 0.5 }}
            //     onLongPress={(event)=>handRemoveTask(event, key)}
            //     onPress={() => console.log("onPress()")}
            //     pad={20}
            //     topDivider
            //   >
            //   <ListItem.Content>
            //     <ListItem.Title><Text>#{index + 1}</Text></ListItem.Title>
            //   </ListItem.Content>
            //   <ListItem.Subtitle>
            //       <Text>{task}</Text>
            //     </ListItem.Subtitle>
            //     <ListItem.CheckBox />
            // </ListItem>

