// JavaScript we want to execute when the entire page has loaded.
// Here we will write code that needs to act upon page elements.
window.addEventListener('load', function(event) {

  // Find the submit button, and bind a 'click event handler'.
  var submit_button = document.getElementById('submit-input')
  submit_button.addEventListener('click', function(event) {

    // Define the cost for including a helmet in the hire.
    var helmet_cost = 5

    // Get the element we will write the result to.
    var result_element = document.getElementById('hire-form-result')

    // Get the input value for the model select box.
    var model_input = document.getElementById('model-input')
    var model_cost = model_input.value

    // Get the input value for the number of days field.
    var days_input = document.getElementById('days-input')
    var hire_days = days_input.value

    // Get the input value for the helmet checkbox.
    var helmet_input = document.getElementById('helmet-input')
    var helmet_included = helmet_input.value

    // Validate that the number of days is positive.
    if (hire_days <= 0) {
      // Display an error message to the user.
      result_element.innerText = 'A bike hire must be for a minimum of one day.'
      // Exit this function immediately (Do not complete other steps below).
      return
    }

    // Calculate the total hire cost based on the bike model and number of days.
    var total_cost = model_cost * hire_days

    // If a helmet is included, add the helmet cost to the total cost.
    if (helmet_included === true) {
      total_cost += helmet_cost
    }

    // Display the cost of the bike hire.
    result_element.innerText = 'Your bike hire will cost: $' + total_cost

  })

})
