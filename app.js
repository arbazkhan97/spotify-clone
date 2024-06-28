let btn=document.querySelector("button");

let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let lis=document.querySelector("li");

btn.classList.add("addTask");
inp.classList.add("styleInput");



btn.addEventListener("click",function(){
    let listItem=document.createElement("li");
    ul.appendChild(listItem).innerText=inp.value;

    listItem.classList.add("styleList");

    // for delete task logic

let delBtn=document.createElement("button");
delBtn.innerText="Delete";

delBtn.classList.add("styleDelBtn");

delBtn.classList.add("delete");

listItem.appendChild(delBtn);
ul.appendChild(listItem);

inp.value="";
    console.log(":clicked");
   
});   

ul.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.target.nodeName);
    let ab=event.target.parentElement;
    ab.remove();
    
});