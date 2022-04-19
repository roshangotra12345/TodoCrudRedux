 export const addTodo = (data) =>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            payload:data
        }
    }
}


export const deleteTodo = (id) =>{
    return{
        type:"DELETE_TODO",
        payload : id
    }
}


export const updateTodo = (id , data) =>{
    return{
        type:"UPDATE_TODO",
        payload:{
            id:id,
            payload:data  
        }
    }
}

