"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const button1 = document.getElementById("button1");
    const inputEl = document.getElementById("fahrenheit") as HTMLInputElement;
    const convertButton = document.getElementById("convert");
    const resultEl = document.getElementById("result");

    if (button1) {
      button1.addEventListener("click", function () {
        button1.innerHTML = "You clicked me!";
      });
    }

    if (convertButton && inputEl && resultEl) {
      convertButton.addEventListener("click", function () {
        const fahrenheit = parseInt(inputEl.value);
        if (isNaN(fahrenheit)) {
          resultEl.innerHTML = `Please enter a valid number.`;
          return;
        }
        const celsius = (5 / 9) * (fahrenheit - 32);
        resultEl.innerHTML = `${fahrenheit}&deg;F is ${celsius.toFixed(2)}&deg;C`;
      });
    }
  }, []);

  return (
    <div>
      <h1 className="main-title" style={{ color: "black" }}>
        Lab 1
      </h1>
      <h2>What have we learnt:</h2>
      <ol style={{ marginLeft: "5%" }}>
        <li>
          <p>
            I have a button:{" "}
            <button style={{ backgroundColor: "#8b7c5b" }} id="button1">
              click me
            </button>
          </p>
        </li>
        <li>
          <div className="block-center">
            <h2>Some cute cats for you &lt;3</h2>
            <img
              alt="cat1"
              src="catSayHi.png"
              width={1000}
              height={1000}
              style={{ width: "150px" }}
            />
            <img
              alt="cat2"
              src="catSunBath.png"
              width={1000}
              height={1000}
              style={{ width: "150px" }}
            />
            <img
              alt="cat3"
              src="TheseTwoCats.png"
              width={1000}
              height={1000}
              style={{ width: "150px" }}
            />
          </div>
        </li>
        <li>
          <p>
            Link:{" "}
            <a href="https://innopolis.university/">
              go to innopolis university web-site
            </a>
          </p>
        </li>
        <li>
          <p>Ordered list:</p>
          <ol>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ol>
        </li>
        <li>
          <p>Unordered list:</p>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </li>
        <li>
          <p>Simple function in JavaScript:</p>
          <label htmlFor="fahrenheit">Enter the amount in Fahrenheit:</label>
          <p></p>
          <input id="fahrenheit" type="number" placeholder="Example: 32" />
          <p></p>
          <button id="convert">Convert</button>
          <p></p>
          Result: <p id="result">awaiting input...</p>
        </li>
      </ol>
      </div>
  );
}
