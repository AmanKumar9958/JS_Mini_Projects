const light = document.querySelectorAll('.light');
const message = document.getElementById('message');
const messageContent = ['Stop', 'Ready to GO', 'GO'];
let currentLight = 0;

function changeLight(){
    light.forEach(changeLightColor => {
        changeLightColor.classList.remove('active');
    })
    light[currentLight].classList.add('active');
    message.textContent = messageContent[currentLight];
    currentLight = (currentLight + 1) % light.length;
}
setInterval(changeLight, 2000);
changeLight();





// 10 25 40