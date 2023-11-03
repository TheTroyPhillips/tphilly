const baseUrl = "https://fsa-async-await.herokuapp.com";
const songContainer = document.getElementById("song-container");
const songToAdd = {
    artist_id: "Zellberg Buam",
    genre_id: 1,
    release_date: "1997-01-01T00:00:00.000Z",
    title: "Tirolerzeit",
    length:{"hours":2, "minutes": 45},
}


async function init(){
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
}

function renderAllSongs(songs){
    let htmlString = "";
    songs.forEach(song=>htmlString += `<p>${song.title}</p>`);
    songContainer.innerHTML = htmlString;
}

async function fetchAllSongs(){
    try{
        const res = await fetch(`${baseUrl}/api/guided-practice/songs`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}

async function addSong(song){
    try{
        const res = await fetch(`${baseUrl}/api-guided-practice/songs`, {
           method: "POST",
           body: JSON.stringify(song),
           headers: {
            "Content-type": "application/json",
           }, 
        });
        const json = await res.json();
        console.log(json);
    } catch(err) {}
}

addSong(songToAdd);
init()