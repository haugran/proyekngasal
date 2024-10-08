const roles = [
    "Artis",
    "Chef",
    "Suki",
    "Rasis",
    "Cabul",
    "Sepuh",
    "Sigma",
    "Pedo",
    "Jomok",
    "Cakep",
    "Kroco",
    "Mewing",
    "Klemer",
    "Wibu",
    "Tukang Bully",
    "Pintar",
    "Bego",
    "Skibidi",
    "Jawir",
    "Cina",
    "Kaya Raya",
    "Burik",
    "Boti",
    "Fomo",
    "Wota",
    "Tobrut"
    
];
// Akses elemen-elemen HTML
const generateButton = document.getElementById("generateButton");
const nameInput = document.getElementById("nameInput");
const roleResult = document.getElementById("roleResult");
const loading = document.getElementById("loading");

// Event listener untuk tombol "Cek"
generateButton.addEventListener("click", function() {
    const name = nameInput.value;

    if (name === "") {
        roleResult.textContent = "Masukin nama kamu!";
    } else {
        // Menghapus hasil sebelumnya & menampilkan animasi loading
        roleResult.textContent = ""; 
        loading.style.display = "flex"; // Tampilan popup loading layout fleksibel

        // Simulasi loading 3 detik
        setTimeout(function() {
        // Memilih salah satu role di  daftar secara acak saat klik tombol "Cek"
            const randomRole = roles[Math.floor(Math.random() * roles.length)];
            roleResult.textContent = `${name}, role kamu adalah: ${randomRole}`;
            
            // Menyembunyikan popup loading setelah 3 detik
            loading.style.display = "none";
        }, 3000);
    }
});

// Event listener untuk tombol Enter di keyboard pada input field
nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateButton.click(); // Trigger tombol "Cek" saat tekan Enter di keyboard
    }
});
