const images = [
    'images/pexels-andy-vu-3244513.jpg',
    'images//pexels-eberhard-grossgasteiger-572897.jpg',
    'images/pexels-frans-van-heerden-624015.jpg',
    'images/pexels-luis-del-río-15286.jpg',
    'images/pexels-stein-egil-liland-3408744.jpg'
]

let imageIndex = 0;
const sliderImg = document.getElementById('slider-img')
setInterval(() => {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    const imageUrl = images[imageIndex];
    console.log(imageUrl);
    sliderImg.setAttribute('src', imageUrl)
    imageIndex++;
}, 1000);