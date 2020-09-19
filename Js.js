let input= document.getElementById("input");
let result = document.getElementById("resultaten");


input.addEventListener('input', (key) => {
key = input.value.toLowerCase();

const data = gebruikers.filter(gebruiker =>{   
  //return gebruiker.name.toLowerCase().includes(key);
  const filtered = gebruiker.name.toLowerCase().includes(key);

  if(filtered){
    return gebruiker; 
  }else{
   console.log(!1); 
   removeappend();
   return false;
  }

});


const GetNames = data.forEach( gebruikers =>{
console.log(gebruikers.name); 

const gebruikersnamen = document.createElement('li');
gebruikersnamen.classList.add('li');
gebruikersnamen.innerHTML = gebruikers.name;
document.getElementById("resultaten").append(gebruikersnamen);
});

function removeappend(){
 .classList.removeChild('li');
}




});





/*

if (filtered) {
   data.forEach( gebruikers =>{
      let gebruikersnamen = document.createElement('li');
    gebruikersnamen.classList.add('li');
    gebruikersnamen.innerHTML = gebruikers.name;

   document.getElementById("resultaten").appendChild(gebruikersnamen);
  });
}else{
  //document.getElementById("resultaten").removeChild(gebruikersnamen); 
}

*/