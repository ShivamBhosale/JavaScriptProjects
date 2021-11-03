// https://api.adviceslip.com/advice

const adviceBtn = document.getElementById('get-ad');
const advice = document.getElementById('advice');

adviceBtn.addEventListener('click', function(){
//     fetch('https://api.adviceslip.com/advice')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         advice.innerHTML = data.slip.advice;
//     })
// })
    const id = Math.floor(Math.random() * 100)
    console.log(id)
    fetch('https://api.adviceslip.com/advice/'+id)
    .then(response => response.json())
    .then(data => {
       const adviceData = data.slip.advice;
       advice.textContent = adviceData;
    })
    
});

