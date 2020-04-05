let counter=0;
let startTime = Math.floor(Date.now() / 1000);
let boxs=document.querySelectorAll(".box");
let numberTo25=[];
let numberTo50=[];
let firstbox=true;
let faild=false;
let win=false;
for (let index = 1; index <= 25; index++) {
    numberTo25.push(index);   
}
for (let index = 26; index <= 50; index++) {
    numberTo50.push(index);   
}
console.log(numberTo25);
for (let i = numberTo25.length-1;i>=0;i--) {
    let randomItem = numberTo25.splice(Math.floor(Math.random()*numberTo25.length), 1);
    boxs[i].setAttribute("id",`${i}`)
    boxs[i].innerHTML=randomItem;
}




function checkResult(id,value){
    if(firstbox){
        startTime = Math.floor(Date.now() / 1000);
        startTimeCounter();
        firstbox=false;
    }
   
    if(value!=counter+1){
        faild=true;
        alert("You Faild");

    }
    else{
        counter++;
        let randomItem = numberTo50.splice(Math.floor(Math.random()*numberTo50.length), 1); 
       
        if(randomItem.length==0){
            randomItem="@";
        }
        document.getElementById(`${id}`).innerHTML=randomItem;
        let score=parseInt(document.querySelector("#score").innerHTML);
        score++;
        
        document.querySelector("#score").innerHTML=score;

        if(score==50){
             win=true;
            alert("You Won !");
        }
    }
    }

    
   
    
    function startTimeCounter() {
        var now = Math.floor(Date.now() / 1000); // get the time now
        var diff = now - startTime; // diff in seconds between now and start
        var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
        var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
        m = checkTime(m); // add a leading zero if it's single digit
        s = checkTime(s); // add a leading zero if it's single digit
        document.getElementById("timer").innerHTML =  s; // update the element where the timer will appear
        if(win==false&&faild==false){
        var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
        }
    }
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    
  

