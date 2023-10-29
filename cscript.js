const video = document.getElementById('video')
let detections; 
let detectionComplete = false;

// Loading all the models ** github downloads? 
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    // Registers facial features
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    // Box around face
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    // Emotion detector
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo())




// Initialize Camer (call face-api.min before this file to render model before the camera )
function startVideo() {
    navigator.getUserMedia(
        { video: {} }, 
        stream => video.srcObject = stream, 
        err => console.error(err)
    )
}



video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
    detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    console.log(detections)
    const resizedDetections = faceapi.resizeResults(detections, 
    displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

    detectionComplete = true;

    }, 100) // repetiion of 100 ms
  })

// Function to capture and display the highest emotion
// Function to capture and display the raw response
// Function to capture and display the raw response
document.getElementById('captureEmotionButton').addEventListener('click', captureEmotion);

function updateEmotionResult(emotion, quote) {
    document.getElementById('emotion').textContent = emotion;
    document.getElementById('quote').textContent = quote;
}


function captureEmotion() {
    if (detectionComplete) {
        if (detections && detections.length > 0) {
            const expressions = detections[0].expressions; // Access expressions from the first detected face
            let maxEmotion = 'neutral'; // Default emotion
            let maxScore = 0;

            for (const emotion in expressions) {
                const score = expressions[emotion];
                if (score > maxScore) {
                    maxScore = score;
                    maxEmotion = emotion;
                }
            }

            // Display the highest emotion
            const apiUrl = `http://localhost:8077/api/quote/${maxEmotion}`;

            
            // Make a fetch request to the backend
            fetch(apiUrl)
                .then(response => response.text())
                .then(data => {
                    updateEmotionResult(maxEmotion, data);
                    console.log(`Emotion: ${maxEmotion}`);
                    console.log(`Quote: ${data}`);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        } else {
            alert('No face detected.');
        }
    } else {
        alert('Detection is not complete yet. Please wait.');
    }
}




