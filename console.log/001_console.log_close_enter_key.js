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

// process.stdin.once('data',
// waits for a new line
// which is triggered by the Enter key

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

