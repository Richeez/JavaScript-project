const quizList = [
    {
        question: "How old is Big Fame?",
       a: "2", 
       b: "25", 
       c: "20", 
       d: "14", 
      correct: "b" 
    },
    {
        question: "What is the most programming language in 2019?",
       a: "java", 
       b: "python", 
       c: "C", 
       d: "JavaScript", 
      correct: "d" 
    },
    {
        question: "What is the full meaning of HTML?",
       a: "Hypertext Markup Language", 
       b: "Head To Mount Levi", 
       c: "Application programming Interface", 
       d: "Helicopter Terminals Motorboat Lamborghini", 
      correct: "a" 
    },
    {
        question: "Who is the president of Nigeria?",
       a: "Obasonjo", 
       b: "Aladdin", 
       c: "God's will ", 
       d: "Promise", 
      correct: "c" 
    },
    {
        question: "What is the full meaning USA?",
       a: "United States of America", 
       b: "United Standards of Ambitions", 
       c: "Unicode Staff", 
       d: "Unique's Association", 
      correct: "a" 
    },
    {
        question: "How old is Nigeria?",
       a: "63", 
       b: "50", 
       c: "20", 
       d: "none of the above", 
      correct: "d" 
    },
];

const questionnaire = document.getElementById("question");
const opt_1 = document.getElementById("opt_1");
const opt_2 = document.getElementById("opt_2");
const opt_3 = document.getElementById("opt_3");
const opt_4 = document.getElementById("opt_4");
const submitBtn = document.getElementById("submit");
const submitBtn2 = document.querySelector(".submit");
const nextBtn = document.getElementById("next");
const nextBtn2 = document.querySelector(".next");
let btnWrapper = document.querySelector(".btnWrapper");
const removeInput = document.querySelector(".removeInput");
const quizWrapper = document.querySelector(".quizWrapper");
const questionsCompleted = document.querySelector(".questionsCompleted");
const answers = document.querySelectorAll(".answer");


let currentQuiz = 0;

// loadQuiz();

const loadQuiz = () => {

    deselectAnswer();
    const quizData = quizList[currentQuiz];
    
    questionnaire.innerHTML = quizData.question
    
    opt_1.innerHTML = quizData.a;
    
    opt_2.innerHTML = quizData.b;
    
    opt_3.innerHTML = quizData.c;
    
    opt_4.innerHTML=quizData.d
    
};


let score = 0;

// let answer = undefined;

const getSelected = () => { 
    
    let answer = undefined;

    
    answers.forEach((pick) => {
        // console.log(pick.value);
        if (pick.checked) {
            
            answer = pick.id;
            // console.log(answer)
        }
    //   deselectAnswer();

});
return answer;
    

};
const deselectAnswer = () => { 

 answers.forEach((pick) => {
        pick.checked = false;
    
        
    });
    
};

//  menuBtn.onclick = function () {
//         if (sideNav.style.right == "-250px") {
//           sideNav.style.right = "0";
//           menu.src = "images/close.png";
//         } else {
//           sideNav.style.right = "-250px";
//           menu.src = "images/sidebar.png";
//         }
//       };
     

// submitBtn.onclick = () => {
//     console.log("testing");
//     if (score) {
//     }
    
// };

 
 btnWrapper.addEventListener("click", () => {
    //  console.log("testing");
    
    const answer = getSelected();
    
     console.log(answer);
    if (answer) {
        if (answer === quizList[currentQuiz].correct) {
            // console.log("testing", quizList[currentQuiz]);
            score++;
            // console.log(score);
            // console.log("checking")
        }
        currentQuiz++;
        if (currentQuiz < quizList.length) {
            nextBtn2.style.display = "block";
            submitBtn.style.display = "none";
            loadQuiz();
            
        } else {
            questionnaire.innerHTML = "";
            opt_1.innerHTML = "";
            opt_2.innerHTML = "";
            opt_3.innerHTML = "";
            opt_4.innerHTML = "";
            questionsCompleted.style.display = "flex";
            removeInput.style.display = "none";
            nextBtn2.style.display = " none";
            submitBtn.style.display = " block";
            // btnWrapper = submitBtn;
            
            
            
        };
                
            
            
        
        // deselectAnswer();
     }
     submitBtn.onclick = () => {
         if (score) {
         quizWrapper.innerHTML = `<h1>You got ${score} out of ${quizList.length} questions.</h1>  <button onclick="location.reload()">Reset</button> `
    }
    
 };

    // checkForScore();
});

loadQuiz();
