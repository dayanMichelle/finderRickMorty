const API = 'https://rickandmortyapi.com/api/character/';
const result = document.getElementById("result");
//const search = document.getElementById("search");

const characters = [];
const names = [];
const status = [];
const species =[];
const gender = [];
const image = [];
const created = [];
const originArray= [];
const origin = [];
const namesOrigin = [];
const nameMi=[];
const anotherFunction = async(url_api) =>{
    try {
        const data = await fetchData(url_api);
        for(let i =0; i <= data.info.count; i++){
            
         characters.push(await fetchData(API + data.results[i].id));
         names.push(characters[i].name.toUpperCase());
         status.push(characters[i].status);
         species.push(characters[i].species);
         gender.push(characters[i].gender);
         image.push(characters[i].image);
         created.push(characters[i].created);
        originArray.push(await fetchData(characters[i].origin.url)) ;
            origin.push(originArray[i].dimension);
            namesOrigin.push(originArray[i].name);
        }
      
    }
    catch{
        console.error();
    }
}
anotherFunction(API);
function recorrer(search){
    var buscar = search.toUpperCase();
    console.log(buscar)
    for(var i = 0; i <=characters.length; i++){
     
        (buscar == names[i])
            
            ?result.innerHTML =  names[i] + "<br>"
            + status[i] + "<br>" + species[i] + "<br>" + gender[i] + "<br>" + "<img src='" + image[i] + "' id='image' alt=''>"
            +  "<br>" + created[i] + "<br>" + origin[i] + "<br>" + namesOrigin[i]
            :  console.log("");

    }
}
//Abadango Cluster Princess
//Adjudicator Rick