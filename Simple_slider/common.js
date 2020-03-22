'use strict'

const URL = [
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]

let image = document.getElementById('image');
let buttonPrevious = document.getElementById('previous');
let buttonNext = document.getElementById('next');

let currentURL = 0;
image.src = URL[currentURL];

buttonPrevious.addEventListener('click', () => {
    currentURL--;
    if (currentURL < 0) {
        currentURL = URL.length - 1;
        image.src = URL[currentURL];
    } else {
        image.src = URL[currentURL];
    }  
})

buttonNext.addEventListener('click', () => {
    currentURL++;
    if (currentURL > URL.length - 1) {
        currentURL = 0;
        image.src = URL[currentURL];
    } else {
        image.src = URL[currentURL];
    }   
})



