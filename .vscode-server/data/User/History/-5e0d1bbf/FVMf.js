const baseUrl = "https://fsa-puppy-bowl.herokuapp.com";
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const puppies = await fetchAllPuppies();
    console.log(puppies);
    const data = await fetchPlayerByID();
    console.log(data);
    const players = await fetchAllPuppies
    
    

}

function renderPlayers(players) {
    const puppyContainer = document.querySelector("#puppy-container");
    puppyContainer.innerHTML = "";
    puppies.forEach((puppy)=>{
        const puppyElement = rederplayer(puppy);
        puppyContainer.append(puppyElement);
    });
}

async function fetchAllPuppies(){
    try{
        const res = await fetch(`${baseUrl}/api/2308-FTB-ET-WEB-PT/players`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
async function fetchPlayerByID(){
    try{
        const res = await fetch(`${baseUrl}/api/2308-FTB-WEB-PT/players/585`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
init()