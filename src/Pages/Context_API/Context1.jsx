import React, { createContext } from 'react';
import ComB from './Context2';

const FirstName = createContext();
const LastName = createContext();
const Theme = createContext();

const ComA = () => 
{
    return(
        <>
        <FirstName.Provider value={"Nick"}>
        <LastName.Provider value={"Limitless"}>
        <Theme.Provider value={"red"}>
            <ComB />
        </Theme.Provider>
        </LastName.Provider>
        </FirstName.Provider>
        </>
    );
}

export default ComA;
export {FirstName, LastName,Theme};