'use strict'

let sliderFactory = {
    getNewSlider: function () {
        let newSlider = {
            images: [
                'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            currents: null,
            getImage: null,
            getButtonPrev: null,
            getButtonNext: null,

            initialization: function (containerID) {
                let that = this;

                let elemSelector = '#' + containerID;
                let container = document.querySelector(elemSelector);

                this.currents = 0;
                this.getImage = container.querySelector('.images-node');
                this.getButtonPrev = container.querySelector('.button-move-prev');
                this.getButtonNext = container.querySelector('.button-move-next');

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
                    this.getImage.src = this.images[this.currents];
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

        return newSlider;
    }
}

