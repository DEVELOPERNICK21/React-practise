import React, {useContext} from 'react';
import ComC from './Context3';
import { FirstName,LastName } from "./Context1";
import {Theme} from './Context1';
const ComB = (props) => 
{
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return(
        <>
        <Theme.Consumer>
            {(themeDefault) => 
            {

            return(
                <h1>this is useContext {fname} {lname} </h1> 
            );
                
            }}
        </Theme.Consumer>
        </>
    );
}

export default ComB;