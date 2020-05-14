

let galleryIndex = 1;
let numberOfImages = 7;

function allFunctions(){
     var forwardButton =   document.querySelector('#gallery-forward');
    forwardButton.addEventListener("click", forward);

    var backwardButton = document.querySelector('#gallery-backward');
    backwardButton.addEventListener('click', backward);

    preventDefaut();    

}

allFunctions();

function forward(){
    if (galleryIndex  <= numberOfImages) {
        galleryIndex++
    }
    if (galleryIndex > numberOfImages ) {
        galleryIndex = 1;
    }
    getImageUrl();
    preventDefaut();
}

function backward(){
    if ( galleryIndex >= 1){
        galleryIndex--
    }
    if (galleryIndex < 1 ){
        galleryIndex = numberOfImages;
    }
    getImageUrl();
    preventDefaut();

}

function getImageUrl() {
    let imageSrc = document.querySelector('#image-collection');
    imageSrc.src = "photos/room" + galleryIndex + ".jpg"
}

