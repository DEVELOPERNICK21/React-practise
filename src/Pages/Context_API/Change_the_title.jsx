import React, { Component,useState, useEffect } from 'react';

const ChangeTitle = () =>
{

    const [num, setNum] = useState(0);

    useEffect(() =>
    {
      document.title = `You clicked ${num} time's`
    })
    return(
        <>
            <button style={{color:"red" }} onClick={() => {setNum(num + 1)}}>CLick me to change the title </button>
        </>
    );
}

export default ChangeTitle;