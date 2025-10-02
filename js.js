let score=0;
let lvl=1;
let tt=1840;
let bs=[];
for(let i=0;i<25;i++){
    bs[i]=0;
}
const dnlm = new Audio('骂人.wav');
dnlm.preload = 'auto';

function spawn(){
    let r=Math.floor(Math.random()*25);
    while(bs[r]!=0)r=Math.floor(Math.random()*25);
    let r2=Math.floor(Math.random()*4);
    let t=tt>800?tt-lvl*40:800;
    bs[r]=lvl<5?1:r2>2?3:1;
    Updata();
    setTimeout(() => {
        if(bs[r]==1)bs[r]=0;
        else if(bs[r]==3)bs[r]=0;
        Updata();
    }, t);
}

function start(){
    
    setInterval(() => {
        spawn();
    }, 1010-lvl*10);
}



function hit(id){
    if(bs[id-1]==1){bs[id-1]=2;score++;lvl=score%10;};
    if(bs[id-1]==3){bs[id-1]=4;score--;lvl=score%10;dnlm.play();};
    Updata();
    setTimeout(() => {
        if(bs[id-1]==2)bs[id-1]=0;
        else if(bs[id-1]==4)bs[id-1]=0;
        Updata();
    }, 500+Math.floor(Math.random()*200));
}

function Init(){
    let body=document.getElementById("body");
}

function UpdateScore(){
    let score_=document.getElementById("score");
    score_.innerText=score;
}

function Updata() {
    UpdateScore();
    for(let i in bs){
        switch(bs[i]){
            case 0:{
                let img=document.getElementById("i"+String(Number(i)+1));
                img.src="棍母.png";break;
            }
            case 1:{
                let img=document.getElementById("i"+String(Number(i)+1));
                img.src="嘿嘿.png";break;
            }
            case 2:{
                let img=document.getElementById("i"+String(Number(i)+1));
                img.src="哭.png";break;
            }
            case 3:{
                let img=document.getElementById("i"+String(Number(i)+1));
                img.src="略.png";break;
            }
            case 4:{
                let img=document.getElementById("i"+String(Number(i)+1));
                img.src="脸红.png";break;
            }
        }
    }
}