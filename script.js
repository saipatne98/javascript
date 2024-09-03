// let btn1 =document.querySelector("#btn1");
// btn1.onclick =()=>{
//     console.log("Button Was CLicked");
//     let a =25;
//     a++;
//     console.log(a);
// }

// let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
//     console.log(evt.type);
//     console.log(evt.target)
// }

let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
    console.log("button was clicked handler-1")
    
})
btn1.addEventListener("click",()=>{
    console.log("button was clicked handler-2")
    
})
const handler3 = ()=>{
    console.log("button was clicked handler-3")
}

btn1.addEventListener("click",handler3);
    
    
btn1.addEventListener("click",()=>{
    console.log("button was clicked handler-4")
    
})

btn1.removeEventListener("click",handler3);


