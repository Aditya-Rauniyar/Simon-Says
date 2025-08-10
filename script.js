let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
})

// document.addEventListener("click", function () {
//     if (!started) {
//         console.log("game is started");
//         started = true;
//         levelup();
//     }
// });

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userSeq=[];
     level++;
     h2.innerText= `Level ${level}`;
     let rndIdx=Math.floor((Math.random())*4);
     let ranclr=btns[rndIdx];
     let ranbtn=document.querySelector(`.${ranclr}`);
    //  console.log(ranclr);
    //  console.log(ranbtn);
    gameSeq.push(ranclr);
    console.log(gameSeq);
    gameflash(ranbtn);
}

function checkAns(idx){
    // console.log("curr level: ", level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelup,750);
        }
    } else{
        h2.innerHTML= `Game Over! Your score was <b>${level-1}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn =this;
    // console.log(this);
    userflash(btn);

    userColor=btn.getAttribute("id");
    console.log("usercolor ", userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
