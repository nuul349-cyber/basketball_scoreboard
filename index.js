let homeCount = 0
let guestCount = 0

let scoreHome = document.getElementById("score-home")
let homeHeader = document.getElementById("home-header")
let scoreGuest = document.getElementById("score-guest")
let guestHeader = document.getElementById("guest-header")


function updateLeader() {
    if (homeCount > guestCount) {
        homeHeader.innerText = "HOME 👏"
        guestHeader.innerText = "GUEST"
    } else if (homeCount < guestCount) {
        homeHeader.innerText = "HOME"
        guestHeader.innerText = "GUEST 👏"
    } else {
        homeHeader.innerText = "HOME"
        guestHeader.innerText = "GUEST"
    }
}

function incrementHomeCount(n) {
    homeCount += n    
    scoreHome.textContent = homeCount
    
    updateLeader()
}

function incrementGuestCount(n) {
    guestCount += n    
    scoreGuest.textContent = guestCount
    
    updateLeader()
}

function newGame() {
    homeCount = 0
    scoreHome.textContent = 0
    guestCount = 0
    scoreGuest.textContent = 0
    homeHeader.innerText = "HOME"
    guestHeader.innerText = "GUEST"
}