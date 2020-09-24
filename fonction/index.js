'use strict';

/**
* Exercies1
*/

/**
 * myPutStr
 * @param {string} arg
 * @return {string} returnType
 */

var myPutStr = function myPutStr(arg) {
 var returnType;
 if(typeof arg === 'number') {
    returnType = 'et pourquoi pas 42 ?';
 }else{
     returnType = arg;
 }
 console.log(returnType);
}

/**
* Exercies2
*/

/**
 * computeSurfaceM2
 * @param {number} width
 * @param {number} length
 * @return {number} area
 */

var computeSurfaceM2 = function computeSurfaceM2(
width, length) {
    var area = width * length;
    return typeof area;
}

/**
* Exercies3
*/

/**
 * createMyButton
 * @return void
 * detectMyAgeByNight
 * @return void
 */

var createMyButton = function createMyButton() {
  var button = document.createElement('input');
  button.type = 'button';
  document.body.appendChild(button);
}
createMyButton();
var click = document.querySelector('input');
click.addEventListener('click', event => {
  detectMyAgeByNight();
});
var detectMyAgeByNight = function detectMyAgeByNight() {
  var age = prompt('How old are you ?');
  if(age < 18) {
    alert('Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ' + age);
  }else if(age > 42) {
    alert('Bonsoir patron!');
  }else {
    alert('Vous pouvez entrer vous êtes majeur vous avez ' + age);
  }
}
