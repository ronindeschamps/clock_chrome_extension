function updateTime() {
 const now = new Date();
 var hours = now.getHours();
 var dif = 14;
 hours += dif;
 if (hours >= 24) {
 hours -= 24;
 }   
 var hours = hours.toString().padStart(2, '0');
 const minutes = now.getMinutes().toString().padStart(2, '0');
 const timeString = `${hours}:${minutes}`;
 
 document.getElementById('time-display').textContent = timeString;
}

// Update the time immediately and then every minute
updateTime();
setInterval(updateTime, 10);