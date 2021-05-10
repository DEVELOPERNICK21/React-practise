import { colors } from '@material-ui/core';
import React, { Component,useEffect, useState } from 'react';




const UseEffect = () =>
{

    
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() =>
    {
        alert("Hey! it's Clicked")
    },[])
    // useEffect(() =>
    // {
    //     alert("Hey! it's Clicked")
    // },[nums])

    // useEffect(() =>
    // {
    //     alert("Hey! it's Clicked")
    // },[num])


    return(
        <>
            <button style={{color:"red" }}  onClick={() => { setNum(num+1)}}>Click {num} </button>
            <button style={{color:"red" }}  onClick={() => { setNums(nums+1)}}>Click {nums} </button>
        </>
    );
}

export default UseEffect;

