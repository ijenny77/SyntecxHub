/* =========================================================
   QUIZAPP
   Main JavaScript
========================================================= */


/* =========================================================
   QUIZ DATA
========================================================= */

const quizzes = [
    {
        id: 1,
        title: "HTML Basics",
        category: "HTML",
        difficulty: "Easy",
        description: "Test your understanding of HTML fundamentals.",
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyperlinks Text Mark Language",
                    "Home Tool Markup Language"
                ],
                answer: 0
            },
            {
                question: "Which tag is used to create a paragraph?",
                options: ["<h1>", "<p>", "<div>", "<para>"],
                answer: 1
            },
            {
                question: "Which tag is used to create a link?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: 1
            },
            {
                question: "Which HTML tag is used for the largest heading?",
                options: ["<heading>", "<h6>", "<h1>", "<head>"],
                answer: 2
            },
            {
                question: "Which attribute specifies an image source?",
                options: ["href", "src", "link", "source"],
                answer: 1
            }
        ]
    },

    {
        id: 2,
        title: "CSS Fundamentals",
        category: "CSS",
        difficulty: "Easy",
        description: "Practice the basics of styling websites with CSS.",
        questions: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Computer Style Syntax",
                    "Colorful Style System"
                ],
                answer: 1
            },
            {
                question: "Which property changes text color?",
                options: ["font-color", "text-color", "color", "text"],
                answer: 2
            },
            {
                question: "Which property changes the background color?",
                options: [
                    "background-color",
                    "bg-color",
                    "color-background",
                    "background"
                ],
                answer: 0
            },
            {
                question: "Which symbol is used to select a class?",
                options: ["#", ".", "@", "*"],
                answer: 1
            },
            {
                question: "Which property controls the size of text?",
                options: [
                    "text-size",
                    "font-size",
                    "size",
                    "font-style"
                ],
                answer: 1
            }
        ]
    },

    {
        id: 3,
        title: "JavaScript Basics",
        category: "JavaScript",
        difficulty: "Medium",
        description: "Test your knowledge of JavaScript fundamentals.",
        questions: [
            {
                question: "Which keyword can be used to declare a variable?",
                options: ["variable", "let", "define", "int"],
                answer: 1
            },
            {
                question: "Which symbol is used for strict equality?",
                options: ["=", "==", "===", "!="],
                answer: 2
            },
            {
                question: "Which method converts JSON text into a JavaScript object?",
                options: [
                    "JSON.parse()",
                    "JSON.object()",
                    "JSON.convert()",
                    "JSON.read()"
                ],
                answer: 0
            },
            {
                question: "Which keyword is used to create a function?",
                options: ["function", "method", "func", "define"],
                answer: 0
            },
            {
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Method",
                    "Document Oriented Model",
                    "Digital Object Management"
                ],
                answer: 0
            }
        ]
    },

    {
        id: 4,
        title: "Java Programming",
        category: "Java",
        difficulty: "Medium",
        description: "Check your knowledge of Java programming.",
        questions: [
            {
                question: "Which keyword is used to create a class in Java?",
                options: ["class", "Class", "new", "object"],
                answer: 0
            },
            {
                question: "Which method is the entry point of a Java application?",
                options: ["start()", "main()", "run()", "execute()"],
                answer: 1
            },
            {
                question: "Which type is used to store whole numbers?",
                options: ["float", "String", "int", "boolean"],
                answer: 2
            },
            {
                question: "Which keyword creates an object?",
                options: ["object", "create", "new", "this"],
                answer: 2
            },
            {
                question: "Which keyword is used for inheritance?",
                options: ["inherits", "extends", "implements", "superclass"],
                answer: 1
            }
        ]
    },

    {
        id: 5,
        title: "React Basics",
        category: "React",
        difficulty: "Hard",
        description: "Test your understanding of React components and concepts.",
        questions: [
            {
                question: "What is React primarily used for?",
                options: [
                    "Database management",
                    "Building user interfaces",
                    "Operating systems",
                    "Network configuration"
                ],
                answer: 1
            },
            {
                question: "What is a React component?",
                options: [
                    "A database",
                    "A reusable UI building block",
                    "A CSS file",
                    "A server"
                ],
                answer: 1
            },
            {
                question: "Which hook is commonly used for state?",
                options: [
                    "useData",
                    "useState",
                    "useValue",
                    "useComponent"
                ],
                answer: 1
            },
            {
                question: "Which syntax is commonly used to write JSX?",
                options: [
                    "HTML-like syntax inside JavaScript",
                    "SQL syntax",
                    "Python syntax",
                    "Java syntax"
                ],
                answer: 0
            },
            {
                question: "What does JSX allow developers to do?",
                options: [
                    "Write SQL",
                    "Write HTML-like UI inside JavaScript",
                    "Create databases",
                    "Compile Java"
                ],
                answer: 1
            }
        ]
    },

    {
        id: 6,
        title: "Networking Basics",
        category: "Networking",
        difficulty: "Hard",
        description: "Practice fundamental computer networking concepts.",
        questions: [
            {
                question: "What does IP stand for?",
                options: [
                    "Internet Protocol",
                    "Internal Program",
                    "Internet Process",
                    "Interface Protocol"
                ],
                answer: 0
            },
            {
                question: "Which device forwards packets between networks?",
                options: [
                    "Switch",
                    "Router",
                    "Keyboard",
                    "Monitor"
                ],
                answer: 1
            },
            {
                question: "What does LAN stand for?",
                options: [
                    "Large Area Network",
                    "Local Area Network",
                    "Linked Access Network",
                    "Local Access Node"
                ],
                answer: 1
            },
            {
                question: "Which protocol is commonly used to load websites?",
                options: ["HTTP", "FTP", "SMTP", "SSH"],
                answer: 0
            },
            {
                question: "What does DNS translate?",
                options: [
                    "IP addresses into files",
                    "Domain names into IP addresses",
                    "Files into domains",
                    "Passwords into IP addresses"
                ],
                answer: 1
            }
        ]
    }
];


