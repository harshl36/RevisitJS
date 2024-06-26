# Project related to DOM
## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3c3fez?file=index.html)


# Solution code
## Project 1

``` Javascript
console.log("HARSH")
const buttons = document.querySelectorAll('.button'); //store buttons element in a variable
const body = document.querySelector('body'); //store body element in a variable
const heading = document.querySelector('h1'); //store h1 element in a variable
console.log(heading);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;   //gives color to the body same as the color of the button
      heading.style.backgroundColor = '#fff';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      heading.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      heading.style.backgroundColor = '#fff';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      heading.style.backgroundColor = '#fff';
    }
  });
});

```