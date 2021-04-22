import React from 'react';
import './addnotes.css'
import Button from "@material-ui/core/Button";
import Form from 'react-bootstrap/Form';
import AddIcon from '@material-ui/icons/Add';   

const KeepNote = () =>
{
    return(
        <>
            <main>
                {/* <div className="main_note"> */}
                <div className="container">
                    <form>      
                        <input type='text' placeholder="Title" autoComplete="off"/>
                        <textarea column="" row="" placeholder="Enter the notes here!!!" />
                        <Button className="but" >
                            <AddIcon />
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default KeepNote;