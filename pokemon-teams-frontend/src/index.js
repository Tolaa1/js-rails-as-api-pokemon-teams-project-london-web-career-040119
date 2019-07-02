const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const trainerDiv = document.querySelector('main')
const trainerCard = document.createElement('div')
//Get list of trainers and render them

    const getTrainer = () => {
        
     return fetch(TRAINERS_URL)
        .then(resp => resp.json())
        
        
        

    }
//render a single trainer
const renderTrainer = trainer => {
    trainerCard = document.createElement('div')
     trainerDiv.innerText = trainer
   
   trainerDiv.append(trainerCard)

    
}
const renderTrainers = trainers => {
    trainers.forEach(renderTrainer)
}
document.addEventListener("DOMContentLoaded", function () {
    getTrainer()
        .then(renderTrainers)
});


