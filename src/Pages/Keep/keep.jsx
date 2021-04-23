import React, { useState } from 'react';
import FooterKeep from './FooterKeeps';
import HeaderKeep from './Header';
import KeepNote from './KeepNotes';
import './Keepstyle.css'
import ShowNotes from './ShowNotes';


const Keep = () => {
    const [addedNote, setAddedNote] = useState([]);

    const addNote = (note) => {
        setAddedNote((prevData) => {
            return [
                ...prevData, note,
            ];
        })
        console.log(note);
    }

    return (
        <>
            <div className='main_div'>
                <HeaderKeep />

                <KeepNote noteHere={addNote} />

               
                <div className="notesstyle">
                    {addedNote.map((val, index) => {
                        return (<ShowNotes key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                        />);
                    })}
                </div>
                <FooterKeep />
            </div>
        </>
    );
}

export default Keep;