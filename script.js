document.addEventListener("DOMContentLoaded", () => {

    const questions = [
        "Tu ji min hez dikî?",
        "Tu Pars jî pir hez dikî?",
        "Ma em dikarin heta dawiya jiyanê bi hev re bimînin?"
    ];
    
    let step = 0;
    
    const questionEl = document.getElementById("question");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    
    // EREEE tıklanınca
    yesBtn.onclick = () => {
    
        if(step === 0){
            alert("Ez ji te re aşiq im! ❤️");
        }
    
        if(step === 1){
            alert("Ez te ji hemû gerdûnê jî derbas heta bêdawî hez dikimmmm! 🚀");
        }
    
        step++;
    
        if(step < questions.length){
            questionEl.innerText = questions[step];
        }else{
            showCelebration();
        }
    }
    
    // NA KAÇSIN
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

