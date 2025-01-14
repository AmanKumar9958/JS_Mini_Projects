let popupBox = document.getElementById('popup');
let closeIcon = document.getElementById('closeIcon')

document.addEventListener('DOMContentLoaded', function(){
    popupBox.style.display = 'block';
        
    // close using Close Icon..
    closeIcon.addEventListener('click', function(){
        popupBox.style.display = 'none';
    })

    window.onclick = function(){
        popupBox.style.display = 'none';
    }
})