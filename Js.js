let gebruikers= [
  {
    email: "Bonita.Lang@hotmail.com",
    name: "Lamont Bruen"
  },
  {
    email: "Elody_Kuhic@gmail.com",
    name: "Hipolito McGlynn"
  },
  {
    email: "Brock_Baumbach1@hotmail.com",
    name: "Darion Kemmer"
  },
  {
    email: "Candido_Braun@hotmail.com",
    name: "Doyle Predovic"
  },
  {
    email: "Loma67@hotmail.com",
    name: "Hulda Kuhic"
  },

  {
    email: "Loma67@hotmail.com",
    name: "anne braaksma1"
  },

  {
    email: "anne@hotmail.com",
    name: "Anne Braaksma"
  }
  ];

let input= document.getElementById("input");
//let result = document.getElementById("resultaten");
const resultatenLijst = document.getElementById("resultaten");


input.addEventListener('input', (event) => {

  const key = input.value.toLowerCase();
  console.log(key);
  resultatenLijst.innerHTML = "";
  const spanElem = document.createElement('span');


  const data = gebruikers.filter(
      gebruiker => gebruiker.name.toLowerCase().includes(key)
    );



    data.forEach(gebruiker =>{
      var boldString = (s, b) => s.replace(RegExp(b, 'gi'), `<b>${key}</b>`); 
      const liElem = document.createElement('li');
      liElem.innerHTML = boldString(gebruiker.name, key);
      resultatenLijst.append(liElem);
    });

  if(!data.length || key == ""){
     resultatenLijst.innerHTML = "<li>Geen resultaten gevonden</li>";
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