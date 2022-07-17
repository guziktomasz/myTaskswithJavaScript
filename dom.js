//document.getElementsByTagName //po znaczniku np div

let redSquare = document.querySelector('.red-square'); //tak jak selektory w css
redSquare.style.backgroundColor = 'green';

let redSquares = document.querySelectorAll('.red-square');
redSquares[0].style.backgroundColor = 'blue';
redSquares[1].style.marginTop = '10px';

