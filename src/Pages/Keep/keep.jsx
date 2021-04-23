import React from 'react';
import FooterKeep from './FooterKeeps';
import HeaderKeep from './Header';
import KeepNote from './KeepNotes';
import './Keepstyle.css'
import ShowNotes from './ShowNotes';


const Keep = () =>
{
    return(
        <>
        <div className='main_div'>
            <HeaderKeep />  
            <KeepNote />
            <ShowNotes />
            <FooterKeep />
        </div>
        </>
    );
}

export default Keep;