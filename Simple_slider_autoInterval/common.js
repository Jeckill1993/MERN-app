const URL = [
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]

const LENGTH_ARRAY = 5;
let currentURL = 0; //current picture

let idIndex = setInterval(() => { 
    changePictures(image, currentURL);
    currentURL++;
    if (currentURL === LENGTH_ARRAY) {
        currentURL = 0;
    }
}, 500);

function changePictures(elem, index) {
    elem.src = URL[index];
}

setTimeout(() => {
    clearInterval(idIndex)}, 10000
);