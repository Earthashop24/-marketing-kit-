
 
 
  
    // Countdown Timer Script
    function startCountdown(duration) {
        let timer = duration, minutes, seconds;
        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById("countdown").textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    window.onload = () => startCountdown(2 * 60);

    // Exit Intent Popup Script
    document.addEventListener("mouseleave", () => {
        document.getElementById("exit-popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    });
    function hidePopup() {
        document.getElementById("exit-popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
