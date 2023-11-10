import React, { useState, useEffect } from "react";

const PokemonList = () => {
    const [ products, setProducts ] = useState ([]);

    useEffect (() => {
        fetch ("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then((response) => response.json())
        .then ((data) => {
            const productNames = data.results.map((pokemon) => pokemon.name);
            setProducts(productNames);
        });
    }, []);

    return (
        <div>
            <h1>Lista de pokemon</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product} </li>
                ))}
            </ul>
        </div>
    )
}
export default PokemonList