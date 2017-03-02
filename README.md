401 JS --  Lab 32 crud
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Firebase Auth

## Resources  
* [firebase admin sdk docs](https://firebase.google.com/docs/admin/setup)
* [firebase sdk docs](https://firebase.google.com/docs/web/setup)

## Requirements  
#### Configuration  
* **server/**
* **server/lib**
* **server/router**
* **server/test**
* **server/test/lib**
* **server/index.js** -- inits and exports express app
* **main.js** -- starts ther server/index.js
* **package.json** 
* **.gitignore** -- make sure you ignore the .env
* **.env**
 
#### Feature Tasks  
* Create a Project on Firebase
 * Enable `email/password` authorization
 * Add a user accoount
 * Set the database read permissions to true
* create an .env file with all necessary private keys and info
* create a server/index.js that exports your express app
* create basic and bearer auth express middleware that use the firebase and firebase-admin sdks 
* write test to login a a user

####  Documentation  
* Write how the working with firebase auth differs from using mongo

#### Testing  
* test GET /api/login with status of 200 and 401

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation

<!-- links --> 
