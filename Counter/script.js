var show=document.querySelector("#title");

const IncrBtn = document.querySelector("#increment");
const DecrBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

let count=0;

 IncrBtn.addEventListener("click",()=>{
	count++;	
 	show.innerText=count;
 })

DecrBtn.addEventListener("click",()=>{
	count--;
 	show.innerText=count;
 })


resetBtn.addEventListener("click",()=>{
	count=0;
 	show.innerText=count;
 })
