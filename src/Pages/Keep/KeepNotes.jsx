import React, { useState } from "react";
import "./addnotes.css";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import AddIcon from "@material-ui/icons/Add";

const KeepNote = (props) => {
    const [note, setNote] = useState(
        {
            title: "",
            content: "",
        }
    );

    const InputData = (event) => {
        const { value, name } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
        console.log(note);
    }

    const addEvent = () =>
    {
        props.noteHere(note);
    }


    return (
        <>
            <main>
                <div className='container'>
                    <form>
                        <input
                            type='text'
                            name="title"
                            maxLength="40"
                            value={ note.title}
                            onChange={InputData}
                            placeholder='Title'
                            autoComplete='off'
                        />
                        <textarea column=''
                            row=''
                            maxLength="150"
                            name="content"
                            value={note.content }
                            onChange={InputData }
                            placeholder='Enter the notes here!!!'
                        />
                        <Button onClick={addEvent} variant='contained' color='disabled'>
                            <AddIcon />
                        </Button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default KeepNote;
