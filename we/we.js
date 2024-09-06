let id;
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
        let p = document.createElement("p");
        p.innerText = el.Title;
        movie_div.append(p);
    })
}
function debounceFunction(func,delay){
    if(id){
    clearTimeout(id);
    }
       id = setTimeout(function(){
        func();
       },delay);
    }
    
    