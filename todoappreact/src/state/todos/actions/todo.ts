import {TodoStatus} from "./../todo"

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const addTodo = (text:string) => {
   return {
       type:'ADD_TODO',
       id:uuidv4(),
       title:text
   }
};

export const markDone = (id:string) => {
    return {
        type:'MARK_DONE',
        id:id
    }
 };
 
 export const removeItem = (id:string) => {
    return {
        type:'REMOVE_ITEM',
        id:id
    }
 };

 export const markAllDone = () => {
    return {
        type:'MARK_ALL'
    }
 };