const btn = document.getElementById("button_clicked");

btn.addEventListener("click", () => {
    alert("Button clicked");
});

/*setTimeout(() => {
    alert("1 second passed");
}, 1000);*/

const fun = () => {
    console.log("Button clicked from variable");
}
btn.onclick = fun;

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hi! My name is ${this.name}`;
    }
  }
  
  const john = new Person("John Smith");
  document.getElementById("Object-Oriented").innerHTML = john.greet();
function Foo() {
    this.bar = 10;
 }
 
 Foo.prototype.bar = 42;
 
 var foo = new Foo();
 console.log("1:", foo.bar);
 
 delete foo.bar;
 console.log("2:", foo.bar);

const form = document.getElementById('form');
const name = document.getElementById('name');
form.addEventListener('submit', function(e) {
    if (name.value === '') {
        e.preventDefault();
        alert('Name cannot be empty!');
    }
});


let answer = Math.ceil(Math.random() * 10);

const input = document.getElementById('input');
const guessBtn = document.getElementById('guess');
const form2 = document.getElementById('formForGame');
const result = document.getElementById('result');

form2.addEventListener('submit', (e) => {
e.preventDefault();
const guess = parseInt(input.value);
if (Number.isNaN(guess)) {
    result.append('Please input a number!');
} else if (guess === answer) {
    result.append('Correct answer! Thanks for playing :D');
} else if (guess < answer) {
    result.append('Your guess is too low :(');
} else if (guess > answer) {
    result.append('Your guess is too high :/');
}
guessBtn.disabled = true;
input.disabled = true;
result.appendChild(createResetButton());
input.value = '';
});

      function createResetButton() {
        const button = document.createElement('button');
        button.innerHTML = 'Play again';
        button.style.display = 'block';
        button.addEventListener('click', function resetGame() {
          answer = Math.ceil(Math.random() * 10);
          result.innerHTML = 'Result:';
          input.disabled = false;
          guessBtn.disabled = false;
        });
        return button;
      }
        
      /*
      input.addEventListener('keydown', (e) => {
        if (!/^\d$/.test(e.key)) {
          e.preventDefault();
        }
      });
      */
