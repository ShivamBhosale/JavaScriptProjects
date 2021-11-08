const shortBtn = document.getElementById('shorten-btn');
const outputLink = document.getElementById('output');

const urlInput = document.getElementById('url-input');
// https://api.shrtco.de/v2/shorten?url=shivambhosale.netlify.app


shortBtn.addEventListener('click',function(){
    
    const url = 'https://api.shrtco.de/v2/shorten?url=' + urlInput.value;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const shortURL = data.result.short_link;
        
        outputLink.textContent = shortURL;
        outputLink.href =  urlInput.value;
        // outputLink.innerHTML = `<a target="_blank" href=${shortURL}>${shortURL}</a>`
        // console.log(outputLink.href);
        console.log(shortURL)
        console.log(urlInput.value);
        
    })
   
})
