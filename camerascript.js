// script.js
const camera = document.getElementById('camera');
const captureButton = document.getElementById('capture-button');

// Access the device camera and stream it to the video element
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        camera.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

// Capture a photo from the camera stream
function capturePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(camera, 0, 0, canvas.width, canvas.height);

    // You can save or process the captured photo here
    // For this example, we'll simply display the photo on the page
    const capturedImage = new Image();
    capturedImage.src = canvas.toDataURL('image/png');
    document.body.appendChild(capturedImage);
}

// Start the camera when the page loads
startCamera();

// Add a click event listener to the capture button
captureButton.addEventListener('click', capturePhoto);
