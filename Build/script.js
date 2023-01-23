let submitBtn = document.getElementById('submit-btn')
let mainDiv = document.getElementById('main-div')
let voteNumber = document.querySelectorAll('.votenumber')
let thankYouMessage = document.getElementById('thankyoumessage')
let thankYouDiv = document.getElementById('thankyou-div')
let selectAVoteDiv= document.getElementById('select-a-vote-div')
let selectMessage = document.getElementById('selectmessage')

let vote = ""
let voteIsClicked = false
voteNumber.forEach(votenumber => {
    votenumber.addEventListener('click', function() {
        vote = votenumber.textContent
        selectAVoteDiv.style.display = "none"
        voteIsClicked = true
    })
})

let baseString = ""
submitBtn.addEventListener('click', function() {
    // show thankyou message when a vote is selected and submitted
    if (voteIsClicked) {
        mainDiv.style.display = "none"
        thankYouDiv.style.display = "flex"
        baseString = `You have selected ${vote} out of 5`
        thankYouMessage.innerHTML = `<p>${baseString}</p>`
    
    // show "select a vote" message when submission is made without voting
    } else {
        selectAVoteDiv.style.display = "block"
    }
})

