// console.log_object_variable.js

let jane =
{
    name: 'Jane',
    score: 98
};

console.log(jane);

//-//

console.log('Press Enter to Exit');
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
{ name: 'Jane', score: 98 }
Press Enter to Exit
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

