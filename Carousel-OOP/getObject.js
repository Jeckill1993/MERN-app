'use strict'

let slider = {
    images: [
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    currents: 0,
    getImage: document.getElementById('image'),
    getButtonPrev: document.getElementById('previous'),
    getButtonNext: document.getElementById('next'),

    initialization: function () {
        let that = this;
        this.getImage.src = this.images[this.currents];

        this.getButtonPrev.addEventListener('click', function (e) {
            that.clickPrevBtn(e)
        });
        this.getButtonNext.addEventListener('click', function (e) {
            that.clickNextBtn(e)
        });
    },

    clickPrevBtn: function (event) {
        this.currents--;
        if (this.currents < 0) {
            this.currents = this.images.length - 1;
            this.getImage.src = this.images[this.currents];
        } else {
            this.getImage.src = this.imagesURL[this.currents];
        }
    },
    clickNextBtn: function (event) {
        this.currents++;
        if (this.currents > this.images.length - 1) {
            this.currents = 0;
            this.getImage.src = this.images[this.currents];
        } else {
            this.getImage.src = this.images[this.currents];
        }
    }
}



















