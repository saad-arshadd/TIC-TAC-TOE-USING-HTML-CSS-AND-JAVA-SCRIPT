let boxes= document.querySelectorAll(".f");
let winn=document.querySelector(".winner");
let reset_b=document.querySelector(".reset_btn");
let turnO= true;
let turnX=false;
const win_condition= [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
];

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        
     if(turnO==true)  { 
    box.innerText="0";
     turnO= false;
     turnX=true;
     }
     else if(turnX==true)  { 
        box.innerText="X";
        turnX=false;
         turnO=true;
         }
         check_winner();
    })
        
})
const check_winner = () => {
    for (let pattern of win_condition) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "--" && pos2 != "--" && pos3 != "--"){
        
            if (pos1 === pos2 && pos2 === pos3) {
                winn.innerText = `CONGRATULATIONS "${pos1}" WINNN!`;
                winn.classList.add("show");
                turnO= false;
                 turnX=false;
               

        
            }
        
    }
    }
};
reset_b.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="--";
        
    })
    winn.innerText = "";
    winn.classList.remove("show");
    turnX=false;
        turnO= true;
})

