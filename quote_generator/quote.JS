const getNewQuote = async () =>
{
    var url="https://api.quotable.io/random";    
    
    const response=await fetch(url);
    const quote = await response.json();
    
    document.getElementById("quote").innerHTML='"' + quote.content + '"';
    document.getElementById("author").innerHTML="- "+quote.author;
}
getNewQuote();