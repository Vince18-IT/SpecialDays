const audioButton = document.getElementById("audioButton");
const myAudio = document.getElementById("myAudio");


audioButton.addEventListener("click", () => {
    myAudio.play();
    document.getElementById("audioButton").style.display = "none";
});






document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("vbtn-no");
    const container = document.getElementById("forbuttons");
    const yesButton = document.getElementById("vbtn-yes")
    const askPic = document.querySelector(".askpic");


    let clickCount = 0;

    noButton.addEventListener("click", function () {

        clickCount++;

        if (clickCount < 7) {

            const containerRect = container.getBoundingClientRect();
            const buttonRect = noButton.getBoundingClientRect();

            let maxX = containerRect.width - buttonRect.width;
            let maxY = containerRect.height - buttonRect.height;

            let randomX = Math.random() * maxX;
            let randomY = Math.random() * maxY;

            noButton.style.position = "absolute";
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        } else {

            noButton.style.display = "none";
            yesButton.style.transform = "scale(1.5)";
            yesButton.style.transition = "transform 0.3s ease-in-out";
        }
    });

    let imageIndex = 0;
    const images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7"];
    noButton.addEventListener("click", function () {
        askPic.classList.remove(images[imageIndex]);
        imageIndex = (imageIndex + 1) % images.length;
        askPic.classList.add(images[imageIndex]);
    });

    const modal = document.getElementById("messageModal");

    yesButton.addEventListener("click", function () {
        modal.style.display = "block"; // Show the modal when YES button is clicked
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Close modal if user clicks outside
        }
    });



    const audioButton1 = document.getElementById("audioButton1");
    const myAudio1 = document.getElementById("myAudio2");


    audioButton1.addEventListener("click", () => {
        myAudio1.play();
        document.getElementById("audioButton1").style.display = "none";
    });

});


