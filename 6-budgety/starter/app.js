
// Budget Controller
var budgetController = (function(){

})();

// User Interface Controller
var UIctrl = (function(){
	return {
        getInput: function(){
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
            
        }
    }
})();

// Global App Controller
var controller = (function(){

	var ctrlAddItem = function() {
		// 1. Get field input data
        var input = UIctrl.getInput();
        console.log(input);
		// 2. Add item to budget controller
		// 3. Add item to the UI
		// 4. Calculate the budget
		// 5. Display the budget on the UI		
		alert('ctrl get item called');			
	}

	// Detection of global input and Add button
	var addButton = document.querySelector(".add__btn");
	document.addEventListener('keypress',function(event){
		if (event.keyCode === 13 || event.which === 13){
			ctrlAddItem();
		}
	});

	addButton.addEventListener('click',ctrlAddItem);

})(budgetController, UIctrl);