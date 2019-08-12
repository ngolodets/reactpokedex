import React from 'react';
import axios from 'axios';

function FavoritePokemonList({favoritePokemon, deletePokemon, handlePokemonClick, setFavoritePokemonList}) {
  let content = favoritePokemon ? favoritePokemon : [];
  
  function deletePokemon(id) {
    axios.delete(`/pokemon/${id}`).then(function() {
      axios.get('/pokemon/').then(response => {
        setFavoritePokemonList(response.data)
      })
    })
  }

  // function handleChange(e) {
  //   e.preventDefault()
  //   setFavoritePokemonList({name: e.target.value});
  //   console.log(e.target.value)
  //   console.log(favoritePokemon)
    
  // }
  // function updatePokemon(e, id) {
  //   e.preventDefault()
  //   const {name} = e.target.value
  //   console.log(e.target.value)
  //   console.log(favoritePokemon)
  //   axios.put(`/pokemon/${id}`, {name}).then(function() {
  //     axios.get('/pokemon/').then((response) => {
  //       setFavoritePokemonList(response.data)
  //     })
  //   })
  // }

  if (favoritePokemon.length) {
    content = favoritePokemon.map((pokemon, index) => {
      // return <h4 key={index} onClick={() => handlePokemonClick(pokemon.name)}>{pokemon.name}</h4>
      return (
      <div key={index} style={{textAlign: 'center'}}>
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
        {/* <form onSubmit={() => updatePokemon(pokemon.id)}> */}
          {/* <input type="text" onSubmit={(e) => handleChange(e.target.value)}/>
          <input type='submit' value="Submit" onSubmit={() => updatePokemon(pokemon.id)}/> */}
        {/* </form> */}
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

export default FavoritePokemonList;