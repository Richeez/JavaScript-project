// const text = document.querySelector('.type')

// text.innerText.splice(0,count)
// let count = 0

//  let hello =  text.innerText
// const motion = () => {

//     document.querySelector(".type").innerText = hello.splice(0,count)
//     count++
//     if (count > 1) {
//         text.innerText= "you are welcome"
//     } else if (count > 2) {
//                 text.innerText= " how are you"

//     } else if (count===3) {
//         count = 0
//     }
// }

// setInterval(() => {
//     motion()
// }, 1000);


const professions = ["Hello", "World", "how are you"];

console.log(professions[0]);

let count = 0

let index = 0;

display= document.querySelector(".typing")
let isError = false;

function autoWrite() {

    try {
        
        console.log(index, "index")
        if (index < professions.length) {
            // console.log("testing1")
            count++
        }
        if (count > professions[index].length) {
            // console.log("testing3")
            count = 0
        index++;
        // console.log(index, "llllll")
    }
    
    if (index >= professions.length) {
        // console.log("testing2")
        index = 0
        }
        
        display.innerText = professions[index]?.slice(0, count)
       
    } catch (error) {
        // console.log(index, 'mmmmmmmmmm')
        // console.log(professions.length, "professions.length")
        console.log(error, "check this out")
        isError = true
    }
    
   
}



autoWrite();
const x = setInterval(() => {
    autoWrite()
    if(isError)
{
    clearInterval(x)
}
}, 500)

