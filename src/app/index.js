import './styles/styles.scss';
import 'bootstrap';

import {show} from '../app/script/callApi'
import {showInput} from '../app/script/callApi'
import {findRandom} from '../app/script/callApi'
// import {showfavs} from '../app/script/callApi'
import {cleanScreen} from '../app/script/callApi'
import {handlefavs} from '../app/script/callApi'

window.onload = function () {
  addListeners();
};


const addListeners = ()=>{
  document.getElementById('listado').addEventListener('click',show)
  // document.getElementById('search').addEventListener('click',showInput)
  document.getElementById('inputSearch').addEventListener('keyup',showInput)//keyup se ejecuta cada vez que recibe una entrada en el input
  document.getElementById('random').addEventListener('click',findRandom)
  document.getElementById('favs').addEventListener('click',handlefavs)
  document.getElementById('reset').addEventListener('click',cleanScreen)
  show()


}






/* const getk = async (url)=>{
  let data 
  try{
      const result =await fetch(url)
      data = await result.json()
  }
  catch(error){
      console.log(error);
  }
  
  return data
}

getk('https://rickandmortyapi.com/api/character').then(result=>console.log(result)) */