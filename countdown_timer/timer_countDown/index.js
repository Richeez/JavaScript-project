
        // console.log(timerCount);
        
        // console.log(timerCount[0].number);
        // console.log( timerCount[0], "testing")
        // function generateList() {
//     const coursesBox = document.querySelector(".course-group");
//     coursesBox.innerHTML = "";
//     // console.log(coursesBox)
//         // console.log(coursesBox, "as courseBox")

//     courses.forEach((courses) => {
    //         const li = document.createElement("li");
//         li.classList.add("listed-Courses");
//          const name = document.createTextNode(courses.name);
//         li.appendChild(name);
//         console.log(name, "as name")

//         const span = document.createElement("span");
//         span.classList.add("float-right");
//         const price = document.createTextNode("$ " + courses.price);
//         span.appendChild(price);

//         li.appendChild(span);
//         // console.log(li.innerHTML, "as list")

//         coursesBox.appendChild(li);

//     });


// }

const timerCount = [
    {
        number: "0",
        Text: "Days",
    },

    {
        number: "0",
        Text: "Hours",
    },
    
    {
        number: "0",
        Text: "Minute",
    },
    
    {
        number: "0",
        Text: "Seconds",
    },
    
];


const countDown = () => {
    //manipulating the DOM

    const display = document.querySelector(".timerContainer");
    // display.innerHTML="",
    timerCount.forEach((timerCount, index) => { 
        const div = document.createElement("div");
        div.classList.add("timer");
        div.classList.add("days");
        
        const p = document.createElement("p");
        p.classList.add("bigText")
        p.setAttribute("id",`class${index}`)
        const number = document.createTextNode(timerCount.number);
        p.appendChild(number);
        
        const span = document.createElement("span");
        const spanText = document.createTextNode(timerCount.Text);
        span.appendChild(spanText);
        
        div.appendChild(p);
        div.appendChild(span);
        display.appendChild(div)
        // console.log("testing",display);

        // console.log(p.);
        
    });
    
    /* <div class="timer days">
              <p class="bigText" id="days">0</p>
              <span>Days</span>
            </div> */
            
};

countDown();


// timerCount[0].number  = document.querySelector("#class0");
// timerCount[1].number  = document.querySelector("#class1");
// timerCount[2].number = document.querySelector("#class2");
// timerCount[3].number = document.querySelector("#class3");

// const bdDate = "21 june 2022";

// window.addEventListener("load", () => {
    
// // console.log(timerCount);

// const newBdDate = new Date(bdDate);
// const currentDate = new Date();

// const totalSeconds = (newBdDate - currentDate) / 1000;

// const days = Math.floor(totalSeconds / 3600 / 24);
// const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;
    
//     // timerCount[0].number  = days;
//     // console.log(timerCount);
    
//     // timerCount[1].number = hours;
//     // timerCount[2].number = mins;
//     // timerCount[3].number = seconds;
//     // // console.log("testing", seconds);
    
    
    
    
    
    
// });

// countDown();
// setInterval(countDown, 1000);





const bdDate = "21 june 2022";

// theDays = document.querySelector("#class0");
// theHours  = document.querySelector("#class1");
// theMinutes = document.querySelector("#class2");
// theSeconds = document.querySelector("#class3");
theDays = document.getElementById("class0");
theHours  = document.getElementById("class1");
theMinutes = document.getElementById("class2");
theSeconds = document.getElementById("class3");


const happyBirthDay = () => {

    
    const newBdDate = new Date(bdDate);
    const currentDate = new Date();
    
    const totalSeconds = (newBdDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

     //displaying in the DOM and applying formatTime function 
    
     theDays.innerHTML = days;
    theHours.innerHTML  = formatTime(hours);
    theMinutes.innerHTML = formatTime(mins);
    theSeconds.innerHTML = formatTime(seconds);
    

    
};

formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
};

happyBirthDay();

setInterval(happyBirthDay, 1000);

