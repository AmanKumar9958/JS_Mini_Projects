const randomCaptcha = document.getElementById('random-captcha');
const captchaInput = document.getElementById('input-captcha');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message-box');

// Generating captcha..
function generateCaptcha(){
    let captcha ="";
    let alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0; i<=6; i++){
        captcha += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
    }
    return captcha
}

// Resetting captcha..
function reset(){
    randomCaptcha.textContent = generateCaptcha();
    captchaInput.value = '';
    message.style.display = 'none'
}
resetBtn.addEventListener('click', reset);

// Verifying captcha..
function verify(){
    const inputValue = captchaInput.value;
    if(randomCaptcha.textContent === inputValue){
        alert('Submitted Successfully🎉🎉');
        reset();
    }
    else{
        reset();
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }
}
submitBtn.addEventListener('click', verify);

window.onload = reset;