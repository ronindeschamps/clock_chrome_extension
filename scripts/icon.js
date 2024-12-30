function setIcon() {
    const canvas = new OffscreenCanvas(16, 16);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 16, 16);
    context.fillStyle = '#FFC0CB'; 
    context.fillRect(0, 0, 16, 16);
    context.fillStyle = '#000000'; 
    context.font = '9px Luminari';

    const now = new Date();
    var hours = now.getHours();
    var dif = 14;
    hours += dif;
    if (hours >= 24) {
    hours -= 24;
    }   
    var hours = hours.toString().padStart(2, '0');
    hours.slice(0, 1) + ' ' + hours.slice(1)
    const minutes = now.getMinutes().toString().padStart(2, '0');
    minutes.slice(0, 1) + ' ' + minutes.slice(1)
    context.fillText(hours, 2, 8); 
    context.fillText(minutes, 5, 15);

    var imageData = context.getImageData(0, 0, 16, 16);
    chrome.action.setIcon({imageData: imageData });
}

setIcon();
setInterval(setIcon, 10); // Update every minute