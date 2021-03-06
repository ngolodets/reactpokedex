import React, {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import FavoritePokemonList from './FavoritePokemonList';

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [favoritePokemon, setFavoritePokemon] = useState({})
  const [favoritePokemonList, setFavoritePokemonList] = useState([])

  useEffect(() => {
    //console.log("Getting all pokemon")
    axios.get('http://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
      setAllPokemon(response.data.results);
    }).catch(function (error) {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    //console.log("Displaying info for current pokemon", currentPokemon.name)
    if (currentPokemon) {
      axios.get(`http://pokeapi.co/api/v2/pokemon/${currentPokemon}/`).then((response) => {
        setCurrentPokemon(response.data);
      }).catch(function (error) {
        console.log(error);
      })
    }
  }, [currentPokemon, favoritePokemon])

  // useEffect(() => {
  //   //console.log("Adding info for favorite pokemon", favoritePokemon.name)
  //   if (favoritePokemon) {
  //     axios.get(`http://pokeapi.co/api/v2/pokemon/${favoritePokemon}/`).then((response) => {
  //       setFavoritePokemon(response.data);
  //     }).then(
  //     axios.post('/pokemon/', favoritePokemon).then((response) => {
  //       setFavoritePokemonList(response.data)
  //     })
  //     ).catch(function (error) {
  //       console.log(error);
  //     })
  //   }
  // }, [favoritePokemon])

  useEffect(() => {
      axios.get('/pokemon/').then((response) => {
        setFavoritePokemonList(response.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, [favoritePokemonList.length]) 

  // Effects are not necessarity good for useEffect() functions. See FavoritePokemonList
  // useEffect(() => {
  //   //console.log('fave pokemon id:', favoritePokemonList)
  //   axios.delete('/pokemon/' + favoritePokemonList + '/').then((response) => {
  //     setFavoritePokemonList(response.data);
  //   }).catch(function (error) {
  //     console.log(error);
  //   })
  // }, [favoritePokemonList.length]) //[])


  return (
    <div style={{backgroundColor: 'rgb(166, 165, 165)', margin: '0', padding: '0'}}>
      <h1 style={{textAlign: 'center', padding: '5px', margin: '10px'}}>POKEDEX</h1>
      <div className="container">
        <div className="left">
          <PokemonList allPokemon={allPokemon} handlePokemonClick={setCurrentPokemon} setFavoritePokemonList={setFavoritePokemonList} />
        </div>
        <div className="right">
          <div className="rightdetail">
            <PokemonDetail currentPokemon={currentPokemon} addToFavorites={setFavoritePokemon}/>
          </div>
          <h3>MY FAVORITES:</h3>
          <div className="rightfave">
            <FavoritePokemonList favoritePokemon={favoritePokemonList} handlePokemonClick={setCurrentPokemon} setFavoritePokemonList={setFavoritePokemonList}/>
          </div>
          {/* <p>deletePokemon={setFavoritePokemonList</p> */}
          {/* <p>addToFavorites={setFavoritePokemon}</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