/* =========================================================
   STATE
========================================================= */

let currentQuiz = null;
let currentQuestion = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = 120;
let quizFinished = false;


/* =========================================================
   LOCAL STORAGE
========================================================= */

let appData = JSON.parse(
    localStorage.getItem("quizAppData")
) || {
    xp: 0,
    streak: 0,
    attempts: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
    history: [],
    bestScore: 0,
    favoriteCategory: null
};


function saveData() {
    localStorage.setItem(
        "quizAppData",
        JSON.stringify(appData)
    );
}


/* =========================================================
   DOM ELEMENTS
========================================================= */

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

const quizRunner = document.getElementById("quiz-runner");
const homeLanding = document.getElementById("home-landing");

const catList = document.getElementById("cat-list");
const recommendedList =
    document.getElementById("recommended-list");

const quizzesList =
    document.getElementById("quizzes-list");

const searchInput =
    document.getElementById("quiz-search");

const difficultyFilter =
    document.getElementById("difficulty-filter");

const questionText =
    document.getElementById("q-text");

const questionOptions =
    document.getElementById("q-options");

const questionNumber =
    document.getElementById("question-number");

const questionDifficulty =
    document.getElementById("question-difficulty");

const runnerTitle =
    document.getElementById("runner-title");

const runnerAnswered =
    document.getElementById("runner-answered");

const runnerTotal =
    document.getElementById("runner-total");

const runnerProgress =
    document.getElementById("runner-progress");

const timerDisplay =
    document.getElementById("timer");

const resultCard =
    document.getElementById("result-card");

const questionCard =
    document.getElementById("question-card");


/* =========================================================
   NAVIGATION
========================================================= */

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageName = item.dataset.page;

        showPage(pageName);

    });

});


function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const page = document.getElementById(
        `page-${pageName}`
    );

    const nav = document.querySelector(
        `[data-page="${pageName}"]`
    );

    if (page) {
        page.classList.add("active");
    }

    if (nav) {
        nav.classList.add("active");
    }

    if (pageName === "home") {
        updateHome();

        /*
         * If the user goes to Home manually,
         * hide the quiz runner.
         */
        if (quizRunner) {
            quizRunner.style.display = "none";
        }

        if (homeLanding) {
            homeLanding.style.display = "block";
        }
    }

    if (pageName === "quizzes") {

        renderQuizList();

        /*
         * If there is an active quiz, keep
         * the quiz runner visible on Quizzes.
         */
        if (currentQuiz) {
            showQuizRunner();
        }
    }

    if (pageName === "progress") {
        updateProgressPage();
    }

    if (pageName === "profile") {
        updateProfile();
    }
}


