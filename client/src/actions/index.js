import axios from 'axios';
import Swal from 'sweetalert2';

export function getPokemons(){
return async function(dispatch){
  const response = await axios.get('pokepage-production.up.railway.app/pokemons');
  return dispatch({
    type: 'GET_POKEMONS',
    payload: response.data
  })
}};
export function getTypes(){
  return async function(dispatch){
    const response = await axios.get('pokepage-production.up.railway.app/types')
    return dispatch({
      type: 'GET_TYPES',
      payload: response.data
    })
  }};
  export function getMoves(){
    return async function(dispatch){
      const response = await axios.get('pokepage-production.up.railway.app/moves')
      return dispatch({
        type: 'GET_MOVES',
        payload: response.data
      })
  }};
  export function getAbilities(){
    return async function(dispatch){
      const response = await axios.get('pokepage-production.up.railway.app/abilities')
      return dispatch({
        type: 'GET_ABILITIES',
        payload: response.data
      })
  }};
export function getName(name){
  return async function(dispatch){
    try{
      const response = await axios.get(`pokepage-production.up.railway.app/pokemons?name=${name}`)
      return dispatch({
        type: 'GET_NAME',
        payload: response.data
      })
    } catch(e){
      Swal.fire({
        icon: 'error',
        title: 'Error 404',
        text: 'Pokemon not found!',
      })
    }
  }};
export function PostPokemon(payload){
  return async function(){
      try{
          const response = await axios.post("pokepage-production.up.railway.app/pokemons", payload)
          return response
      }catch(error){
          Swal.fire({
            icon: 'error',
            title: 'Error 412',
            text: 'Pokemon name in use',
          })
      }
  }};
export function filterPokemonByType(payload){
  return {
      type: "FILTER_POKEMON_BY_TYPE",
      payload
  }};
  export function filterPokemonByMove(payload){
    return {
        type: "FILTER_POKEMON_BY_MOVE",
        payload
    }};
    export function filterPokemonByAbility(payload){
      return {
          type: "FILTER_POKEMON_BY_ABILITY",
          payload
      }};
export function filterPokemonByOfficial(payload){
  return {
      type: "FILTER_POKEMON_BY_OFFICIAL",
      payload
  }};
export function filterPokemonByName(payload){
  return {
      type: "FILTER_POKEMON_BY_NAME",
      payload
  }};
export function sortPokemonByAttack(payload){
  return {
      type: "SORT_POKEMON_BY_ATTACK",
      payload
  }};
  export function sortPokemonByDefense(payload){
    return {
        type: "SORT_POKEMON_BY_DEFENSE",
        payload
    }};
export function sortPokemonByWeight(payload){
  return {
    type: 'SORT_POKEMON_BY_WEIGHT',
    payload
  }};
export function sortPokemonByHeight(payload){
    return {
        type: "SORT_POKEMON_BY_HEIGHT",
        payload
    }};
export function sortPokemonBySpAttack(payload){
      return {
          type: "SORT_POKEMON_BY_SPATTACK",
          payload
      }};
export function sortPokemonBySpDefense(payload){
        return {
            type: "SORT_POKEMON_BY_SPDEFENSE",
            payload
        }};
export function sortPokemonByHp(payload){
    return {
        type: "SORT_POKEMON_BY_HP",
        payload
    }};
export function sortPokemonBySpeed(payload){
      return {
          type: "SORT_POKEMON_BY_SPEED",
          payload
      }};
export function getDetail(id) {
  return async function(dispatch){
      try{
      const response = await axios.get(`pokepage-production.up.railway.app/pokemons/${id}`)
      return dispatch({
          type: "GET_DETAIL",
          payload: response.data
      })
      } catch (error) {
          alert("Error 404: Pokemon info dont found, see if that pokemon exist first.")
      }
  }};
export function removePokemon(id){
  return async function(dispatch){
      try{       
      const response = await axios.delete(`pokepage-production.up.railway.app/deleted/${id}`);
      return dispatch({
          type: "REMOVE_POKEMON",
          payload: response.data
      })}
      catch(error){
        console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Error 412',
            text: 'Cant delete pokemon',
          })
      }
  }};
export function clearDetail(){
  return {
      type: "CLEAR_DETAIL"
  }};