
function fetchData(){
    fetch("https://pokeapi.co/api/v2/pokemon-species/")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

async function fetchDataAsync() {
    try{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error: ",error)
    }
}

fetchDataAsync()