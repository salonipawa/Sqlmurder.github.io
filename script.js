// script.js
let currentQuestion = 1;

const questions = [
    {
        question: "1. Find the crime scene report for the murder that occurred on Jan.15, 2018.",
        query: "SELECT * FROM crime_scene_report WHERE date = '2018-01-15' AND type = 'murder';",
        response: `Crime Scene Report:
        - Date: 2018-01-15
        - Type: Murder
        - Location: SQL City
        - Description: The victim was found in the living room with a single gunshot wound to the head.`
    },
    {
        question: "2. Find the names of the witnesses who were present at the crime scene.",
        query: "SELECT * FROM witnesses;",
        response: `Witnesses:
        - Alice: Saw a suspicious person near the crime scene.
        - Bob: Heard a loud argument around the time of the murder.`
    },
    {
        question: "3. Find the list of suspects who were last seen in SQL City.",
        query: "SELECT * FROM suspects WHERE last_seen = 'SQL City';",
        response: `Suspects:
        - John Doe: Last seen near the crime scene.
        - Jane Smith: Known to have a grudge against the victim.
        - Mike Johnson: Has a history of violent behavior.`
    },
    {
        question: "4. Find the murder weapon used in the crime.",
        query: "SELECT * FROM murder_weapon WHERE location = 'crime scene';",
        response: `Murder Weapon:
        - Gun: Found at the crime scene with fingerprints.`
    },
    {
        question: "5. Find the motive of the primary suspect.",
        query: "SELECT * FROM motive WHERE suspect = 'John Doe';",
        response: `Motive:
        - John Doe: Financial disputes with the victim.`
    }
];

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const exampleQueriesElement = document.getElementById('example-queries');
    questionElement.textContent = questions[currentQuestion - 1].question;
    exampleQueriesElement.innerHTML = `<pre>${questions[currentQuestion - 1].query}</pre>`;
}

document.getElementById('execute-query').addEventListener('click', function() {
    const query = document.getElementById('sql-query').value.trim().toLowerCase();
    const output = document.getElementById('output');
    const correctQuery = questions[currentQuestion - 1].query.toLowerCase();

    if (query === correctQuery) {
        output.textContent = questions[currentQuestion - 1].response;
        currentQuestion++;
        if (currentQuestion <= questions.length) {
            loadQuestion();
        } else {
            output.textContent = "Congratulations! You've solved the mystery!";
            document.getElementById('execute-query').disabled = true;
        }
    } else {
        output.textContent = 'Invalid query. Please try again.';
    }
});

// Load the first question when the page loads
loadQuestion();
