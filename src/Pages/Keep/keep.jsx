import React from 'react';
import FooterKeep from './FooterKeeps';
import HeaderKeep from './Header';
import KeepNote from './KeepNotes';
import './Keepstyle.css'

const Keep = () =>
{
    return(
        <>
        <div className='main_div'>
            <HeaderKeep />  
            <KeepNote />
            <FooterKeep />
        </div>
        </>
    );
}

export default Keep;