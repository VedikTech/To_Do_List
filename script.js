let btn=document.getElementById("btn");
let input=document.getElementById("input");
let body=document.querySelector("body");
let filter=document.querySelector("select");
let box=document.querySelector(".box");
let taskdata="";


input.addEventListener("input",(e)=>{
   taskdata=e.target.value;
  console.log(taskdata)
});

btn.addEventListener("click",(e)=>{
    e.preventDefault();
   if(input.value.trim()==="")
   {
    alert("Please write the Task ");
    return;
   }

   

   let p= document.createElement("li");
    p.innerHTML=taskdata;
    p.classList.add("pending");
   
    box.prepend(p) ; 
    
   input.value="";


   let del=document.createElement("i");
   del.setAttribute("class","fa-solid fa-trash");
   p.appendChild(del);
    del.style.position="absolute";
    del.style.right="70px";
   del.style.marginLeft="100px";
   let doneicon=document.createElement("i");
   doneicon.setAttribute("class","fa-solid fa-circle-check");
   p.appendChild(doneicon);
   doneicon.style.color="red";
   doneicon.style.position="absolute";
   doneicon.style.right="30px";
   doneicon.style.marginLeft="20px"
  });

  let count=0;
  box.addEventListener("click",(e)=>{
    if(e.target.className=="fa-solid fa-trash")
    {
    e.target.parentElement.remove();
    }
    if(e.target.className=="fa-solid fa-circle-check")
    {
      count=count+1;
      e.target.parentElement.style.textDecoration="line-through";
     e.target.style.color="green";
     e.target.parentElement.classList.remove("pending");
  e.target.parentElement.classList.add("completed");
console.log(count);
    }
   })

   filter.addEventListener("change",(e)=>{

    let alltask=document.querySelectorAll("li");

    alltask.forEach((task)=>{
      if(e.target.value=="All")
      {
        task.style.display="block";
      }
      else if(e.target.value=="pending")
      {
        task.classList.contains("pending")
        ?(task.style.display="block")
        :(task.style.display="none")
       
      }
      else if(e.target.value=="completed")
      task.classList.contains("completed")
    ?(task.style.display="block")
  :(task.style.display="none")
    })

   })




   


  