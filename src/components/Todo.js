import React,{useState} from 'react'
import { useSelector,useDispatch} from "react-redux";
import { addTodo,deleteTodo } from '../actions';
import './todo.css'; 

const Todo = () => {

    const [inputData, setinputData] = useState('');
    const list=useSelector((state)=>state.todoReducers.list);

    const dispatch = useDispatch();
    return (
        
        <div className="main-div" >
            <div className="child-div" >
                <figure>
                    <figcaption>✔ Add List Below</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add Items..." value={inputData} onChange={(event)=>setinputData(event.target.value)} />
                    <i className="fa fa-plus add-btn" onClick={()=>inputData? dispatch(addTodo(inputData),setinputData("")):alert("Please enter data")}></i>
                </div>

                <div className="showItems">

                    {
                        list.map((elem)=>{
                            return (
                            <div className="eachItem" key={elem.id}>
                                <input type="checkbox" name="checkox"/>
                            <h3>{elem.data}</h3>
                            <div className="todo-btn">
                            <i className="far fa-trash-alt dlt-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                         </div>
                        </div>
                        )

                        })
                    }

                   
                </div>
                

            </div>
        </div>

            
        
    )
}

export default Todo
