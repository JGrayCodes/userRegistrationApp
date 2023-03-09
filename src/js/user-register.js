/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- References to all html classes and ids--- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");
console.log(registerTab);

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");
console.log(userTabs);

/* --- Nav references --- */

// The "users-tab-button" is the one that links to the "Register Users" tab
const usersTabButton = document.getElementsByID("users-tab-button");
console.log(usersTabButton);  

// The "register-tab-button" is the one that links to the "View User List" tab
const registerTabButton = document.getElementsByID("register-tab-button");
console.log(registerTabButton);


/* --- Form field references --- */

const registerForm = document.getElementsByID("register-form");
const registerFirstName = document.getElementsByID("firstname");
const registerLastName = document.getElementsByID("lastname");
const registerUserName = document.getElementsByID("username");
const registerEmail = document.getElementsByID("email");
const registerPassword = document.getElementsByID("password");
const registerSubmit = document.getElementsByID("register-submit");


/* --- Table list reference --- */

const userList = document.getElementsByID("user-list");
const userListHeader = document.getElementsByClassName("header");
const userListEntry = document.getElementsByClassName("entry");


/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

// code here...



/* ----------------------------------------------------
    Event Listeners and Interactivity
---------------------------------------------------- */
