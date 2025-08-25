'use strict';

const questions = [
	{
		question: 'Which is the largest animal in the world?',
		answers: [
			{ text: 'Shark', correct: false },
			{ text: 'Blue whale', correct: true },
			{ text: 'Elephant', correct: false },
			{ text: 'Giraffe', correct: false },
		],
	},
	{
		question: 'Which is the smallest country in the world?',
		answers: [
			{ text: 'Vatican City', correct: true },
			{ text: 'Monaco', correct: false },
			{ text: 'Nauru', correct: false },
			{ text: 'Tuvalu', correct: false },
		],
	},
	{
		question: 'Which is the largest desert in the world?',
		answers: [
			{ text: 'Sahara', correct: true },
			{ text: 'Arabian', correct: false },
			{ text: 'Gobi', correct: false },
			{ text: 'Kalahari', correct: false },
		],
	},
	{
		question: 'Which is the smallest continent in the world?',
		answers: [
			{ text: 'Australia', correct: true },
			{ text: 'Europe', correct: false },
			{ text: 'Antarctica', correct: false },
			{ text: 'South America', correct: false },
		],
	},
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.InnerHTML = 'Next';
	showQuestion();
}

function showQuestion() {
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.innerHTML = answer.text;
		button.classList.add('btn');
		answerButton.appendChild(button);
	});
}
