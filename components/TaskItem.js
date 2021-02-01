import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { StyleSheet, Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TaskItem = (props) =>{
   const {index, 
    title, 
    text,
    onPress,
    onDelete, 
    styles} = props;

    
    //console.log('props', props);
    return (
       <TouchableNativeFeedback 
       key={'task_' + index}
       onPress={onPress}>
         <View
         style={styles.box}
         >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={onDelete}>
               <Icon name="trash" size={30} color="#900" style={styles.trash}/>
            </TouchableOpacity>
         </View>
    </TouchableNativeFeedback>
      );
}
export default TaskItem;

// onPress={()=>{removeTask(index, item.item)}}