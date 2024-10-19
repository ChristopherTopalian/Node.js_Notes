// console.log_close_enter_key.js

console.log('Hi Everyone');

console.log('Press Enter to Exit');

process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
Hi Everyone
Press Enter to Exit
*/

// process.stdin.resume();
// starts the process of reading input
// from the standard input (stdin).

// process.stdin.once('data', function() {
// waits for a new line
// which is triggered by the Enter key
// once detected, the callback function is executed

// process.exit();
// ends the program

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

