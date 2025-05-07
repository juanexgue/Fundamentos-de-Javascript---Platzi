
const urls = [
    "https://dragonball-api.com/api/characters",
    "https://dragonball-api.com/api/characters",
    "https://dragonball-api.com/api/characters"
]

async function fetchNewData() {
    try{
        for await (let url of urls){
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
        }
    } catch (error){
        console.log(error)
    }
}

fetchNewData()