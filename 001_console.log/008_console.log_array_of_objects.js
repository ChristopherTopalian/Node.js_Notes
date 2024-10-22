// console.log_array_of_objects.js

const people = [
    {
        name: 'Jane',
        score: 95
    },
    {
        name: 'Melissa',
        score: 98
    },
    {
        name: 'Tabitha',
        score: 93
    }
];

console.log(people);

//--//

console.log('Press Enter to Exit');
process.stdin.resume();
process.stdin.once('data', function()
{
    process.exit();
});

//----//

/*
[
  { name: 'Jane', score: 95 },
  { name: 'Melissa', score: 98 },
  { name: 'Tabitha', score: 93 }
]
Press Enter to Exit
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

