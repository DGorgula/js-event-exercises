button.addEventListener("click", () => alert("1")); // will run

button.removeEventListener("click", () => alert("1")); // w'ont run

button.onclick = () => alert(2); // will run