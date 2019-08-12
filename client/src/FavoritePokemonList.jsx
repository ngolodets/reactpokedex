import React from 'react';

function FavoritePokemonList({favoritePokemon, deletePokemon, handlePokemonClick}) {
  let content = favoritePokemon ? favoritePokemon : [];
  if (favoritePokemon.length) {
    content = favoritePokemon.map((pokemon, index) => {
      // return <h4 key={index} onClick={() => handlePokemonClick(pokemon.name)}>{pokemon.name}</h4>
      return (
      <div style={{textAlign: 'center'}}>
        <h4 key={index} onClick={() => handlePokemonClick(pokemon.name)} 
          style={{textTransform: 'uppercase', 
                  display: 'inline-block',
                  margin: '3px',
                  padding: '5px',
                  border: '0.5px solid black',
                  width: '100px',
                  height: '25px',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  fontFamily: "'Saira Stencil One', cursive",
                  fontSize: '12px'}}>
          {pokemon.name}
        </h4>
        <button className='fave' onClick={() => deletePokemon(pokemon.id)}>DELETE</button>
      </div>
    )})
  } else {
    content = <h1>No Pokemon Found!</h1>
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default FavoritePokemonList;