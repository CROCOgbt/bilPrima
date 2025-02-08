function cekNumber(event) {
    event.preventDefault(); // Mencegah form refresh halaman

    const numberInput = document.getElementById("number").value.trim();
    const resultElement = document.getElementById("result");

    if (numberInput === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: toast => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "input tidak boleh kosong"
        });
        navigator.vibrate(99); // Getar selama 200 milidetik (0.2 detik)

        return;
    }

    const N = parseInt(numberInput); // Ubah input menjadi angka
    if (isNaN(N)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    // Cek apakah N adalah bilangan prima
    let isPrime = true;
    if (N < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Tampilkan hasil
    resultElement.innerHTML = `<h2>${N} ${
        isPrime ? "Prima" : "Bukan Prima"
    }</h2>`;

    // Kosongkan input setelah submit
    document.getElementById("number").value = "";
}

// Event listener untuk form
document.getElementById("danang").addEventListener("submit", cekNumber);
