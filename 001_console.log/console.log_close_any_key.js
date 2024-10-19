// console.log_close_any_key.js

console.log('Hi Everyone');

// tell user to press any key to exit
console.log('Press any key to exit');

// raw mode true captures any key press
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
Hi Everyone
Press any key to exit
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

