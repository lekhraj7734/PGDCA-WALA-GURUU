// ========================================
// PGDCA WALA GURU
// LOGIN SYSTEM
// ========================================


function loginUser() {

    // Name input ko select karo
    let nameInput = document.getElementById("studentName");

    // Error message ko select karo
    let errorMessage = document.getElementById("loginError");

    // User ka naam lo
    let name = nameInput.value.trim();


    // Agar naam khali hai
    if (name === "") {

        errorMessage.innerText =
            "Please enter your name.";

        return;
    }


    // Naam browser me save karo
    localStorage.setItem("pgdcaUserName", name);


    // Home page par jao
    window.location.href = "home.html";

}



// ========================================
// HOME PAGE LOGIN CHECK
// ========================================

function checkLogin() {

    // Browser se saved name lena
    let userName =
        localStorage.getItem("pgdcaUserName");


    // Agar name nahi mila
    if (!userName) {

        window.location.href = "index.html";

        return;
    }


    // Header me naam dikhana
    let userNameElement =
        document.getElementById("userName");


    if (userNameElement) {

        userNameElement.innerText =
            userName;

    }


    // Hero section me naam dikhana
    let heroUserName =
        document.getElementById("heroUserName");


    if (heroUserName) {

        heroUserName.innerText =
            userName;

    }

}



// ========================================
// LOGOUT
// ========================================

function logoutUser() {

    // Saved name delete
    localStorage.removeItem("pgdcaUserName");

    // Login page par wapas
    window.location.href = "index.html";

}



// ========================================
// START QUIZ
// ========================================

function startQuiz(subject) {

    // Subject save karo
    localStorage.setItem(
        "selectedSubject",
        subject
    );


    // Quiz page open karo
    window.location.href = "quiz.html";

}



// ========================================
// PAGE LOAD
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Agar Home page hai
        if (
            window.location.pathname.includes("home.html")
        ) {

            checkLogin();

        }

    }
);
// ========================================
// QUIZ DATA
// ========================================

const quizData = {

    networking: [

        {
            question: "What does LAN stand for?",

            options: [
                "Local Area Network",
                "Large Area Network",
                "Long Area Network",
                "Local Access Network"
            ],

            answer: 0
        },


        {
            question: "Which device connects different networks?",

            options: [
                "Keyboard",
                "Router",
                "Monitor",
                "Printer"
            ],

            answer: 1
        },


        {
            question: "What is the full form of IP?",

            options: [
                "Internet Protocol",
                "Internet Program",
                "Internal Protocol",
                "Information Protocol"
            ],

            answer: 0
        }

    ],



    dbms: [

        {
            question: "What does DBMS stand for?",

            options: [
                "Database Management System",
                "Data Backup Management System",
                "Database Machine System",
                "Data Management Software"
            ],

            answer: 0
        },


        {
            question: "Which language is commonly used with databases?",

            options: [
                "HTML",
                "SQL",
                "CSS",
                "XML"
            ],

            answer: 1
        },


        {
            question: "Which key uniquely identifies a record?",

            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Alternate Key"
            ],

            answer: 1
        }

    ],



    sad: [

        {
            question: "What does SAD stand for?",

            options: [
                "System Analysis and Design",
                "Software Application Design",
                "System Application Development",
                "Software Analysis Database"
            ],

            answer: 0
        },


        {
            question: "Which diagram represents data flow?",

            options: [
                "DFD",
                "ER Diagram",
                "Class Diagram",
                "Flow Chart"
            ],

            answer: 0
        }

    ],



    fundamental: [

        {
            question: "What is the brain of a computer?",

            options: [
                "RAM",
                "Hard Disk",
                "CPU",
                "Monitor"
            ],

            answer: 2
        },


        {
            question: "Which is an input device?",

            options: [
                "Monitor",
                "Printer",
                "Keyboard",
                "Speaker"
            ],

            answer: 2
        }

    ],



    security: [

        {
            question: "What is a strong password?",

            options: [
                "123456",
                "password",
                "Combination of letters, numbers and symbols",
                "Your name"
            ],

            answer: 2
        },


        {
            question: "What is phishing?",

            options: [
                "A computer game",
                "A fraudulent attempt to obtain information",
                "A programming language",
                "A backup method"
            ],

            answer: 1
        }

    ],



    office: [

        {
            question: "Which software is used for word processing?",

            options: [
                "MS Word",
                "MS Excel",
                "MS Paint",
                "Calculator"
            ],

            answer: 0
        },


        {
            question: "Which application is used for spreadsheets?",

            options: [
                "Word",
                "Excel",
                "PowerPoint",
                "Outlook"
            ],

            answer: 1
        }

    ],



    history: [

        {
            question: "Which city is known as the Pink City?",

            options: [
                "Jodhpur",
                "Jaipur",
                "Udaipur",
                "Kota"
            ],

            answer: 1
        },


        {
            question: "Who founded Jaipur?",

            options: [
                "Maharana Pratap",
                "Sawai Jai Singh II",
                "Rana Sanga",
                "Prithviraj Chauhan"
            ],

            answer: 1
        }

    ],



    geography: [

        {
            question: "Which is the largest state of India by area?",

            options: [
                "Madhya Pradesh",
                "Rajasthan",
                "Maharashtra",
                "Uttar Pradesh"
            ],

            answer: 1
        },


        {
            question: "The Thar Desert is mainly located in which state?",

            options: [
                "Rajasthan",
                "Gujarat",
                "Punjab",
                "Haryana"
            ],

            answer: 0
        }

    ],



    culture: [

        {
            question: "Which dance form is associated with Rajasthan?",

            options: [
                "Ghoomar",
                "Bharatanatyam",
                "Kathakali",
                "Bihu"
            ],

            answer: 0
        },


        {
            question: "Which traditional painting style is famous in Rajasthan?",

            options: [
                "Madhubani",
                "Phad",
                "Warli",
                "Pattachitra"
            ],

            answer: 1
        }

    ]

};



