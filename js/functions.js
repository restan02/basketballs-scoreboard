let homeScore = 0
let guestScore = 0

let guestEl = document.getElementById("guestScorePoints")
let homeEl = document.getElementById("homeScorePoints")



function homeScorePlus1() {
    homeScore++
    
    if(homeScore<10){
        homeEl.textContent = "0" + homeScore
    } else{
        homeEl.textContent = homeScore
    }
    
}

function homeScorePlus2(){
    homeScore+=2
    
    if(homeScore<10){
        homeEl.textContent = "0" + homeScore
    } else{
        homeEl.textContent = homeScore
    }
}

function homeScorePlus3(){
    homeScore+=3
    
    if(homeScore<10){
        homeEl.textContent = "0" + homeScore
    } else{
        homeEl.textContent = homeScore
    }
}

function guestScorePlus1(){
    guestScore++
    
    if(guestScore<10){
        guestEl.textContent = "0" + guestScore
    } else{
        guestEl.textContent = guestScore
    }
}

function guestScorePlus2(){
    guestScore+=2
    
   if(guestScore<10){
        guestEl.textContent = "0" + guestScore
    } else{
        guestEl.textContent = guestScore
    }
}

function guestScorePlus3(){
    guestScore+=3
    
   if(guestScore<10){
        guestEl.textContent = "0" + guestScore
    } else{
        guestEl.textContent = guestScore
    }
}
