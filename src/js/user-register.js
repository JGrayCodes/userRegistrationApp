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
const usersTabButton = document.getElementById("users-tab-button")
console.log(usersTabButton);  

// The "register-tab-button" is the one that links to the "View User List" tab
const registerTabButton = document.getElementById("register-tab-button")
console.log(registerTabButton);


/* --- Form field references --- */

const registerForm = document.getElementById("register-form")
const registerFirstName = document.getElementById("firstname")
const registerLastName = document.getElementById("lastname")
const registerUserName = document.getElementById("username")
const registerEmail = document.getElementById("email")
const registerPassword = document.getElementById("password")
const registerSubmit = document.getElementById("register-submit")


/* --- Table list reference --- */

const userList = document.getElementById("user-list");
const userListHeader = document.getElementsByClassName("header");
const userListEntry = document.getElementsByClassName("entry");


/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

const showUsers = () => {
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";
}

/* ----------------------------------------------------
    Event Listeners and Interactivity
---------------------------------------------------- */
registerTabButton.addEventListener("click", showUsers);
