// https://api.dictionaryapi.dev/api/v2/entries/en/apple
const inputW = document.getElementById("inputword");
const SearchBtn = document.getElementById("search");
const result = document.getElementById("definition");
const origin = document.getElementById("origin");
const pos = document.getElementById("pos");

SearchBtn.addEventListener("click", function () {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputW.value}`)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = "Defination: " + data[0].meanings[0].definitions[0].definition
            origin.innerHTML = "Origin: " + data[0].origin
            pos.innerHTML = "Part of Speech: " + data[0].meanings[0].partOfSpeech
        })
})