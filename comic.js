let email = "p.korobeinikova@innopolis.university";
let data = await fetch("https://fwd.innopolis.university/api/hw2")

if (data.ok) {
    let json = await data.json();
} else {
    alert("Error: " + data.status);
}
