// let query = document.getElementById("search").value
// const url = `https://swapi.dev/api/people/?search=${query}`;
let id;
async function getData(){
    try{
        let query = document.getElementById("search").value
        const url = `https://swapi.dev/api/people/?search=${query}`;
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data)
        return data.results
    }
    catch(err){
        console.log("err",err)
    }
   
}

function appendData(data){
    let container = document.getElementById("results")
    container.innerHTML = null;
    data.forEach(function(el){
        let p = document.createElement("p");
        p.innerText = el.name;
        p.addEventListener("click",function(){
            newPage(el)
        })

        container.append(p);
    })
}

function newPage(data){
    //console.log(data)
    if(data){
         localStorage.setItem("characterDetails",JSON.stringify(data));
         window.location.href = "character-details.html"
    }
    else{
        console.error("Data is undefined and cannot be stored")
    }
   
}
async function main(){
    let data = await getData();
    appendData(data)
}

function debouncing(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}

