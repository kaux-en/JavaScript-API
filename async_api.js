//await new Promise(resolve => setTimeout(resolve, 2000));

const hash = 'd6817f7aa5c2658b35ed73a8a5c27a66'
const apiKey = 'ed5938a90897baebae432e484ad68f1e'
const ts = 1
const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`

async function fetchData(url) {

    try {
        const response = await fetch(url, {
            method: 'GET',
        }); 
        console.log(response)
        const data = await response.json();
        console.log(data);
        return data.data.results


    } catch (error) {
        console.log('Error fetching character', error);
    }
};


    
function updateUI(characters) {
    const characterList = document.getElementById("dataInfo");
    characters.forEach(character => {
        const listItem = document.createElement("li");
        listItem.textContent = character.name;
        characterList.appendChild(listItem);
    });
}
async function fetchAndUpdateUI() {
    const characters = await fetchData(url);
    if (characters) {
        updateUI(characters);
    }
}
document.addEventListener('DOMContentLoaded', fetchAndUpdateUI);



