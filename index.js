const images = [
     "https://img.freepik.com/free-vector/gradient-intranet-illustration_23-2149368727.jpg?w=1800&t=st=1718962840~exp=1718963440~hmac=3370faa6065a7fc021a4d4837d279db616dd73655513ac49c0ad8f3247888444%201800w",
    "https://img.freepik.com/free-photo/cup-coffee-wireless-keyboard-mouse_140725-8958.jpg?t=st=1718963221~exp=1718966821~hmac=4acfc353ed38cb51816712d1dd052ad31a3f97abbaae0bcd5db69eb2a78cfc85&w=1800",
     "https://img.freepik.com/premium-photo/composition-recruitment-services-text-business-people_1134-5061.jpg?w=900",
    "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169847.jpg?t=st=1718964422~exp=1718968022~hmac=4513b7bc756d27b61640e457469f1c43079e69fc6a1a91d0420853150d7b706d"
]

let currentIndex = 0;

let imgElement = document.getElementById("slider-img");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

imgElement.src = images[currentIndex];
prevBtn.disabled = true;

prevBtn.addEventListener("click", () => {
    currentIndex--;
    imgElement.src = images[currentIndex];
    nextBtn.disabled = false;

    if(currentIndex === 0){
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener("click", () => {
    currentIndex++;
    imgElement.src = images[currentIndex];
    prevBtn.disabled = false;

    if(currentIndex === images.length-1){
        nextBtn.disabled = true;
    }
})