// ========================================
// SUBJECT NAMES
// ========================================

const subjectNames = {

    networking: "Networking",

    dbms: "DBMS",

    sad: "System Analysis & Design",

    fundamental: "Computer Fundamental",

    security: "Computer Security",

    office: "MS Office",

    history: "History of Rajasthan",

    geography: "Geography",

    culture: "Art & Culture"

};



// ========================================
// QUIZ VARIABLES
// ========================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let currentQuestions = [];



// ========================================
// START QUIZ
// ========================================

function startQuiz(subject) {

    localStorage.setItem(
        "selectedSubject",
        subject
    );

    window.location.href =
        "quiz.html";
}



// ========================================
// INITIALIZE QUIZ
// ========================================

function initializeQuiz() {

    const subject =
        localStorage.getItem(
            "selectedSubject"
        );


    if (!subject || !quizData[subject]) {

        window.location.href =
            "home.html";

        return;
    }


    currentQuestions =
        quizData[subject];


    document.getElementById(
        "subjectTitle"
    ).textContent =
        subjectNames[subject];


    document.getElementById(
        "totalQuestions"
    ).textContent =
        currentQuestions.length;


    const userName =
        localStorage.getItem(
            "pgdcaUserName"
        );


    document.getElementById(
        "quizUserName"
    ).textContent =
        userName;


    loadQuestion();
}



// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

    const question =
        currentQuestions[currentQuestion];


    selectedAnswer = null;


    document.getElementById(
        "qNo"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "questionNumber"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    document.getElementById(
        "answerMessage"
    ).textContent =
        "";


    document.getElementById(
        "answerMessage"
    ).className =
        "answer-message";


    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function(option, index) {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "option";


            label.innerHTML = `

                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                >

                <strong>
                    ${String.fromCharCode(65 + index)}.
                </strong>

                <span>
                    ${option}
                </span>

            `;


            label.onclick =
                function() {

                    selectedAnswer =
                        index;


                    document
                        .querySelectorAll(".option")
                        .forEach(
                            function(item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                    label.classList.add(
                        "selected"
                    );

                };


            optionsContainer.appendChild(
                label
            );

        }
    );


    document.getElementById(
        "submitBtn"
    ).style.display =
        "block";


    document.getElementById(
        "submitBtn"
    ).disabled =
        false;


    document.getElementById(
        "nextBtn"
    ).style.display =
        "none";


    const progress =
        (
            currentQuestion /
            currentQuestions.length
        ) * 100;


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";
}



// ========================================
// SUBMIT ANSWER
// ========================================

function submitAnswer() {

    if (selectedAnswer === null) {

        document.getElementById(
            "answerMessage"
        ).textContent =
            "Please select an answer first.";

        document.getElementById(
            "answerMessage"
        ).className =
            "answer-message wrong-message";

        return;
    }


    const question =
        currentQuestions[currentQuestion];


    const options =
        document.querySelectorAll(
            ".option"
        );


    document.getElementById(
        "submitBtn"
    ).disabled =
        true;


    if (
        selectedAnswer ===
        question.answer
    ) {

        score++;


        document.getElementById(
            "answerMessage"
        ).textContent =
            "✓ Correct Answer!";


        document.getElementById(
            "answerMessage"
        ).className =
            "answer-message correct-message";


        options[selectedAnswer]
            .classList.add(
                "correct"
            );

    }

    else {

        document.getElementById(
            "answerMessage"
        ).textContent =
            "✗ Wrong Answer! Correct answer is " +
            String.fromCharCode(
                65 + question.answer
            );


        document.getElementById(
            "answerMessage"
        ).className =
            "answer-message wrong-message";


        options[selectedAnswer]
            .classList.add(
                "wrong"
            );


        options[question.answer]
            .classList.add(
                "correct"
            );

    }


    document.getElementById(
        "nextBtn"
    ).style.display =
        "block";
}



// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        currentQuestions.length
    ) {

        showResult();

        return;
    }


    loadQuestion();
}



// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    document.querySelector(
        ".question-card"
    ).style.display =
        "none";


    document.querySelector(
        ".quiz-top"
    ).style.display =
        "none";


    document.querySelector(
        ".progress-container"
    ).style.display =
        "none";


    document.getElementById(
        "resultBox"
    ).style.display =
        "block";


    document.getElementById(
        "finalScore"
    ).textContent =
        score;


    document.getElementById(
        "finalTotal"
    ).textContent =
        currentQuestions.length;


    const percentage =
        Math.round(
            (
                score /
                currentQuestions.length
            ) * 100
        );


    document.getElementById(
        "resultMessage"
    ).textContent =
        "You scored " +
        percentage +
        "%. Keep practicing!";
}



// ========================================
// GO HOME
// ========================================

function goHome() {

    window.location.href =
        "home.html";
}



// ========================================
// QUIZ PAGE LOAD
// ========================================

if (
    window.location.pathname.includes(
        "quiz.html"
    )
) {

    document.addEventListener(
        "DOMContentLoaded",
        function() {

            initializeQuiz();

        }
    );

}