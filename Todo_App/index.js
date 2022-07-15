const formID = document.getElementById("form");
const inputID = document.getElementById("input");
const Head = document.getElementById("head");

const Hints = document.querySelector(".close");


formID.addEventListener("submit", (e)=>{
  e.preventDefault();

 
 addTodo();
 
});




Head.addEventListener("click",()=>{
    Hints.classList.toggle("hints")
  
});

function addTodo(){
  const todoListGenerator= document.createElement("div");
 todoListGenerator.classList.add("todo-wrapper");
 
 const todoContainer= document.createElement("div");
 todoContainer.classList.add("todo-container");
 const todoText = document.createElement("p");
 todoText.innerText = inputID.value;
 const iconWrapper= document.createElement("div");
 iconWrapper.classList.add("icon-wrapper"); 
 
 const icon = document.createElement("i");

 icon.classList.add("fas");
 
icon.classList.add("fa-check");

icon.addEventListener("click",()=>{
  iconWrapper.classList.toggle("completed");
  icon.classList.toggle("completed");
  todoText.classList.toggle("slash");
});

todoText.addEventListener("click",()=>{
  iconWrapper.classList.toggle("completed");
  icon.classList.toggle("completed");
  
  todoText.classList.toggle("slash");
});

todoListGenerator.addEventListener("contextmenu", (e)=>{
  e.preventDefault();
  todoListGenerator.remove();
});
  


iconWrapper.appendChild(icon);
todoContainer.appendChild(todoText);
todoListGenerator.appendChild(todoContainer);
todoListGenerator.appendChild(iconWrapper);

formID.appendChild(todoListGenerator);
inputID.value="";
}


const infos =["Toggle on either text or icon to mark your todo as completed or uncompleted."
  ,"Right click on todo to delete submitted todo on system screen, hold down for 2 seconds to delete from mobile screen. ","Hit Enter Key to submit todo inputted. ","Toggle on title to kill and restore hint."
  
  ];
  
  
 let display = document.querySelector(".text") ;
  
let deleteTyped = '';
let typing = "";
  
let count = 0; //IDEA: //?___for monitoring the length of each index in an array

let hint = 0; //IDEA: //?___for monitoring the length of the array

 
let isError=false
  
  function autoWrite() {
    try {

      //IDEA: //?___responsible for making the looping start all over from the top and the next step to take.

    if (hint == infos.length) {
     
       hint=0;
     
      
      
    }
    
            
    
    //IDEA: //?___responsible for checking if the index is equals to it's length and the next step to take.
 
      if (count == infos[hint].length) {
        console.log("approaching setTimeout")
        setTimeout(()=>{
          console.log("timeout")
          hint++;
          count =0;
            // infos[hint].slice(0, `-${count}`)
        },3000); //* makes each index delay on view for 3 sec.
     
      
    }

          //IDEA: //?___responsible for checking if the index is less than it's length and the next step to take.

    if (count< infos[hint].length) {
      console.log("approaching second setTimeout")
     setTimeout(()=>{
          console.log("second timeout")
          typing = infos[hint].slice(0,count) //*responsible for making index count with each text.
       count++;
     },1000) //* Allows the count begin immediately each index comes in play.
      
    }
    
    
    
    console.log('hint',hint)
    console.log('count',count)
      console.log(typing)


display.innerText = typing


 
    } catch (error) {
      console.log(error, "noticed something")

      isError=true

    }

  }
  autoWrite();
 
  //! How to stop interval implementation immediately any error is encountered
//   const Error =  setInterval(()=>{
//     autoWrite();
//  if (isError) {

//    clearInterval(Error)
//     }
   
 
     
//     },500)
    
    
 
   
  
  