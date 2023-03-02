# userRegistrationApp
Created a user-list app. This challenge makes heavy use of DOM manipulation and requires knowledge of DOM events and Event-Handling.

Concepts Covered:

Event Objects - DOM Element Default Behaviour - DOM element properties & chaining - Conditional Rendering - Modifying styles, classes using DOM - Creating DOM elements - Functions arguments (pass by reference) - Callback Functions - Return Statements

Challenge:

 

Get references to all HTML elements that you think you will need to complete this app using the ids given to you in the template file. You may modify the HTML file in any way besides adding id’s and classes since when you work on a real-world codebase you won’t always have the liberty of changing an app’s appearance/mark-up as you please. 

The first part of this app’s functionality deals with creating functions that work together to achieve tabbed content so that the app can simulate the behavior of a SPA (single page application).

The first step to achieving tabbed content has already been done for you with the references on line 8 and line 12, by splitting up the elements on the page using their classes. Use CSS properties, the DOM API, and Event Handling techniques to hide and show content based on its class (remove the comments on line 4 and line 14 in the CSS file to get a preview of what the layout should look like).

When a user submits data in the form or clicks the button that says “view user list”, they should only view the mark-up in the usersTab. Likewise, when a user clicks the button with the text “register user” they should only view the mark-up in the registerTab (view the console and the two references on lines 8 & 12 in the js file if you are still confused as to which elements belong in which tab). Use the addEventListener method for all functionality above, since we will be adding more functionality later on in the next part of the challenge

The next part of this app is the data aspect, where we will need to retrieve the data in the input fields in the register tab when a user clicks the submit button of the form. First initialize an empty array called “users”, which will be used to store your list of user objects that you will be dynamically creating using the HTML form in the register tab. Remember when the submit button is clicked, you must change tabs to the usersTab as well.

We will then need to create a function with the name of “createUser” that uses this data, creates a JavaScript object with the variable name of “newUser” and finally adds it to the “users” Array.

We then need to create another function called “createUserElement”. This function must take in 1 argument called “user” or anything appropriate, that will be used to represent a user object. Inside this function you need to do three things:

Use either the DOM API or a Template Literal/String to create a new DOM element to display a user in the browser and save it to a variable with an appropriate name (use the mock element on line 63 of the HTML file for an example of what the HTML should look like)
Destructure the user object passed in as an argument and inject each property of the user object inside the created DOM element.
Write a return statement so we can use this element in a later function.
The last function we will need is a function called “populateUserList”. This function will also only have one argument with the name of array/users/etc. that will be used to represent our “users” array we created earlier. Inside this function, you will need to write a loop to iterate over the array argument. Inside the body of the loop, you will need to call your “createUserElement” function and pass each element of the array as an argument to it. This should allow you to create a DOM element for each individual user inside your “users” array.

The final section of this challenge will be to tie your functions to eventListeners. Create new event listeners where needed and re-use old ones if you where you see fit (eg: the event listener on the submit button of the form). You must also use your knowledge of event propagation to delete userElements from the user-list <ul> element in the DOM when a user double-clicks on one of the elements.

Remember to pass the event object as an argument where needed, pass arguments down from one function to another, and don’t forget to take the default behavior of certain elements into account.
