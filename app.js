let container = document.querySelector('.advices_container')

fetch('https://api.adviceslip.com/advice')
     .then(res => res.json())
     .then (data => {
            let newParagraph = document.createElement('p'); 
            newParagraph.innerText = data.slip.advice; 
            container.appendChild(newParagraph)
})