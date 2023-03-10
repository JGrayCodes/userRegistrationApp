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
const usersTabButton = document.getElementById("users-tab-button");
console.log(usersTabButton);

// The "register-tab-button" is the one that links to the "View User List" tab
const registerTabButton = document.getElementById("register-tab-button");
console.log(registerTabButton);

/* --- Form field references --- */

const registerForm = document.getElementById("register-form");
const registerFirstName = document.getElementById("firstname");
const registerLastName = document.getElementById("lastname");
const registerUserName = document.getElementById("username");
const registerEmail = document.getElementById("email");
const registerPassword = document.getElementById("password");
const registerSubmit = document.getElementById("register-submit");

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
};

const showRegForm = () => {
  userTabs[0].style.display = "none";
  registerTab[0].style.display = "block";
  userTabs[1].style.display = "none";
  registerTab[1].style.display = "block";
};

/* Create array of users*/

// Create empty array called "users"""
const users = [];

const createUser = () => {
  // Get String values of variables from the form fields:
  const regFirstName = registerFirstName.value;
  const regLastName = registerLastName.value;
  const regUserName = registerUserName.value;
  const regEmail = registerEmail.value;
  const regPassword = registerPassword.value;
  // Check to see that the values have been passed to the variables:
  console.log(regFirstName);
  // Create newUser variable object:
  const newUser = {
    firstName: regFirstName,
    lastName: regLastName,
    userName: regUserName,
    email: regEmail,
    password: regPassword,
  };
  // Check that all input variables have been passed to the newUser object
  console.log(newUser);
  // Add the "newUser" object to the "users" array
  users.push(newUser);
  // Check that the newUser object has been passed into the "users" array
  console.log(users);


  // Need to take this line out when doing the function of 
  createUserElement(newUser)
};

const createUserElement = (userParam) => {
  const userDisplay = `
    <li class="entry">
        <span> ${userParam.userName} </span> 
        <span> ${userParam.firstName} </span> 
        <span> ${userParam.lastName} </span> 
        <span> ${userParam.email} </span> 
        <span> ${userParam.password} </span> 
    </li>
    `;
    
    userList.innerHTML += userDisplay;

    return userDisplay;


};

/* ----------------------------------------------------
    Event Listeners and Interactivity
---------------------------------------------------- */

registerSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});
registerSubmit.addEventListener("click", showUsers);
registerSubmit.addEventListener("click", createUser);

registerTabButton.addEventListener("click", showUsers);

usersTabButton.addEventListener("click", showRegForm);