/* =========================================================
   HOME
========================================================= */

function updateHome() {

    document.getElementById("home-streak").textContent =
        appData.streak;

    document.getElementById("home-xp").textContent =
        appData.xp;

    document.getElementById("home-level").textContent =
        getLevel();

    document.getElementById("home-accuracy").textContent =
        getAccuracy() + "%";

    document.getElementById("home-correct").textContent =
        appData.correct;

    document.getElementById("home-wrong").textContent =
        appData.wrong;

    document.getElementById("home-skipped").textContent =
        appData.skipped;

    const totalAnswers =
        appData.correct +
        appData.wrong +
        appData.skipped;

    const percentage =
        totalAnswers === 0
            ? 0
            : Math.round(
                (appData.correct / totalAnswers) * 100
            );

    document.getElementById(
        "home-stat-fill"
    ).style.width = `${percentage}%`;

    renderCategories();
    renderRecentActivity();
    renderRecommended();
}


/* =========================================================
   CATEGORIES
========================================================= */

function getCategories() {

    return [
        ...new Set(
            quizzes.map(quiz => quiz.category)
        )
    ];
}


function renderCategories() {

    catList.innerHTML = "";

    const categories = getCategories();

    categories.forEach(category => {

        const count = quizzes.filter(
            quiz => quiz.category === category
        ).length;

        const item =
            document.createElement("div");

        item.className = "category-item";

        item.innerHTML = `
            <span>${category}</span>
            <span>
                ${count}
                quiz${count !== 1 ? "zes" : ""}
            </span>
        `;

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            showPage("quizzes");

            searchInput.value = category;

            renderQuizList();

        });

        catList.appendChild(item);

    });
}


/* =========================================================
   RECOMMENDED
========================================================= */

function renderRecommended() {

    recommendedList.innerHTML = "";

    let recommended = quizzes;

    if (appData.favoriteCategory) {

        const matching = quizzes.filter(
            quiz =>
                quiz.category ===
                appData.favoriteCategory
        );

        if (matching.length > 0) {
            recommended = matching;
        }
    }

    recommended
        .slice(0, 3)
        .forEach(quiz => {

            const item =
                document.createElement("div");

            item.className = "quiz-item";

            item.style.marginBottom = "10px";

            item.innerHTML = `
                <h3>${quiz.title}</h3>

                <p>
                    ${quiz.category} ·
                    ${quiz.difficulty}
                </p>

                <button class="btn primary">
                    Start Quiz
                </button>
            `;

            item.querySelector("button")
                .addEventListener(
                    "click",
                    () => startQuiz(quiz)
                );

            recommendedList.appendChild(item);

        });
}


/* =========================================================
   RECENT ACTIVITY
========================================================= */

