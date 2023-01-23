let submitBtn = document.getElementById('submit-btn')
let mainDiv = document.getElementById('main-div')
let voteNumber = document.querySelectorAll('.votenumber')
let thankYouMessage = document.getElementById('thankyoumessage')

let vote = ""
voteNumber.forEach(votenumber => {
    votenumber.addEventListener('click', function() {
        vote = votenumber.textContent
        console.log(vote);
    })
})

let baseString = ""
// submitBtn.addEventListener('click', function() {
//     baseString = `You have selected ${vote} out of 5`
//     console.log(baseString);
//     thankYouMessage.innerHTML = `<p>${baseString}</p>`
// })

window.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', function() {
        baseString = `You have selected ${vote} out of 5`
        console.log(baseString);
        thankYouMessage.innerHTML = `<p>${baseString}</p>`
    })
});