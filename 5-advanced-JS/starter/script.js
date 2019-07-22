/*
// FUNCTIONS and OBJECTS
// (1) Create a prototype constructor for John
// (2) Create an instance of the prototype John
// John has: name, yearOfBirth, job
// (3) Create a method for the prototype: calculateAge()

var Person = function(name,year,job){
	this.name = name;
	this.yearOfBirth = year;
	this.job = job;
//	this.calculateAge = function(){
//		console.log(2016-this.yearOfBirth);
//	}
}

// NOTE!!! the line below is not preceded with a var
Person.prototype.calculateAge = 
	function() {
		console.log(2016-this.yearOfBirth);
	};
// you can add a property outside of the constructor, same as adding a method
// Note this means all the instances below will inherit the last name "Smith"
Person.prototype.lastName = 'Smith'; 

var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


// FUNCTIONS as objects
// (1) an argument
// (2) as a return object
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn){
	var arrRes=[];
	for (var i=0; i<arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

// Using Bind to determine if the dataset contains how many adults
function calculateAge(year){
	return (2016-year);
}

function isAdult(threshold,age){
	return (age>=threshold);
}
// Pass in a function to calculate values in an array
var ages = arrayCalc(years,calculateAge);
console.log(ages);
// Pass in a function to identify adults an array
var isAdultJapan = isAdult.bind(this, 20); // The argument sequence: this, arg0, arg1
var adultJapan = arrayCalc(ages,isAdultJapan);
console.log(adultJapan);


// First Class Functions
function interviewQuestion(job)
{
	if(job==="designer"){
		return function(name){
			console.log('hello '+ name+': can you please explain what is UX design');
		}
	} else if(job==="front end designer"){
		return function(name){
			console.log('hello '+ name+': can you please explain what is React framework');
		}
	}

	// A function that returns a function; the returned function can be called immediately after.
	interviewQuestion("designer")("mark");

//>>> Hello Mark: can you please explain what is UX design



}



*/


/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
var Question = function(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

var q1 = new Question('Hows the weather today?',['Sunny','Wet','Overcast'],1);
var q2 = new Question('What time is it?',['noon','night','morning'],2);
var q3 = new Question('Where do you live?',['Uptown','Downtown','Waterfront'],3);

var questions = [];
questions.push(q1);
questions.push(q2);
questions.push(q3);

var question = new Question();

var selection = Math.floor(Math.random()*3);

console.log("Random number = "+selection);

function displayQuestion(q)
{
	var display = q.question;
	display += "\n";
	display += q.answers[0];
	display += "\n";
	display += q.answers[1];
	display += "\n";
	display += q.answers[2];
	display += "\n";
	return display;
}
function checkAnswer(q,a)
{
	if(q.correct == a)
	{
		console.log("The answer is correct!");
		return true;
	} else
	{
		console.log("The answer is wrong!");		
		return false;
	}
}
q = displayQuestion(questions[selection]);
var answer;
//for (var i=0; i<10; i++)
//{
  answer = prompt(q);
	if (checkAnswer(questions[selection],answer))
	{
		confirm("CORRECT!");
	} else
	{
		confirm("WRONG!");		
	}

})();

//}
