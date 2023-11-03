const cohortName = "2308-FTB-ET-WEB-PT"
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const players = await fetchAllPlayers();
    console.log(players);
    
    

}

async function fetchAllPlayers(){
    try{
        const res = await fetch(`${baseUrl}/players`);
        const json = await res.json();
        const allPlayers = result.data.players;
        return json;
    }catch(err){
        console.log(err);
    }
}
init()