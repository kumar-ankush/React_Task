import React,{useState} from 'react';
import './Todo.css'
import TodoList from './TodoList'
const Todo = () => {
    const [inputList,setInputList]=useState("");
    const [items,setItems]=useState([])
    
    const itemEvent=(event)=>{     //onChange returns an event always
        
        // const val=[event.target.value];
        // console.log("The Varibale data stored"+val);
        // // if(!event.text || /^\s*$/.test(event.text))
        // {
        //     return;
        // }
       
        // const newTodos=[event,...items]
         setInputList(event.target.value)
        //  setInputList([{id:Math.random()*1000,str:event.target.value}])
        //  console.log("The chnaged state is "+inputList.id)
         
    }
    const display=()=>{
        if(!inputList) {return}
       setItems(item =>  [...item,inputList])
       console.log("asdsada "+items)
       setInputList("");
    }
    //Copied funtion for Hit enter
   const keyPress=(e)=>{
        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here
           display()
        }
     }
    
    //  const checked=(index)=>{
    //     // if(index %2 !==0)
    //     // {
    //         console.log("Checked Work")
    //     setData({
    //         idx:index,checked:true
    //     })
    // // }
    //     // else
    //     // {
    //     //     setData({
    //     //         idx:index,checked:false
    //     //     })
    //     // }
    //     // console.log(index.target.value)
    //  }
     const deleteItems=(index)=>{
        //  let [arr]=[items];
        //  arr.splice(index,1);
        //  setItems(arr);
        setItems(item => {
            return item.filter((arrElem,i)=>{
                return i !==index;
            })
        })

    }
    return (
                <div className="container-fluid">
                    <div className="card shadow-sm">
                        <div>
                            <h1 className="h1 text-center">To Do List</h1>
                                <div className="d-flex justify-content-center">
                                    <input type="text " id="Input_tag" placeholder="Add List Item" onChange={itemEvent} value={inputList} onKeyDown={keyPress}/>
                                    <button className="btn btn-dark" onClick={display}>+</button>
                                </div>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                    
                            {items.map((x,i)=>{
                                 return (
                                            <TodoList 
                                           
                                            x={x}
                                            deleteItems={()=>deleteItems(i)}
                                            key={i}
                                            id={i}
                                            />
                                        )
                                        }
                                    )
                            }

                                            <li className="card  list-group-item text-center " id="Text_placed1">{inputList}</li>
                    </ul>
                
                </div> 
        
    );
    }

export default Todo;
