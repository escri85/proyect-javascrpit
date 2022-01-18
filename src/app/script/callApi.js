import { Button } from "bootstrap"



// const selectAndRemove = ()=>{
//   let itemsListInView = document.querySelectorAll('.container__resultados__item')
//   itemsListInView.forEach(item => item.classList.remove('display-none'))
//   return itemsListInView
// }
// const saveFav = ()=>{
//   console.log('hola');
// }

/* const favs = (list)=>{
  console.log(list);
} */



let favs = []//array q conntiene los fav seleccionados


//funcion que muestra los favoritos al pulsar el boton
const handlefavs = ()=>{
  let itemsListInView = document.querySelectorAll('.container__resultados__item')
  itemsListInView.forEach(item => item.classList.add('display-none'))
  favs.forEach(item => !item.classList.remove('display-none'))
  // favs.forEach((item)=>{
  //  item === item ? itemsListInView.item.classList.add('display-none'):console.log('hola');})

  }


//funcion que recoge el boton unico de cada personaje
const handlefav=(e)=>{
 
  const id = e.target.id
  const btn = document.getElementById(id)
  const fatherBtn = btn.parentNode
  let grandFatherBtn = fatherBtn.parentNode
  favs.push(grandFatherBtn)
}


let page = 0


const show = ()=>{
  page +=1  
  getlist('https://rickandmortyapi.com/api/character/?page=' + page )
    
  }
const printlist=(list)=>{
 
    const container = document.getElementById('container__resultados')
    list.forEach(item => {
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const fav = document.createElement('button')
      
        div2.classList.add('container__resultados__item__div2')
        div1.classList.add('container__resultados__item__div1')
        div.classList.add('container__resultados__item')
        fav.classList.add('fav')

        div.title = item.name
        fav.id = item.id
        const p = document.createElement('p')
        const h3 = document.createElement('h3')
        const p2 = document.createElement('p')
        const p4 = document.createElement('p')
        const img = document.createElement('img')
        p.classList.add('parrafo')
        p2.classList.add('parrafo')
        p4.classList.add('parrafo')
        container.appendChild(div)
        div.appendChild(div2)
        div.appendChild(div1)
        
        div1.appendChild(h3)
        div1.appendChild(p)
        div1.appendChild(p2)
        div1.appendChild(p4)
        div2.appendChild(img)
        div1.appendChild(fav)
        
        
        h3.innerHTML=`${item.name}`
        p.innerHTML=`ID ${item.id}`
        p2.innerHTML=`Species: ${item.species}`
        p4.innerHTML=`Gender: ${item.gender}`
        img.src=item.image
        fav.innerHTML='fav'

        fav.addEventListener('click',handlefav)
        
    });
    
  }

const getlist = (url) => {
  
    fetch(url)
    .then((response)=>response.json())
    .then((myJson)=>{
      const listResults = myJson.results;
      console.log(listResults);
     printlist(listResults)
    //  showfavs(listResults)

    })
}

const showInput= ()=>{
  // selectAndRemove(list)
  // document.getElementById("inputSearch").value = "";
  const valorInput= document.getElementById('inputSearch').value//recogo el valor del input
  let itemsListInView = document.querySelectorAll('.container__resultados__item')//recogo en un let un array de los nuevos elementos que me pinta el dom
  itemsListInView.forEach(item => item.classList.remove('display-none'))//recorro el array y a cada elemento le borro la clase q le hace desaparecer

  itemsListInView.forEach(item => {
   
    if(!item.title.toLowerCase().includes(valorInput.toLowerCase())){//si el titulo en minus. es diferente al valor del input en minus.
      item.classList.add('display-none')//añade la clase que borra los elementos

    }
  
  })
}

const findRandom =()=>{
  // selectAndRemove(list)
  let itemsListInView = document.querySelectorAll('.container__resultados__item')
  itemsListInView.forEach(item => item.classList.remove('display-none'))
  //floor me da un numero entero, random precisa de numero de elementos -1 hasta el numero de elementos que es cero
  const indexRandom = Math.floor(Math.random() * ((itemsListInView.length -1) - 0) + 0)
//esta constante es igual al array de elementos pintados en el dom en su posicion de random
  const domElementRandom = itemsListInView[indexRandom];

  itemsListInView.forEach(item => {
    
    if(item.title !== domElementRandom.title){//si el titulo es diferente al array en su posicion de random se añade la clase para borrar los que no se esta eligiendo en el random
      item.classList.add('display-none')

    }
  
  })

}

const cleanScreen = ()=>{
  location.reload()
  // const btnClean = document.getElementById('reset')
  // let itemsListInView = document.querySelectorAll('.container__resultados__item')//recogo elementos en el dom
  // itemsListInView.forEach(item => item.classList.add('display-none'))// les añado la clase que los hace desaparecer cada vez que se pulsa el boton
  // selectAndRemove(list)
}


/* 
let showfavs = ()=>{
  let itemsListInView = document.querySelectorAll('.container__resultados__item')

  itemsListInView.forEach((item)=>{
    console.log(item);
  })


} */









// let containsFavs = []



// let btnFav = document.getElementById(item.id)

// const showfavs = ()=>{
  
//   let itemsListInView = document.querySelectorAll('.container__resultados__item')
//   itemsListInView.forEach((item)=>{
//     let btnFav = document.querySelectorAll('fav')
//     if(item.id!==btnFav.id){ item.classList.add('display-none')}
//     ;

  
//   })
  

// }

/* const showfavs = ()=>{
  let btnFav = document.querySelector('fav')
  let itemsListInView = document.querySelectorAll('.container__resultados__item')
  if(btnFav.addEventListener('click',()=>{console.log('hola');}))
  itemsListInView.forEach((item)=>{
    if(btnFav.addEventListener('click',(ite)=>{ite.type})){console.log('hola');}
  })
} */

/* const showfavs = ()=>{
  let itemsListInView = document.querySelectorAll('.container__resultados__item')
  itemsListInView.forEach(item => item.classList.remove('display-none'))

  let conatinsFav = []
  itemsListInView.forEach((item)=>{
    const btnFav = document.getElementById('fav')
 
 
  })
   
} */
/* var intervalID; 
  let riki = [R,i,c,k]
function intervaloMensaje() {
  intervalID = setInterval(showheader, 1000);  
} 
 
function showheader() { 
  riki.forEach((item)=>{ 
    console.log(item); 
  }) 
  segundos++;
  console.log("Tiempo: " + segundos + " s."); 
}
intervaloMensaje() */

/*   let riki = ['R','i','c','k']
  setInterval(() => {
    riki.forEach((item)=>{
      const header = document.getElementById('header')
      const h1 = document.createElement('h1')
      h1.classList.add('h1')
      h1.innerHTML = item
      header.appendChild(h1)
  })
  }, 1000);
  window.clearInterval(setInterval)
 */


export {show,showInput,findRandom,cleanScreen,handlefavs}