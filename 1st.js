let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerx,playerO
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";//playerO
            turnO=false;  
            }
        else{
            box.innerText="x";//playerx
            turnO=true; 
            } 
            box.disabled=true;
            checkwinner();
    });
 });
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}






 const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val !=""&& pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val=== pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
            
    }
 }
};
 newgamebtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);