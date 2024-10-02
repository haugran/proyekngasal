const roles = [
    "Seleb",
    "Rasis",
    "Cabul",
    "Sepuh",
    "Sigma",
    "Pedo",
    "Jomok"
];

document.getElementById("generateButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    if (name === "") {
        document.getElementById("roleResult").textContent = "Masukin nama kamu!";
    } else {
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        document.getElementById("roleResult").textContent = `${name}, role kamu adalah: ${randomRole}`;
    }
});
