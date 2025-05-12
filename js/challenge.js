document.addEventListener("DOMContentLoaded", (e) => { 
  e.preventDefault()
  const timer = document.getElementById("counter")
  const minus = document.getElementById("minus")
  const plus = document.getElementById("plus")
  let NumValue = 0;
  let isPaused = false;
  let interValId;
  const heart = document.getElementById("heart")
  const pause = document.getElementById("pause")

  const updateTimerDisplay = () => {
    timer.textContent = NumValue;
  };

  const startTimer = () => {
    interValId = setInterval(() => {
        NumValue++;
        updateTimerDisplay();
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interValId);
  };

  startTimer();

  minus.addEventListener("click", () => {
    if(!isPaused){
        NumValue--;
        updateTimerDisplay();
    }
  });

  plus.addEventListener("click", () => {
    if(!isPaused){
        NumValue++;
        updateTimerDisplay();
    }
  });

  heart.addEventListener("click", () => {
    if(!isPaused){
        console.log(`Liked number: ${NumValue}`);
    }
  });

  pause.addEventListener("click", () => {
    if(isPaused){
        startTimer();
        pause.textContent = "Pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    } else {
        stopTimer();
        pause.textContent = "Resume";
        minus.disabled = true;
        plus.disabled =  true;        
        heart.disabled = true;
    }
     
    pause.addEventListener("click", () => {
        NumValue = 0;
        updateTimerDisplay();

        pause.disabled = false;
        pause.disabled = false;

        clearInterval(interValId);
        startTimer();
    })
    
    isPaused = !isPaused;
  });
   
    const form = document.querySelector("#comment-form")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputField = document.getElementById("comment-input");
        inputField.value = "Wow, what a fun game this is";
        const updateValue = inputField.value;
        console.log("Update value:", updateValue);
    })
});