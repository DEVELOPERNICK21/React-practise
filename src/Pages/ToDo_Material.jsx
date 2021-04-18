import React, { useState } from 'react';
import './material_todo.css'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoMaterial = () =>
{
    const [list, setList] = useState("Nick2")
    const [item, setItem] = useState([]);

    const inValue = (events) =>
    {
        return(
            setList(events.target.value)
        );
    }

    const butnPress = () => {
            setItem((arra) => {
                return[...arra,list]
                }
                );
                setList()
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                            <h1>TODO LIST</h1>
                <br />
                    <input type="text" onChange={inValue} placeholder="Enter The Task" />
                    <button className="newBtn" onClick={butnPress}><AddIcon /></button>
                <br />
                        <ol>
                            <li>{item.map( (val) => 
                            {
                                return(
                                    <>
                                        {val}
                                    </>
                                );
                            })   
                            }
                            </li>
                    {/* <button className="newBtn"><DeleteIcon /></button> */}
                        </ol>
                <br />
                </div>
            </div>
        </>
    );
}

export default TodoMaterial;