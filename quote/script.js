let quotes= [] ;
let nextbtn = document.getElementById('new-quote');
let quotetextid = document.getElementById('quote');
let authorid = document.getElementById('author');
let twitterbtn = document.getElementsById('twitter-btn');

function newquote(){
    let index = Math.floor(Math.random(Number)*quotes.length);
    let text = quotes[index].text;
    let author =quotes[index].author;
    // console.log(index,text,author);
    quotetextid.innerHTML=text;
    authorid.innerHTML=author;
}
nextbtn.addEventListener("click", newquote);

async function getquotes(){
    const Apiurl = "https://type.fit/api/quotes";
    try{
        const responce = await fetch(Apiurl);
        quotes = await responce.json();
        newquote();
    }
    catch(error){
        console.log(error);
    }
}
getquotes();