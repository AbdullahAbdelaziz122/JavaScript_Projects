function updateClock(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const timeString = `${hour}:${min}:${sec}`
    document.getElementById("clock").textContent = timeString;
}
updateClock();

setInterval(updateClock, 1000);