import React from 'react';

function PokemonList({allPokemon, handlePokemonClick, addToFavorites}) {
  let content;
  if (allPokemon.length) {
    content = allPokemon.map((pokemon, index) => {
      return (
      <div className="poke" style={{display: 'inline-block'}}>
        <h4 key={index} onClick={() => handlePokemonClick(pokemon.name)} 
            style={{textTransform: 'uppercase'}}>
          {pokemon.name}
        </h4>
        <button className='fave' onClick={() => addToFavorites(pokemon.name)}>ADD TO FAVORITES</button>
      </div>
    )
  })
  } else {
    content = <h1>No Pokemon Found!</h1>
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default PokemonList;