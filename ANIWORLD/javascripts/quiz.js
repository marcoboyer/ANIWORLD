//Array in dem die Fragen, Optionen und richtige Antwort verstaut wird
const quiz = [
    {
        question: 'Fairy Tail: Welche Art von Slayer gibt es in der Welt von Fairy Tail nicht?',
        options: ['Phoenix-Slayer','Devil/Demon-Slayer','God-Slayer','Dragon-Slayer'],
        answer:0
    },
    {
        question: 'Naruto Shippuuden: Welchen Ort gibt es nicht?',
        options: ['Sunagakure','Otakugakure','Iwagakure','Konohagakure','Kumogakure'],
        answer:1
    },
    {
        question: 'One Piece: Wie lautet der Unterweltname von Don Quichotte de Flamingo?',
        options: ['Ass','Master','God','Joker','King'],
        answer:3
    },
    {
        question: 'Dragon Ball Chou/Super: Wer ist kein Mitglied des 6. Universums?',
        options: ['Furosuto/Frost','Kyabe','Hitto/Heat','Monaka','Magetta'],
        answer:3
    },
    {
        question: 'Sword Art Online: Wie viele Ebenen gibt es in Aincrad?',
        options: ['50','1000','500','10','100'],
        answer:4
    },
    {
        question: 'Akame ga Kill! Wie nennt sich die Assassinen-Gruppe von Najenda?',
        options: ['Night Raid','Night Zone','Night Knight','Night Wish','Night Dead'],
        answer:0
    },
    {
        question: 'Shingeki no Kyojin: Ein Synonym von Shingeki no Kyojin ist?',
        options: ['Rising on Hope','Dead or Alive','Dark and Light','Secret of Mana','Attack on Titan'],
        answer:4
    },
    {
        question: 'One Punch Man: Wie lautet der Name von Saitamas "Schüler"?',
        options: ['Puri-Puri-Prisoner','Mumen Rider','Tatsumaki','Genos','Ikemen Kamen Amai Masuku'],
        answer:3
    },
    {
        question: 'Ichiban Ushiro no Daimaou: Akutos zukünftiger Beruf?',
        options: ['Dämonenkönig','Dorftrottel','Arbeitsloser','Heiliger','Hohepriester'],
        answer:0
    },
    {
        question: 'Steins:Gate: Die Thematik des Anime ist?',
        options: ['Kernfusion','Psychokinese','Telekinese','Zeitreisen','Teleport'],
        answer:3
    }
]

//Konstanten für alle nötigen Boxen, Nummern und Texte
const questionNumber = document.querySelector(".question-number"),
    questionText = document.querySelector(".question-text"),
    optionBox = document.querySelector(".option-box"),
    startBox = document.querySelector(".start-box"),
    quizBox = document.querySelector(".quiz-box"),
    resultBox = document.querySelector(".result-box");

//Variablen um mögliche Fragen und Optionen festzulegen, aber auch die jeweiligen Counter    
let questionCounter = 0,
    currentQuestion,
    availableQuestions = [],
    availableOptions = [],
    correctAnswers = 0;

function getNewQuestion(){
    //Fragen Nummer anzeigen
    questionNumber.innerHTML = "FRAGE: " + (questionCounter + 1);

    //Zufällige Frage bekommen, Index der currenQuestion zuweisen und Frage anzeigen
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;

    //Position von questionIndex aus dem availableQuestions Array bekommen und dann daraus entfernen
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);

    //Optionenlänge festlegen und in availableOptions Array einfügen
    const optionLength = currentQuestion.options.length;
    for(let i=0; i<optionLength; i++){
        availableOptions.push(i);
    }


    //Optionen in HTML erzeugen
    for(let i=0; i<optionLength; i++){
        //Zufällige Optionen bekommen, Position von optionIndex aus dem availableQuestions Array bekommen und dann daraus entfernen
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);

        //divs werden erstellt, Optioneninhalte eigefügt und aneinander gehängt 
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.className = "option";
        optionBox.appendChild(option);

        //Auf Klick wird Funktion getResult(element) aufgerufen
        option.setAttribute("onClick","getResult(this)");
    }
    //Fragen werden gezählt 
    questionCounter++;
}

function getResult(element){
    // Typ von String auf Int ändern
    const id = parseInt(element.id);

    //Antwort mit Lösung vergleichen, Hintergrund ändern und pointerEvents entfernen
    if(id=== currentQuestion.answer){
        element.style.background="green";
        element.style.color="white";
        const optionLength = optionBox.children.length;
        for(let i=0; i<optionLength;i++){
            optionBox.children[i].style.pointerEvents = "none";
        }
        //Richtige Antworten werden gezählt
        correctAnswers++;
    }else{
        element.style.background="red";
        element.style.color="white";
        const optionLength = optionBox.children.length;
        for(let i=0; i<optionLength;i++){
            optionBox.children[i].style.pointerEvents = "none";
        }
    }
}

function next(){
    //Alle Fragen durch dann quiz beendet, sonst Inhalte entfernen, neue Frage und Optionen bekommen
    if(questionCounter === quiz.length){
        quizOver();
    }else{
        optionBox.innerHTML = '';
        getNewQuestion();
    }
}

function setAvailableQuestions(){
    //Anzahl der Fragen festlegen und eins nach dem anderen einfügen 
    const totalQuestions = quiz.length;
    for(let i=0; i<totalQuestions; i++){
        availableQuestions.push(quiz[i]);
    }
}

function quizOver(){
    //hide quizBox
    quizBox.classList.add("hide");
    //show resultBox
    resultBox.classList.remove("hide");

    quizResult();
}

function quizResult(){
    //totalscore und precentage errechnen und anzeigen
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
    const percentage = (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";

    //Rank Vergabe
    if(percentage>80){
        document.getElementById('rank').style.backgroundImage="url(pictures1/ultimatecrown.png)";
        document.getElementById('rankname').innerHTML = "Ultimatecrown";
    }else if(percentage>60){
        document.getElementById('rank').style.backgroundImage="url(pictures1/goldcrown.png)";
        document.getElementById('rankname').innerHTML = "Goldcrown";
    }else if(percentage>40){
        document.getElementById('rank').style.backgroundImage="url(pictures1/silvercrown.png)";
        document.getElementById('rankname').innerHTML = "Silvercrown";
    }else{
        document.getElementById('rank').style.backgroundImage="url(pictures1/norank.png)";
        document.getElementById('rankname').innerHTML = "I'M SORRY, BUT NO RANK FOR YOU!";
    }
}

function startQuiz(){
    //hide startBox
    startBox.classList.add("hide");
    //show quizBox
    quizBox.classList.remove("hide");

    setAvailableQuestions();
    getNewQuestion();
}
