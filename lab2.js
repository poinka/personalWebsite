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

function Person(name) {
    this.name = name;
}

const proto = {
    greet: function () {
        return `My name is ${this.name}`;
    }
}

Person.prototype = proto;
Person.prototype.constructor = Person;

const person = new Person("Some name");

console.log(person.greet());