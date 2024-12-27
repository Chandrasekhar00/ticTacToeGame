let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let alltop=document.querySelector(".alltop");
let hide=document.querySelector(".hide");
let msg=document.querySelector("#msg");
let turno=true;

const winpat =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turno=true;
    enableBox();
    alltop.classList.add("hide");
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
});


const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner =(winner)=>{
    msg.innerText=`WINNER IS ${winner}`
    alltop.classList.remove("hide");
    disableBox();
}
function checkwinner() {
    for (let pattern of winpat) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);