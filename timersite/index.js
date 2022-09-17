let images = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let time = [0,0,0]; // hh:mm:ss
let imageTagIDS = ["hrsTens","hrsOnes","minTens","minOnes","secTens","secOnes"];

let audio = ["./clock.wav", "./timerStop1.wav", "./timerStop2.wav"]

let p = 0;
function moveUp(pos){
    let modulo = 60;
    if (pos == 0) {
        modulo = 24;
    }
    else{
        modulo = 60;
    }

    if (time[pos] == 24 && pos == 0) {
        return;
    }
    else if (time[pos] == 59) {
        moveUp(pos-1);
        time[pos] = 0;
    }
    else{
        time[pos] = time[pos] + 1;
    }

    updateTime(time[pos], pos);
}

function moveDown(pos){
    let modulo = 59;
    if (pos == 0) {
        modulo = 24;
    }
    else{
        modulo = 59;
    }

    if (time[pos] == 0) {
        time[pos] = modulo;
    }
    else{
        time[pos] = time[pos] - 1;
    }

    updateTime(time[pos], pos);    
}

function updateTime(Time, Pos){
    let tens = Math.floor(Time / 10);
    let ones = Time % 10;

    let source = (images[tens])+".png";
    let idName = imageTagIDS[Pos*2];
    document.getElementById(idName).src = source;

    source = (images[ones])+".png";
    idName = imageTagIDS[Pos*2 + 1];
    document.getElementById(idName).src = source;
}

let start = 0;

function startAndStop(alrt){
    
    start = (start+1) % 2;

    if (alrt && start && time[0]==0 && time[1]==0 && time[2]==0) {
        alert("Increase Time First");
        start = 0;
        return; 
    }
    
    document.getElementById("startstopButton").innerHTML = "Stop";

    let clockSound = new Audio(audio[0]);
    // let timerSound1 = new Audio(audio[1]);
    let timerSound2 = new Audio(audio[2]);

    var myInterval = setInterval(()=>{
        clockSound.play();
        if (start==1 && time[2] > 0) {
            moveDown(2);
        }
        else if(start==1 && time[2] == 0 && time[1] > 0){
            moveDown(1);
            moveDown(2);
        }
        else if(start==1 && time[2] == 0 && time[1] == 0 && time[0]>0){
            moveDown(0);
            moveDown(1);
            moveDown(2);
        }
        else{
            clockSound.pause();
            // timerSound1.play();
            timerSound2.play();
            clearInterval(myInterval);
            document.getElementById("startstopButton").innerHTML = "Start";
        }
        console.log(time[0]+":"+time[1]+":"+time[2]);
    },1000);

}

function reset(){

    time[0] = 0;
    time[1] = 0;
    time[2] = 0;

    updateTime(time[0],0);
    updateTime(time[1],1);
    updateTime(time[2],2);

    startAndStop(0);
}

function takeTime(){
    let hrs = document.getElementById("h").value;
    let mins = document.getElementById("m").value;
    let sec = document.getElementById("s").value;

    time[0] = hrs;
    time[1] = mins;
    time[2] = sec;

    updateTime(time[0],0);
    updateTime(time[1],1);
    updateTime(time[2],2);
}
