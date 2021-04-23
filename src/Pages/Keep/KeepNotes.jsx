import React, { useState } from 'react';
import './addnotes.css'
import Button from "@material-ui/core/Button";
import Form from 'react-bootstrap/Form';
import AddIcon from '@material-ui/icons/Add';   

const KeepNote = () =>
{
    const [titled, setTitled] = useState();

    const Title_in = (events) =>
    {
        setTitled(events.target.value);
    }

    return(
        <>
            <main>
                <div className="container">
                    <form>      
                        <input 
                        type='text' 
                        placeholder="Title" 
                        autoComplete="off"
                        onChange={Title_in}
                        />
                        <textarea column="" row="" placeholder="Enter the notes here!!!" />
                        <Button variant="contained" color="disabled"  >
                            <AddIcon />
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default KeepNote;