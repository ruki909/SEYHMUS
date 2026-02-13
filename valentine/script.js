document.addEventListener("DOMContentLoaded", () => {

    const questions = [
        "Beni seviyor musun?",
        "Kolayı bırakacak kadar çok seviyor musun?",
        "Ömrümüzün sonuna kadar beraber olalım mı?"
    ];
    
    let step = 0;
    
    const questionEl = document.getElementById("question");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    
    // YES tıklanınca
    yesBtn.onclick = () => {
    
        if(step === 0){
            alert("Ben sana aşığım! ❤️");
        }
    
        if(step === 1){
            alert("Seni tüm evrenin ötesinde sonsuzluğa kadar seviyommm! 🚀");
        }
    
        step++;
    
        if(step < questions.length){
            questionEl.innerText = questions[step];
        }else{
            showCelebration();
        }
    }
    
    // NO KAÇSIN
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
    
    // FINAL
    function showCelebration(){
        document.body.innerHTML = `
            <h1>Kainatın en mutlu insanı benim şu anda 💋❤️💕</h1>
            <h2>Gel de hediyeni al :* :D</h2>
        `;
    }
    
    });