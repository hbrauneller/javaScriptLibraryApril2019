const baseURL = "https://www.balldontlie.io/api/v1/players";

function fetchBall(e){
    e.preventDefault();

fetch(baseURL)
.then(result => result.json()
.then(json => console.log(json))
}

function displayPlayers(players){
    players.forEach
    }