function renderRecentActivity() {

    const container =
        document.getElementById("home-recent");

    if (appData.history.length === 0) {

        container.innerHTML = `
            <div class="recent-sub">
                No quizzes completed yet.
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    appData.history
        .slice(-3)
        .reverse()
        .forEach(item => {

            const div =
                document.createElement("div");

            div.className = "recent-sub";

            div.style.marginBottom = "8px";

            div.innerHTML = `
                <strong>${item.title}</strong>
                <br>
                ${item.score}% · +${item.xp} XP
            `;

            container.appendChild(div);

        });
}


/* =========================================================
   QUIZ LIST
========================================================= */

function renderQuizList() {

    if (!quizzesList) return;

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";

    const difficulty =
        difficultyFilter
            ? difficultyFilter.value
            : "all";

    quizzesList.innerHTML = "";

    const filtered = quizzes.filter(quiz => {

        const matchesSearch =
            quiz.title
                .toLowerCase()
                .includes(search) ||

            quiz.category
                .toLowerCase()
                .includes(search);

        const matchesDifficulty =
            difficulty === "all" ||
            quiz.difficulty === difficulty;

        return (
            matchesSearch &&
            matchesDifficulty
        );

    });

    if (filtered.length === 0) {

        quizzesList.innerHTML = `
            <div class="panel">
                <h3>No quizzes found</h3>
                <p class="about-p">
                    Try a different search or difficulty.
                </p>
            </div>
        `;

        return;
    }

    filtered.forEach(quiz => {

        const card =
            document.createElement("div");

        card.className = "quiz-item";

        card.innerHTML = `
            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    margin-bottom:12px;
                "
            >
                <span
                    style="
                        font-size:10px;
                        font-weight:700;
                        color:#777;
                    "
                >
                    ${quiz.category}
                </span>

                <span
                    style="
                        font-size:9px;
                        font-weight:700;
                        padding:5px 8px;
                        border-radius:6px;
                        background:#f1f1ee;
                    "
                >
                    ${quiz.difficulty}
                </span>
            </div>

            <h3>${quiz.title}</h3>

            <p>${quiz.description}</p>

            <div
                style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:10px;
                "
            >
                <span
                    style="
                        font-size:10px;
                        color:#999;
                    "
                >
                    ${quiz.questions.length} questions
                </span>

                <button class="btn primary">
                    Start Quiz →
                </button>
            </div>
        `;

        card.querySelector("button")
            .addEventListener(
                "click",
                () => startQuiz(quiz)
            );

        quizzesList.appendChild(card);

    });
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderQuizList
    );

}


if (difficultyFilter) {

    difficultyFilter.addEventListener(
        "change",
        renderQuizList
    );

}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz(quiz) {

    currentQuiz = quiz;

    currentQuestion = 0;

    userAnswers =
        new Array(quiz.questions.length)
            .fill(null);

    quizFinished = false;

    timeLeft = 120;

    /*
     * IMPORTANT:
     * Open the QUIZZES page instead of HOME.
     */
    showPage("quizzes");

    /*
     * Show the quiz runner inside the
     * Quizzes page.
     */
    showQuizRunner();

    startTimer();

    renderQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SHOW QUIZ RUNNER
========================================================= */

function showQuizRunner() {

    if (!quizRunner) return;

    /*
     * Hide the quiz cards.
     */
    if (quizzesList) {
        quizzesList.style.display = "none";
    }

    /*
     * Show the actual quiz.
     */
    quizRunner.style.display = "block";

    if (questionCard) {
        questionCard.style.display = "block";
    }

    if (resultCard) {
        resultCard.style.display = "none";
    }
}


/* =========================================================
   HIDE QUIZ RUNNER
========================================================= */

function hideQuizRunner() {

    if (quizRunner) {
        quizRunner.style.display = "none";
    }

    if (quizzesList) {
        quizzesList.style.display = "";
    }

}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    if (!currentQuiz) return;

    const question =
        currentQuiz.questions[currentQuestion];

    questionText.textContent =
        question.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;

    questionDifficulty.textContent =
        currentQuiz.difficulty;

    runnerTitle.textContent =
        `Question ${currentQuestion + 1} of ${currentQuiz.questions.length}`;

    runnerAnswered.textContent =
        userAnswers.filter(
            answer => answer !== null
        ).length;

    runnerTotal.textContent =
        currentQuiz.questions.length;

    const progress =
        ((currentQuestion + 1) /
            currentQuiz.questions.length) *
        100;

    runnerProgress.style.width =
        `${progress}%`;

    questionOptions.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className = "option";

            button.textContent = option;

            if (
                userAnswers[currentQuestion] ===
                index
            ) {

                button.classList.add("selected");

            }

            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );

            questionOptions.appendChild(
                button
            );

        }
    );

    document.getElementById(
        "btn-prev"
    ).disabled =
        currentQuestion === 0;

    document.getElementById(
        "btn-next"
    ).textContent =
        currentQuestion ===
        currentQuiz.questions.length - 1
            ? "Finish ✓"
            : "Next →";
}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index) {

    userAnswers[currentQuestion] =
        index;

    renderQuestion();

}


/* =========================================================
   NEXT
========================================================= */

document.getElementById(
    "btn-next"
).addEventListener(
    "click",
    () => {

        if (!currentQuiz) return;

        if (
            currentQuestion <
            currentQuiz.questions.length - 1
        ) {

            currentQuestion++;

            renderQuestion();

        } else {

            finishQuiz();

        }

    }
);


/* =========================================================
   PREVIOUS
========================================================= */

document.getElementById(
    "btn-prev"
).addEventListener(
    "click",
    () => {

        if (!currentQuiz) return;

        if (currentQuestion > 0) {

            currentQuestion--;

            renderQuestion();

        }

    }
);


/* =========================================================
   SKIP
========================================================= */

document.getElementById(
    "btn-skip"
).addEventListener(
    "click",
    () => {

        if (!currentQuiz) return;

        userAnswers[currentQuestion] =
            null;

        if (
            currentQuestion <
            currentQuiz.questions.length - 1
        ) {

            currentQuestion++;

            renderQuestion();

        } else {

            finishQuiz();

        }

    }
);


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishQuiz();

            }

        }, 1000);
}


function updateTimer() {

    if (!timerDisplay) return;

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    if (quizFinished) return;

    if (!currentQuiz) return;

    quizFinished = true;

    clearInterval(timerInterval);

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    currentQuiz.questions.forEach(
        (question, index) => {

            const answer =
                userAnswers[index];

            if (answer === null) {

                skipped++;

            } else if (
                answer === question.answer
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );

    const total =
        currentQuiz.questions.length;

    const score =
        Math.round(
            (correct / total) * 100
        );

    const xp =
        calculateXP(
            score,
            currentQuiz.difficulty
        );

    appData.correct += correct;
    appData.wrong += wrong;
    appData.skipped += skipped;
    appData.attempts++;
    appData.xp += xp;

    appData.bestScore =
        Math.max(
            appData.bestScore,
            score
        );

    appData.favoriteCategory =
        currentQuiz.category;

    appData.streak++;

    appData.history.push({
        title: currentQuiz.title,
        category: currentQuiz.category,
        difficulty: currentQuiz.difficulty,
        score: score,
        correct: correct,
        wrong: wrong,
        skipped: skipped,
        xp: xp,
        date: new Date().toLocaleDateString()
    });

    saveData();

    showResult(
        score,
        correct,
        wrong,
        skipped,
        xp
    );
}


/* =========================================================
   XP
========================================================= */

function calculateXP(
    score,
    difficulty
) {

    let base = 10;

    if (difficulty === "Easy") {
        base = 10;
    }

    if (difficulty === "Medium") {
        base = 20;
    }

    if (difficulty === "Hard") {
        base = 30;
    }

    if (score >= 90) {
        return base + 20;
    }

    if (score >= 70) {
        return base + 10;
    }

    if (score >= 50) {
        return base;
    }

    return 5;
}


/* =========================================================
   RESULT
========================================================= */

function showResult(
    score,
    correct,
    wrong,
    skipped,
    xp
) {

    /*
     * Stay on the QUIZZES page.
     */

    showPage("quizzes");

    if (questionCard) {
        questionCard.style.display = "none";
    }

    if (resultCard) {
        resultCard.style.display = "block";
    }

    if (quizzesList) {
        quizzesList.style.display = "none";
    }

    document.getElementById(
        "result-pct"
    ).textContent =
        `${score}%`;

    document.getElementById(
        "result-xp"
    ).textContent =
        xp;

    document.getElementById(
        "res-correct"
    ).textContent =
        correct;

    document.getElementById(
        "res-wrong"
    ).textContent =
        wrong;

    document.getElementById(
        "res-skipped"
    ).textContent =
        skipped;

    const ring =
        document.getElementById(
            "result-ring"
        );

    ring.style.background =
        `conic-gradient(
            #111 ${score * 3.6}deg,
            #eeeeeb ${score * 3.6}deg
        )`;

    let title = "Quiz complete";

    if (score === 100) {
        title = "Perfect score!";
    } else if (score >= 80) {
        title = "Great work!";
    } else if (score >= 60) {
        title = "Good effort!";
    } else {
        title = "Keep practicing!";
    }

    document.getElementById(
        "result-title"
    ).textContent =
        title;

    document.getElementById(
        "result-sub"
    ).textContent =
        `You scored ${score}% on ${currentQuiz.title}.`;

    renderReview();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   REVIEW ANSWERS
========================================================= */

function renderReview() {

    const reviewList =
        document.getElementById(
            "review-list"
        );

    reviewList.innerHTML = "";

    currentQuiz.questions.forEach(
        (question, index) => {

            const answer =
                userAnswers[index];

            const item =
                document.createElement("div");

            item.className =
                "review-item";

            let status = "Skipped";

            if (answer !== null) {

                status =
                    answer === question.answer
                        ? "Correct"
                        : "Wrong";

            }

            item.innerHTML = `
                <strong>
                    ${index + 1}. ${question.question}
                </strong>

                <div
                    style="
                        margin-top:6px;
                        color:#777;
                        font-size:11px;
                    "
                >
                    Your answer:
                    ${
                        answer === null
                            ? "Skipped"
                            : question.options[answer]
                    }
                </div>

                <div
                    style="
                        margin-top:4px;
                        font-size:11px;
                        font-weight:700;
                    "
                >
                    ${status}
                </div>
            `;

            reviewList.appendChild(item);

        }
    );
}


/* =========================================================
   EXIT QUIZ
========================================================= */

document.getElementById(
    "btn-exit-quiz"
).addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Are you sure you want to leave this quiz?"
            );

        if (!confirmed) return;

        clearInterval(timerInterval);

        currentQuiz = null;

        quizFinished = false;

        hideQuizRunner();

        /*
         * Stay on the QUIZZES page.
         */
        showPage("quizzes");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   BACK HOME
========================================================= */

document.getElementById(
    "btn-back-home"
).addEventListener(
    "click",
    () => {

        clearInterval(timerInterval);

        currentQuiz = null;

        quizFinished = false;

        hideQuizRunner();

        /*
         * Only this button takes the user
         * back to Home.
         */
        showPage("home");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   RETAKE
========================================================= */

document.getElementById(
    "btn-retake"
).addEventListener(
    "click",
    () => {

        if (currentQuiz) {

            startQuiz(currentQuiz);

        }

    }
);


/* =========================================================
   PROGRESS
========================================================= */

function getAccuracy() {

    const total =
        appData.correct +
        appData.wrong;

    if (total === 0) {
        return 0;
    }

    return Math.round(
        (appData.correct / total) * 100
    );
}


function getLevel() {

    return Math.floor(
        appData.xp / 100
    ) + 1;
}


function getLevelXP() {

    return appData.xp % 100;
}


function updateProgressPage() {

    document.getElementById(
        "pg-attempts"
    ).textContent =
        appData.attempts;

    document.getElementById(
        "pg-correct"
    ).textContent =
        appData.correct;

    document.getElementById(
        "pg-wrong"
    ).textContent =
        appData.wrong;

    document.getElementById(
        "pg-accuracy"
    ).textContent =
        getAccuracy() + "%";

    renderCategoryPerformance();

    renderHistory();

}


/* =========================================================
   CATEGORY PERFORMANCE
========================================================= */

function renderCategoryPerformance() {

    const container =
        document.getElementById(
            "category-performance"
        );

    container.innerHTML = "";

    const categories =
        getCategories();

    categories.forEach(category => {

        const categoryHistory =
            appData.history.filter(
                item =>
                    item.category === category
            );

        let score = 0;

        if (categoryHistory.length > 0) {

            const total =
                categoryHistory.reduce(
                    (sum, item) =>
                        sum + item.score,
                    0
                );

            score =
                Math.round(
                    total /
                    categoryHistory.length
                );

        }

        const item =
            document.createElement("div");

        item.className =
            "category-performance-item";

        item.innerHTML = `
            <span>${category}</span>

            <div class="stat-track">
                <div
                    class="stat-fill"
                    style="width:${score}%"
                ></div>
            </div>

            <strong>${score}%</strong>
        `;

        container.appendChild(item);

    });
}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

    const container =
        document.getElementById(
            "pg-history"
        );

    if (appData.history.length === 0) {

        container.innerHTML = `
            <div class="recent-sub">
                No quizzes completed yet —
                finish one to see it here.
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    [...appData.history]
        .reverse()
        .forEach(item => {

            const historyItem =
                document.createElement("div");

            historyItem.className =
                "review-item";

            historyItem.style.display =
                "flex";

            historyItem.style.justifyContent =
                "space-between";

            historyItem.style.alignItems =
                "center";

            historyItem.innerHTML = `
                <div>
                    <strong>
                        ${item.title}
                    </strong>

                    <div
                        style="
                            margin-top:4px;
                            color:#999;
                            font-size:10px;
                        "
                    >
                        ${item.category}
                        ·
                        ${item.date}
                    </div>
                </div>

                <div style="text-align:right;">
                    <strong>
                        ${item.score}%
                    </strong>

                    <div
                        style="
                            color:#16845b;
                            font-size:10px;
                            margin-top:3px;
                        "
                    >
                        +${item.xp} XP
                    </div>
                </div>
            `;

            container.appendChild(
                historyItem
            );

        });
}


/* =========================================================
   CLEAR HISTORY
========================================================= */

document.getElementById(
    "btn-clear-history"
).addEventListener(
    "click",
    () => {

        if (appData.history.length === 0) {
            return;
        }

        const confirmed =
            confirm(
                "Clear all quiz history?"
            );

        if (!confirmed) return;

        appData.history = [];

        saveData();

        updateProgressPage();

        updateHome();

    }
);


/* =========================================================
   PROFILE
========================================================= */

function updateProfile() {

    const level =
        getLevel();

    const levelXP =
        getLevelXP();

    document.getElementById(
        "prof-fav"
    ).textContent =
        appData.favoriteCategory ||
        "—";

    document.getElementById(
        "prof-best"
    ).textContent =
        appData.attempts > 0
            ? `${appData.bestScore}%`
            : "—";

    document.getElementById(
        "prof-count"
    ).textContent =
        appData.attempts;

    document.getElementById(
        "prof-level"
    ).textContent =
        `Level ${level}`;

    document.getElementById(
        "prof-xp"
    ).textContent =
        `${appData.xp} XP`;

    document.getElementById(
        "level-text"
    ).textContent =
        `Level ${level}`;

    document.getElementById(
        "level-xp"
    ).textContent =
        `${levelXP} / 100 XP`;

    document.getElementById(
        "level-fill"
    ).style.width =
        `${levelXP}%`;

    renderAchievements();
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

    const container =
        document.getElementById(
            "badges"
        );

    container.innerHTML = "";

    const achievements = [
        {
            icon: "🎯",
            name: "First Quiz",
            unlocked:
                appData.attempts >= 1
        },

        {
            icon: "🔥",
            name: "5 Quizzes",
            unlocked:
                appData.attempts >= 5
        },

        {
            icon: "⚡",
            name: "100 XP",
            unlocked:
                appData.xp >= 100
        },

        {
            icon: "🏆",
            name: "Perfect Score",
            unlocked:
                appData.history.some(
                    item => item.score === 100
                )
        },

        {
            icon: "📚",
            name: "All Categories",
            unlocked:
                getCategories().every(
                    category =>
                        appData.history.some(
                            item =>
                                item.category ===
                                category
                        )
                )
        },

        {
            icon: "🚀",
            name: "Level 5",
            unlocked:
                getLevel() >= 5
        }
    ];

    achievements.forEach(
        achievement => {

            const badge =
                document.createElement("div");

            badge.className = "badge";

            if (!achievement.unlocked) {
                badge.style.opacity = "0.4";
            }

            badge.innerHTML = `
                <div class="badge-icon">
                    ${achievement.icon}
                </div>

                <div class="badge-name">
                    ${achievement.name}
                </div>
            `;

            container.appendChild(
                badge
            );

        }
    );
}


/* =========================================================
   DAILY CHALLENGE
========================================================= */

function setupDailyChallenge() {

    const today =
        new Date().getDate();

    const dailyQuiz =
        quizzes[
            today % quizzes.length
        ];

    const dailyTitle =
        document.getElementById("daily-title");

    const dailyDescription =
        document.getElementById("daily-description");

    const dailyButton =
        document.getElementById("btn-daily");

    if (dailyTitle) {
        dailyTitle.textContent =
            dailyQuiz.title;
    }

    if (dailyDescription) {
        dailyDescription.textContent =
            `${dailyQuiz.questions.length} questions · ${dailyQuiz.difficulty} difficulty`;
    }

    if (dailyButton) {
        dailyButton.onclick =
            () => startQuiz(dailyQuiz);
    }
}


/* =========================================================
   PROFILE AVATAR
========================================================= */

function setupProfileAvatar() {

    const avatar =
        document.getElementById(
            "profile-avatar"
        );

    if (avatar) {

        avatar.textContent =
            "A";

    }
}


/* =========================================================
   INITIALIZE
========================================================= */

function init() {

    setupDailyChallenge();

    setupProfileAvatar();

    updateHome();

    renderQuizList();

    updateProgressPage();

    updateProfile();

    showPage("home");

}


init();