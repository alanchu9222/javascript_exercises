
// Budget Controller
var budgetController = (function(){

})();

// User Interface Controller
var UIcontroller = (function(){
	
})();

// Global App Controller
var controller = (function(){
	// Detection of input and Add button
	var userInput = document.querySelector(".add__description");
	var addButton = document.querySelector(".add__btn");
	userInput.addEventListener('click',function(){alert('userInput was clicked');});
	addButton.addEventListener('click',function(){alert('addButton was clicked');});
})(budgetController, UIcontroller);