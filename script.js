let questions = [{
        "question": "Was bedeutet HTML ausgeschrieben?",
        "answer_1": "Hypertext Main Logic",
        "answer_2": "Hausgemachte Tanzende Mäuse Lampe",
        "answer_3": "Hypertext Markup Language",
        "answer_4": "Highend Text Manager Languane",
        "right_answer": 3
        
    },
    {
        "question": "Wofür steht das 'www' bei vielen Internetseiten/portalen?",
        "answer_1": "Welt weites Welken",
        "answer_2": "World Wide Web",
        "answer_3": "Was Wissen Welpen",
        "answer_4": "Welt weites Wissen",
        "right_answer": 2
    },
    {
        "question": "Wofür steht 'Domain' wirklich?",
        "answer_1": "Webseiten Registriersystem (WRS)",
        "answer_2": "Domain System Service (DSS)",
        "answer_3": "Domain Name System (DNS)",
        "answer_4": "Webseiten System (WS)",
        "right_answer": 3
    },
    {
        "question": "Was ist 'Shell'?",
        "answer_1": "Ein Dienst um sich mit dem Computer zu verbinden",
        "answer_2": "Eine Programmiersprache",
        "answer_3": "Ein Betriebssystem",
        "answer_4": "Ein Programm um Spoofing Attacken zu versenden",
        "right_answer": 3
    },
    {
        "question": "Auf was basiert Android Studio?",
        "answer_1": "Java",
        "answer_2": "CSS",
        "answer_3": "Python",
        "answer_4": "HTML",
        "right_answer": 1
    },
    {
        "question": "Wie wird eine Webseite designed?",
        "answer_1": "Mit CSS",
        "answer_2": "Mit PHP",
        "answer_3": "Mit Python",
        "answer_4": "Mit Java",
        "right_answer": 1
    },
    {
        "question": "Wofür steht 'CSS'?",
        "answer_1": "Controled Server System",
        "answer_2": "Cascading Style Sheets",
        "answer_3": "Conduited System Server",
        "answer_4": "Create Serious System",
        "right_answer": 2
    },
    {
        "question": "Wofür steht 'a href' in HTML?",
        "answer_1": "Für Formatierungen wie Fett und Kursiv schreiben",
        "answer_2": "Um PHP zu Importieren",
        "answer_3": "Für einen Link",
        "answer_4": "Für ein Email link",
        "right_answer": 3
    },
]
let rightQuestion=0;
let currentQuestion=0;
function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){

    if(currentQuestion>=questions.length){
        // TODO: Show and screen
        document.getElementById('endscreen').style='';
        document.getElementById('questionBody').style='display:none';

        document.getElementById('amount-of-questions').innerHTML=questions.length;
        document.getElementById('amount-of-right-questions').innerHTML=rightQuestion;
    }
    else{

    
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML =currentQuestion+1;
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectionQuesttionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if(selectionQuesttionNumber==question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++;
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++; // Variable wird um 1 erhöht
    showQuestion();
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}