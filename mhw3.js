function onJson1(json) {
    const risultati1 = document.querySelector('#risultati1');
    risultati1.innerHTML = '';
    const file_amiibo =json.amiibo;
    const num_risultati_trovati1 = json.amiibo.length;
    for(let i=0; i<num_risultati_trovati1; i++)
    {
      
      const dati_amiibo = file_amiibo[i]
      
      const nome_amiibo = dati_amiibo.name;
      const immagine_amiibo = dati_amiibo.image;
      
      const amiibo = document.createElement('div');
      amiibo.classList.add('amiibo');
      
      const img1 = document.createElement('img');
      img1.src = immagine_amiibo;
      
      const didascalia1 = document.createElement('span');
      didascalia1.textContent = nome_amiibo;
     
      amiibo.appendChild(img1);
      amiibo.appendChild(didascalia1);
     
      risultati1.appendChild(amiibo);
    }
  }
  

  function onJson2(json) {
    const risultati2 = document.querySelector('#risultati2');
    risultati2.innerHTML = '';
    const giochi_risultati = json.results;
    const num_risultati_trovati2 = json.results.length;

    for(let i=0;i<num_risultati_trovati2;i++){

    const gioco_risultato = giochi_risultati[i];

    const nome_gioco = gioco_risultato.name ;
    const immagine_gioco = gioco_risultato.background_image;
    const metacritic_gioco = gioco_risultato.metacritic;
    
    const blocco = document.createElement('div');
    blocco.classList.add('gioco');
    
    const img2 = document.createElement('img');
    img2.src = immagine_gioco;
    
    const nome2 = document.createElement('span'); 
    nome2.textContent= nome_gioco;

    const didascalia2 = document.createElement('span');
    didascalia2.classList.add('didascalia2');
    didascalia2.textContent = "Metacritic : " + metacritic_gioco;
   
    blocco.appendChild(img2);
    blocco.appendChild(nome2);
    blocco.appendChild(didascalia2);
   
    risultati2.appendChild(blocco);
    }
  
  }

  function onResponse(response) {
    return response.json();
  }
  
  function search1(event)
  {
    //Evitiamo il refresh della pagina
    event.preventDefault();
    const input1 = document.querySelector('#barradiricerca1');
    const valore_input1 = encodeURIComponent(input1.value);
    indirizzo1 = 'https://www.amiiboapi.com/api/amiibo/?character=' + valore_input1;
    fetch(indirizzo1).then(onResponse).then(onJson1);
  }
  
  function search2(event)
  {
    //Evitiamo il refresh della pagina
    event.preventDefault();
    const input2 = document.querySelector('#barradiricerca2');
    const valore_input2 = encodeURIComponent(input2.value);
    indirizzo2 = 'https://api.rawg.io/api/games?key=' + api_key + '&search=' + valore_input2;
    fetch(indirizzo2, {
	"method": "GET",
	"headers": {
    "content-type":"application/json"
	}
})
.then(onResponse).then(onJson2);


  }
  
  // Aggiungo l'event listener al primo form
  const form1 = document.querySelector('#form1');
  form1.addEventListener('submit', search1);

 
  // Aggiungo l'event listener al secondo form
   const api_key = '7eabb350d2c7458ab23a83c2e06f670f';
   const form2 = document.querySelector('#form2');
   form2.addEventListener('submit', search2);