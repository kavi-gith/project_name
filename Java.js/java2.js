document.getElementById("shareForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = encodeURIComponent("Congratulations, Class of 2024! Your hard work and dedication have paid off");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    closeShareForm(); 
});

document.getElementById("customizeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const heading = document.getElementById("heading").value;
    const body = document.getElementById("body").value;
    document.getElementById("letterHeading").innerText = heading;
    document.getElementById("letterBody").innerHTML = body.replace(/\n/g, '<br>');
    closeCustomizeForm();
});

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

function openShareForm() {
    document.getElementById("shareModal").style.display = "block";
}

function closeShareForm() {
    document.getElementById("shareModal").style.display = "none";
}

function openCustomizeForm() {
    document.getElementById("customizeModal").style.display = "block";
}

function closeCustomizeForm() {
    document.getElementById("customizeModal").style.display = "none";
}

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function resetContent() {
    document.getElementById("letterHeading").innerText = "Dear Students🎇.";
    document.getElementById("letterBody").innerHTML = "Congratulations, Class of 2024! Your hard work and dedication have paid off.<br>Dream big, stay curious, and never stop learning.<br>Cheers to your success and bright future!";
}



