let simButton = document.getElementById("sim");
let naoButton = document.getElementById("nao");
let clicks = 0;
let maxTries = 5;

simButton.addEventListener("mouseover", function() {
    if (clicks < maxTries) {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        simButton.style.left = `${x}px`;
        simButton.style.top = `${y}px`;
        clicks++;
    }
});

simButton.addEventListener("click", function() {
    alert("Você não desistiu do nosso amor. Agora, ouça isso: ");
    window.location.href = "https://www.youtube.com/watch?v=r3Pr1_v7hsw";
});

naoButton.addEventListener("click", function() {
    alert("Você vai desistir tão fácil assim?");
    location.reload();
});
