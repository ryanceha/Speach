const images = [
	"mic1.svg",
	"mic2.svg",
	"mic3.svg",
	"mic4.svg",
	"mic3.svg",
	"mic2.svg",
]; // Add your image URLs here
let currentImageIndex = 0;
let intervalId = null;

const imageElement = document.getElementById("image");

function changeImage() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	imageElement.src = images[currentImageIndex];
}

function startImageCarousel() {
	if (intervalId === null) {
		intervalId = setInterval(changeImage, 500); // Change image every 2 seconds (2000 milliseconds)
	}
}

 function stopImageCarousel() {
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
			currentImageIndex = 0;
			imageElement.src = images[0];
		}
 }

imageElement.addEventListener("click", () => {
	if (intervalId === null) {
		startImageCarousel();
	} else {
		stopImageCarousel();
	}
});









function openQ(evt, q) {
    var i, questions;
    questions = document.getElementsByClassName("question");
    for (i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }

    document.getElementById(q).style.display = "block";
    console.log("tes")
}
document.getElementById("first").click();

function changeColor(evt) {
    evt.currentTarget.className += " benar";
}
function changeColor2(evt) {
	evt.currentTarget.className += " benar";
}
function changeColor3(evt) {
	evt.currentTarget.className += " benar";
}


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	console.info("This page is reloaded");
	window.location.href = "#";
} else {
	console.info("This page is not reloaded");
}
const mic1 = document.getElementById('mic1');
let recognition;
let transcription;
let clicked;
let transcript = null;


mic1.addEventListener("click", () => {
    if (clicked == true) {
        console.log("button click");
        stop_mic();
        clicked = false;
        // function stop
        // kondisi dimana mic sudah di klik dan mau di stop
    }
    else {
        // kondisi dimana mic belum di klik
        clicked = true;
        recognition = new webkitSpeechRecognition() || new SpeechRecognition();
		recognition.continuous = true;
		recognition.lang = "en-EN"; // Ganti dengan bahasa yang sesuai

		recognition.onresult = (event) => {
			const result = event.results[event.results.length - 1];
			transcript = result[0].transcript;
            // transcription.textContent = transcript;
            // console.log(transcript);
		};

		recognition.start();
    }
	
});
const benar1 = document.getElementById("correct");
const salah1 = document.getElementById("wrong");
const banner1 = document.getElementsByClassName("bwh");
function stop_mic() {
	recognition.stop();
	console.log(String(transcript).toLowerCase())
	if (String(transcript).toLowerCase() == "good morning") {
		console.log("benar");
		banner1[0].style.opacity = "1";
		banner1[1].style.opacity = "0";
		// benar1.style.visibility = "visible";
		// banner1[1].style.visibility = "hidden";
		

        // window.location.href =
		// 			"http://127.0.0.1:5500/SPEACH/LearningPage/indexLesson1.html#correct1";
    }
	else {
		console.log("salah");
		banner1[1].style.opacity = "1";
		banner1[0].style.opacity = "0";

		// banner1[1].style.visibility = "visible";
		// salah1.style.visibility = "visible";
		// banner1[0].style.visibility = "hidden";
        // window.location.href =
		// 			"http://127.0.0.1:5500/SPEACH/LearningPage/indexLesson1.html#wrong1";
    }
}

