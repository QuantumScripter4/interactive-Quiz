var questions = [
    {
        question: "Who is known as the king of cricket?",
        choices: ["Virat Kohli", "MSD", "Rohit Sharma", "ABD"],
        correctAnswer: 0
    },
    {
        question: "Which cricketer has the nickname 'Captain Cool'?",
        choices: ["Virat Kohli", "MSD", "Rohit Sharma", "ABD"],
        correctAnswer: 1
    },
    {
        question: "In which country is the MCG (Melbourne Cricket Ground) located?",
        choices: ["Australia", "India", "England", "South Africa"],
        correctAnswer: 0
    },
    {
        question: "Who holds the record for the highest individual score in a Test match?",
        choices: ["Sachin Tendulkar", "Brian Lara", "Virat Kohli", "Steve Smith"],
        correctAnswer: 1
    },
    {
        question: "Which country has won the most Cricket World Cups?",
        choices: ["India", "Australia", "West Indies", "Pakistan"],
        correctAnswer: 1
    },
    {
        question: "Who is the leading run-scorer in international T20 cricket?",
        choices: ["Virat Kohli", "Martin Guptill", "Rohit Sharma", "Chris Gayle"],
        correctAnswer: 0
    },
    {
        question: "In cricket, what does LBW stand for?",
        choices: ["Leg Before Wicket", "Long Boundary Width", "Last Bowled Wicket", "Legends of Ball Watching"],
        correctAnswer: 0
    },
    {
        question: "Which cricketer is known as the 'Rawalpindi Express'?",
        choices: ["Shoaib Akhtar", "Wasim Akram", "Imran Khan", "Waqar Younis"],
        correctAnswer: 0
    },
    {
        question: "Who was the first cricketer to score a double century in One Day Internationals?",
        choices: ["Virender Sehwag", "Sachin Tendulkar", "Chris Gayle", "Rohit Sharma"],
        correctAnswer: 1
    },
    {
        question: "Which team has won the most Indian Premier League (IPL) titles?",
        choices: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Kolkata Knight Riders"],
        correctAnswer: 0
    },
    {
        question: "Who is the fastest bowler to reach 100 wickets in ODIs?",
        choices: ["Mitchell Starc", "Saqlain Mushtaq", "Shane Warne", "Rashid Khan"],
        correctAnswer: 3
    }
    // Add more questions in a similar format
];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function (){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            var value = $("input[type='radio']:checked").val();

            if (value === undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswer++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".questions");
    var choiceList = $(document).find(".choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();
    for (var i = 0; i < numChoices; i++) {
        $(choiceList).append(
            '<li><input type="radio" value="' + i + '" name="dynradio" />' +
            ' ' + questions[currentQuestion].choices[i] + '</li>'
        );
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizMessage").text("You scored: " + correctAnswer + " out of " + questions.length);
    $(document).find(".quizMessage").show();
    $(document).find(".nextButton").text("Try Again?");
}

function hideScore() {
    $(document).find(".quizMessage").hide();
}