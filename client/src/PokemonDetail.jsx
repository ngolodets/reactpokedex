import React from 'react';

function PokemonDetail({currentPokemon, addToFavorites}) {
  let content;
  let url = currentPokemon.sprites ? currentPokemon.sprites : {};

  if (Object.keys(currentPokemon).length > 0) {
    //there are cats
    content = (
      <div>
        <div>
          <h1 style={{textTransform: 'uppercase'}}>{currentPokemon.name}</h1>
          <img src={url.front_default} style={{marginBottom: '0px', width: '200', height: '200'}} className="rotate"/>
          <img src={url.front_shiny} style={{marginBottom: '0px', width: '200', height: '200'}} />
        </div>
        <div style={{float: 'left', margin: '20px', marginTop: '20px'}}>
          <h6 className="pokedetail" >Height: {Math.floor(currentPokemon.height * 3.94)} inches</h6>
          <h6 className="pokedetail" >Weight: {Math.floor(currentPokemon.weight * 0.22)} pounds</h6>
          <h6 className="pokedetail" >Type(s): {currentPokemon.types && currentPokemon.types.map((type, i) => {
            return <p className="pokedetail" style={{fontStyle: 'italic'}}>{type.type.name}</p>
            })}
          </h6>
        </div>
        <div style={{float: 'left', margin: '20px', marginTop: '20px', position: 'relative', marginLeft: '75px'}}>
          <h6 className="pokedetail">Abilites: {currentPokemon.abilities && currentPokemon.abilities.map((ability, i) => {
            return <p className="pokedetail" style={{fontStyle: 'italic'}}>{ability.ability.name}</p>
            })}
          </h6>
          {/* <h6 className="pokedetail">Form(s): {currentPokemon.forms && currentPokemon.forms.map((form, i) => {
            return <p className="pokedetail">{form.name}</p>
            })} 
          </h6> */}
        </div>
        {/* <h3>Base Experience: {currentPokemon.base_experience}</h3> */}
        {/* <button onClick={() => addToFavorites(currentPokemon.name)}>ADD TO FAVORITES</button> */}
    </div>
    )
  } else {
    
    // content = <p>No Pokemon Selected</p>
    content = <img style={{width: '280px', height: '280px', textAlign: 'center'}} src="http://pngimg.com/uploads/pokeball/pokeball_PNG21.png" />
  }
  return (
    <>
      {content}
    </>
  );
}

export default PokemonDetail;
