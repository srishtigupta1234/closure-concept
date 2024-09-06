let id;
let container;
let movie_div = document.getElementById("movie")

async function searchMovies(q){
    try{
        let url = `http://www.omdbapi.com/?s=${q}&apikey=8d58d553`;
        let res = await fetch(url);
        let raw = await res.json();
        return raw.Search;
    }
    catch(err){
         console.log("err:",err)
    }

}

async function main(){
    let query = document.getElementById("query").value;
    let response = searchMovies(query);
    let data = await response;
    appendMovie(data);
}

function appendMovie(movies){
    movie_div.innerHTML = null;

    if(movies === undefined ){
      return false;
    }
    movies.forEach(function(el){
        let head = document.createElement("h1")
        head.innerText = "Movies"
        let p = document.createElement("p");
        p.innerText = el.Title;
        p.addEventListener("click",function(){
            appendDetails(el);
        })
        movie_div.append(p);
    })
}

function appendDetails(el){
    let container = document.getElementById("container")
    container.innerHTML = null;
    let poster = document.createElement("img")
    poster.setAttribute("src",el.Poster);
    let name = document.createElement("h1")
    name.innerText = el.Title;
    let year = document.createElement("h2")
    year.innerText = `Released on : ${el.Year}`
    let type = document.createElement("h3")
    type.innerText = `Type : ${el.Type}`;
    container.append(poster,name,year,type);
}
function debounceFunction(func,delay){
    if(id){
    clearTimeout(id);
    }
       id = setTimeout(function(){
        func();
       },delay);
    }
    
    