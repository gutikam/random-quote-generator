const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");

const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const apiKey = "MNemEr9THSVTCxISru9Snw==VJeeHWGzXAbYm3tw";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const getJoke = async () => {
    try {
        quoteE1.innerText = "Loading...";

        const response = await fetch(apiUrl, options);

        const data = await response.json();

        const quote = data[0].quote;

        console.log(quote);
        quoteE1.innerText = quote; 

    }catch (error){
        quoteE1.innerText = "An error happened, try again later.";
        console.log(error);
    }
}

getJoke();

btnE1.addEventListener("click", getJoke);