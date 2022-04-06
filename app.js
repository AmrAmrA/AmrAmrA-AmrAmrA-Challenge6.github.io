let adviceText           = document.querySelector('.advice_text'); 
let triggerBtn           = document.querySelector('.btn_trigger'); 
let adviceNumber         = document.querySelector('.advice_title'); 

triggerBtn.addEventListener('click', launchAdvices)
function launchAdvices() {
     fetch('https://api.adviceslip.com/advice')
     .then(res => res.json())
     .then (data => {
            adviceText.innerText = '"' + data.slip.advice + '"'; 
            adviceNumber.innerText = 'Advice  '  + ' #' + data.slip.id; 
            adviceNumber.classList.add('.advice_title')
})
}