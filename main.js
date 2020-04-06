let counter = 0;
let startTime = 0;
let boxs = document.querySelectorAll(".box");
let numberTo25 = [];
let numberTo50 = [];
let firstbox = true;
let faild = false;
let win = false;


for (let index = 1; index <= 25; index++) {
    numberTo25.push(index);
}
for (let index = 26; index <= 50; index++) {
    numberTo50.push(index);
}




for (let i = 0; i < 25; i++) {
    let randomItem = numberTo25.splice(Math.floor(Math.random() * numberTo25.length), 1);
    boxs[i].setAttribute("id", `${i}`)
    boxs[i].innerHTML = randomItem;
}




function checkResult(id, value) {
    if (win||faild ) {
        return;
    }

    if (firstbox) {
        startTime = Math.floor(Date.now() / 1000);
        startTimeCounter();
        firstbox = false;
    }

    if (value != counter + 1) {
        faild = true;
        alert("You Faild");

    }
    else {
        counter++;
        let randomItem = numberTo50.splice(Math.floor(Math.random() * numberTo50.length), 1);

        if (randomItem.length == 0) {
            randomItem = "@";
        }
        document.getElementById(`${id}`).innerHTML = randomItem;
        let score = parseInt(document.querySelector("#score").innerHTML);
        score++;

        document.querySelector("#score").innerHTML = score;

        if (score == 50) {
            win = true;
            alert("You Won !");
        }
    }
}




function startTimeCounter() {
    var now = Math.floor(Date.now() / 1000); 
    var diff = now - startTime; 
    var m = Math.floor(diff / 60); 
    var s = Math.floor(diff % 60); 
    s = checkTime(s); 
    m = checkTime(m); 
    document.getElementById("timer").innerHTML = m + " : "+ s; 
    if (!win  && !faild) {
        var t = setTimeout(startTimeCounter, 500); 
    }
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}



