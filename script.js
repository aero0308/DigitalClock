setInterval(function updateTime(){
    const currentTime = new Date();
    document.querySelector('.hours').innerHTML =  currentTime.getHours().toString().padStart(2, '0');
    document.querySelector('.minutes').innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    document.querySelector('.seconds').innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
},1000);



// setInterval(function updateTime() {
//     const currentTime = new Date();
    
//     // Get hours, minutes, and seconds
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//     const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
//     // Update the HTML elements
//     document.getElementsByClassName('hours')[0].innerHTML = hours;
//     document.getElementsByClassName('minutes')[0].innerHTML = minutes;
//     document.getElementsByClassName('seconds')[0].innerHTML = seconds;
// }, 1000);
