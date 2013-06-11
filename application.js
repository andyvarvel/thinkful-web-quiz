var questions = [
	[["If officials awarded Lance Armstrong's 2005 Tour De France title to the next fastest finisher, what place would they be?"], ["2nd", "4th", "16th", "23rd"], 3],
	[["How many engineers of the Titanic survived?"], ["None", "1", "3", "approximately a dozen"], 0],
	[["What did Russia give Pepsi in exchange for Pepsi products once?"], ["Monetary compensation", "A new factory complex", "a fleet of submarines", "the recipe for Coke"], 2],
	[["Samuel L Jackson has an interesting clause in his movie contracts. What is it?"], ["There must be coconut water at every shoot", "He must have 2 days off each week to play golf at their expense", "The latest hip hop music must be played in between all takes", "There must be no crew member with blonde hair"], 1],
	[["How much of Norway's electricity is powered by hydroelectric power?"], ["Less than 10%", "45%", "80%", "More than 95%"], 1],
	[["Which fruit or vegetable has the most fat?"], ["Avocado", "Banana", "Mango", "Cucumber"], 0]
	];

$(document).ready(function() {



var radioButton = "<p><input type='radio' name ='Question" 
for (var counter = 0; counter < 6; counter = counter +1) { //Main Loop
	$('form').append("<div class = 'questionNumber'></div><h3>"+(counter+1)+"</h>"); //Adds Question Number
	$('form').append("<h2>"+questions[counter][0]+"</h2>"); //Adds Question
		for (var radioCounter = 0; radioCounter < 4; radioCounter = radioCounter + 1) { //Loop for Answers
			$('form').append(radioButton+ counter + "'>"+questions[counter][1][radioCounter]+"</p></br>"); //Appends each answer
		}
	$('form').append("<br><br>");	

}
	$('form').append("<input TYPE='button' VALUE='Compute Score!' onClick=markQuiz(questions)>");


});

function markQuiz(questions) {
	var totalMarks = 0;
	for (var answerCount = 0; answerCount<6; answerCount=answerCount+1) {
	
	}
}