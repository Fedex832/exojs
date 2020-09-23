'use strict';

/**
* Exercies1
*/

var age = prompt('How old are you ?');
if(age < 18) {
    alert('Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ' + age);
}else if(age > 42) {
    alert('Bonsoir patron!');
}else {
    alert('Vous pouvez entrer vous êtes majeur vous avez ' + age);
}

/**
* Exercies2
*/

var nb = Math.floor(Math.random()*(30))+1;
if(nb <= 10) {
    console.log('Cool');
}else if(nb <= 20){
    console.log('Tepid');
}else{
    console/log('Warm');
}

/**
* Exercies3
*/

switch(new Date().getDay()) {
    case 1:
    console.log('Nous sommes Lundi');
    break;
    case 2:
    console.log('Nous sommes Mardi');
    break;
    case 3:
    console.log('Nous sommes Mercredi');
    break;
    case 4:
    console.log('Nous sommes Jeudi');
    break;
    case 5:
    console.log('Nous sommes Vendredi');
    break;
    case 6:
    console.log('Nous sommes Samedi');
    break;
    case 0:
    console.log('Nous sommes Dimenche');
    break;
}

/**
* Exercies4
*/

var choice1 = prompt('What is the class of your hero?')
if(choice1 == 'warrior') {
    var choice2 = prompt('What is your melee weapon of choice?')
    if(choice2 == 'axe') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a Bararian')
    }
    if(choice2 == 'sword') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a Knight')
    }
}else if(choice1 == 'mage') {
    var choice2 = prompt('What is your spell of choice?')
    if(choice2 == 'fire') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a pyromancer')
    }
    if(choice2 == 'healing') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a Preist')
    }
}else if(choice1 == 'rogue') {
    var choice2 = prompt('What is your range weapon of choice?')
    if(choice2 == 'bow') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a Archer')
    }
    if(choice2 == 'croxbow') {
        alert('A '+ choice1 + ' with a ' + choice2 + ' you must be a Balistery')
    }
}else{
    alert('Good luck with that..')
}

/**
* Exercies5
*/
