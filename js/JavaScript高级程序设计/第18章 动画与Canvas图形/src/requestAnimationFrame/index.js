function updateProgress(timestamp) {
    console.log(timestamp);
    const div = document.getElementById("status");
    div.style.width = (parseInt(div.style.width, 10) + 5) + '%';
    if (div.style.width != '100%') {
        requestAnimationFrame(updateProgress);
    }
}

let requestID = requestAnimationFrame(updateProgress);
// cancelAnimationFrame(requestID);
