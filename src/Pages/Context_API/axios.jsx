import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonApi = () =>
{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getApiData() {
           const  res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           console.log(res);
           setName(res.data.name);
           setMoves(res.data.moves.length);
           console.log(res.data.name);
           console.log(res.data.moves.length);
           
            // = res.data.name;
        }
        getApiData();
        })
    return(
        <>
            <h1>Pokemon API</h1>
            <h1>You selected {num} value</h1>
            <h1>You selected {name} </h1>
            <h1>You selected {moves} moves</h1>
            <select value={num} onChange={(event) => setNum(event.target.value) }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>25</option>
            </select>
        </>
    );
}

export default PokemonApi;