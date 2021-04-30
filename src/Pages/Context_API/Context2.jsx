import React from 'react';
import ComC from './Context3';
import {Theme} from './Context1';
const ComB = (props) => 
{
    return(
        <>
        <Theme.Consumer>
            {(themeDefault) => 
            {

            return <ComC  MyTheme={themeDefault}/> 
                
            }}
        </Theme.Consumer>
        </>
    );
}

export default ComB;