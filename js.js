let score=0;
let lvl=0;
let tt=1840;
let bs=[];
let g,g2;
let time=0;
for(let i=0;i<25;i++){
    bs[i]=0;
}
const dnlm = new Audio('骂人.wav');
const bgm = new Audio('咸菜.mp3');
bgm.loop=true;
bgm.volume=0.7;
bgm.preload = 'auto';
let playing = true;
dnlm.preload = 'auto';
function Load(){
    let img=document.getElementById("i1");
    img.src="棍母.png";
    img.src="嘿嘿.png";
    img.src="哭.png";
    img.src="略.png";
    img.src="脸红.png";
}

function spawn(){
    let r=Math.floor(Math.random()*25);
    while(bs[r]!=0)r=Math.floor(Math.random()*25);
    let r2=Math.floor(Math.random()*4);
    let t=tt>500?tt-lvl*40:500;
    bs[r]=
        lvl<5?
            1:
            r2>2?
                3:1;
    Updata();
    setTimeout(() => {
        if(bs[r]==1)bs[r]=0;
        else if(bs[r]==3)bs[r]=0;
        Updata();
    }, t);
}

function start(){
    bgm.play();
    g = setInterval(() => {
        spawn();
    }, 1010-lvl*10);
    g2=setInterval(() => {
        time+=1;
        let t=document.getElementById("time");
        t.innerText=time/100+"s";
        if(score>=103)win();
    }, 10);
}

function win(){
    let title=document.getElementById("title");
    title.innerText="你赢了！"
    clearInterval(g);
    clearInterval(g2);
    alert("你赢了!,总耗时:"+time/100+"s");
}

function hit(id){
    if(bs[id-1]==1){bs[id-1]=2;score++;lvl=score/10;};
    if(bs[id-1]==3){bs[id-1]=4;score-=score*0.5;lvl=score/10;dnlm.play();};
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

function music(){  
    if(playing){bgm.volume=0;playing=false;}
    else {bgm.volume=0.7;playing=true;}
}