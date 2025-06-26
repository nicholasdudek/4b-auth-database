/*
    0a. In terminal setup this project by installing its dependencies
    npm install
*/

/*
    0b. Setup your mongoDB environment variables
*/

/*
    0c. Imports and ready-to-use variables have been provided in the controller
*/

const User = require("../models/User");
const bcrypt = require("bcrypt");

const getAllUsers = async function () {
  
  /* 
    1. Get all users from the database.
  */
  
}

const createUser = async function (userData) {

  /*
      2. Hash and salt the user's password using bcrypt
  */

  /*
      3. Generate a new user document and store them in the database
         Make sure to save the hashed password that was just created
  */

}

async function loginUser(userData) {

    /*
        4. Attempt to log the user in
    */

}

const updatePassword = async function (userData) {
  
    /*
        5. Update the user's password.  
        Be sure to validate them and check if the password is different than the last
    */

    /* 
      6. Save the updated user in the database
    */
}

module.exports = {

}
