// https://languagedetection.apifex.com/api/v1/detect?text=hello my name is Shivam

const textIpt = document.getElementById('text-input');
const DetectBtn = document.getElementById('detect-btn');
const Ans = document.getElementById('ans');

DetectBtn.addEventListener('click', () => {
    fetch('https://languagedetection.apifex.com/api/v1/detect?text=' + textIpt.value)
    .then(res => res.json())
    .then(data => {
        Ans.innerHTML = "Language Detected: " + data.main_language_name[0] + data.main_language_name.slice(1).toLowerCase();
    })
})