let currentIndex = 0;

function changeBackground () {
    let changingImages =
    [
        '/images/galerry/background.jpg',
        '/images/galerry/kkk.jpg',
        '/images/galerry/nnn.jpg',
    ];

    document.querySelector(".img").src = changingImages[currentIndex];
    currentIndex = (currentIndex + 1) % changingImages.length;
};

setInterval(changeBackground, 1000);