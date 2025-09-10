


let homeScore = 0;
let awayScore = 0;
let homeEl = document.getElementById("homeScore");
let awayEl = document.getElementById("awayScore");
homeEl.innerText = homeScore;
awayEl.innerText = awayScore;


let saveBtn = document.getElementById("saveBtn");

let home1 = document.getElementById("home1");
let home2 = document.getElementById("home2");
let home3 = document.getElementById("home3");
let away1 = document.getElementById("away1");
let away2 = document.getElementById("away2");
let away3 = document.getElementById("away3");

let result = document.getElementById("result");

home1.addEventListener("click", function() {
    addOnePointHome();
});
home2.addEventListener("click", function() {
    addTwoPointsHome();
});
home3.addEventListener("click", function() {
    addThreePointsHome();
});
away1.addEventListener("click", function() {
    addOnePointAway();
});
away2.addEventListener("click", function() {
    addTwoPointsAway();
});
away3.addEventListener("click", function() {
    addThreePointsAway();
});
saveBtn.addEventListener("click", function() {
    save();
});
resetBtn.addEventListener("click", function() {
    reset();
});

function addOnePointHome() {
    homeScore +=1;
    homeEl.innerText = homeScore;
};
function addTwoPointsHome() {
    homeScore +=2;
    homeEl.innerText = homeScore;
};
function addThreePointsHome() {
    homeScore +=3;
    homeEl.innerText = homeScore;
};
function addOnePointAway() {
    awayScore +=1;
    awayEl.innerText = awayScore;
};
function addTwoPointsAway() {
    awayScore +=2;
    awayEl.innerText = awayScore;
};
function addThreePointsAway() {
    awayScore +=3;
    awayEl.innerText = awayScore;
};



function save() {
    result.innerText += "Final Score: Home: " + homeScore + " Away: " + awayScore
}

function reset() {
    result.innerText = ""
    homeScore = 0;
    awayScore = 0;
    homeEl.innerText = homeScore;
    awayEl.innerText = awayScore;
}