"use strict";
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumdore'];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great' + magicianArry[i];
    }
}
function show_magician(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
