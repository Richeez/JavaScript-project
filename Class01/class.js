/*const uid = "12345abd";


var fullName = "Saturday Richard";
var email = "saturdayrichard98@gmail.com";
var password = "123456";
var confirmPassword = "Saturday Richard";
var courseCount = 0;
var isLoggedInFromGoogle = false;


console.log(`
User Unique ID : ${uid}

User Full Name is : ${fullName}

User Email Address is : ${email}

User Password is : ${password}

User confirmPassword is : ${confirmPassword}

User courseCount is : ${courseCount}

User isLoggedInFromGoogle is : ${isLoggedInFromGoogle}


`)*/


/*var faceBook = true;

var google = false;

var email = true;

var loggedIn = email + google;

if (faceBook) {
    console.log("Successfully logged in from facebook");
}

if (google) {
    console.log("incorrect input");
    
}

if (email) {
        console.log("Successfully logged in from email");

    
}



console.log(loggedIn)*/


/*You are creating a function for me that will handle if a student in secondary school passes or failed that class.
This function should be able to respond to real scenario where the student puts in the nine subject in JAMB and the score as well as the post UTME Score. The System alert if he is going to the University or Poly or College of Education or none.
In other words, you are building an admission calculator for JAMB Students.
*/


/*

let utmeScore = 300;
let jambScore = 400;

let averageScore = 180;

let leastScore = 120;

let admissionScore = (utmeScore + jambScore)/2;

  let passMark = function(studentSumScore) {
      if (studentSumScore >= admissionScore) {
          console.log(`Your score of ${studentSumScore} has qualified you to be a student of any university of your choice.`);
        
      } else if (studentSumScore >= averageScore ) {
          console.log(`Your score of ${studentSumScore} has qualified you to be a student of any Polytechnic of your choice.`);

          
      } else if (studentSumScore >= leastScore ) {
          console.log(`Your score of ${studentSumScore} has qualified you to be a student of any College of Education of your choice.`);
          
      } else {
          console.log(`Your score of ${studentSumScore} has disqualified you to be a student of any university, Polytechnic or College of your choice.`);
      } 
}

passMark(300);*/


/*
let TotalJambScore = 400;


let leastScore = 120;

let university = 350;

let polytechnic = 200;

let college = 150;


let totalExamScores = function (fullName,english,maths,sub3,sub4) {
    if (!fullName || !english || !maths || !sub3 || !sub4) {
        return "invalid";
        
    }

    let studentSumScore = english + maths + sub3 + sub4;

    if (leastScore > studentSumScore) {
        return `${fullName}, your score of ${studentSumScore} has disqualified you from being a student of any university, Polytechnic or College of your choice. 
        You are advised to work harder`;
        
    }
    
    if (college > studentSumScore) {
        return `${fullName}, your score of ${studentSumScore} has qualified you to be a student of any College of Education of your choice.`;
        
    }
    
    if (polytechnic > studentSumScore) {
        return `${fullName}, your score of ${studentSumScore} has qualified you to be a student of any Polytechnic of your choice.`;
        
    }
    
    if (university > studentSumScore) {
        return `${fullName}, your score of ${studentSumScore} has qualified you to be a student of any university of your choice.`;
        
    }

    return `Congratulations ${fullName}, you have just won a Scholarship!`;
    
}*/

//  let passMark = totalExamScores("David", 45, 62, 56, 32);

// console.log(passMark);

// console.log(totalExamScores());


const courses = [
    {
        name: "HTML from crash Course",
        price: "2.1",
    },

    {
        name: "Sematic Grouping Course",
        price: "1.5",
    },

    {
        name: "Cascading style sheet Course",
        price: "2.3",
    },

    {
        name: "External CSS Course",
        price: "2.2",
    },
];

function generateList() {
    const coursesBox = document.querySelector(".course-group");
    coursesBox.innerHTML = "";
    // console.log(coursesBox)
        // console.log(coursesBox, "as courseBox")
    
    courses.forEach((courses) => {
        const li = document.createElement("li");
        li.classList.add("listed-Courses");
         const name = document.createTextNode(courses.name);
        li.appendChild(name);
        console.log(name, "as name")

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + courses.price);
        span.appendChild(price);
        
        li.appendChild(span);
        // console.log(li.innerHTML, "as list")
        
        coursesBox.appendChild(li);
        
    });
    
    
}

// generateList();

window.addEventListener("load", generateList);

var greenBtn = document.querySelector(".greenBtn");

greenBtn.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();

});
var blueBtn = document.querySelector(".blueBtn");

blueBtn.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();

});





