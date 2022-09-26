var maincontainer = document.querySelector(".container")
var mainmsg = document.querySelector(".msg")
var Xsubmit = document.getElementById('submit')
var rateAgain = document.getElementById('rate-again')
var rating = document.getElementById('rating')
var rates = document.querySelectorAll('.btn')

Xsubmit.addEventListener("click", () => {
    mainmsg.classList.remove("hidden")
    maincontainer.style.display = 'none'
})

rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
     
    })
})