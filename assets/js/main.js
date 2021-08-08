var menuTemplate = `<li class="nav-item">
                        <a class="nav-link active" href="#">
                            Lorem
                        </a>
                    </li>`;

var storyTemplate = `<div class="swiper-slide">
                            <a href="#">
                                <img src="https://via.placeholder.com/100.png" alt="Story"> <br> 
                                <span>Lorem</span>
                            </a>
                        </div>`;

var newcomersTemplate = `<div class="swiper-slide d-flex justify-content-center">
                                <div class="card">
                                    <img class="card-img-top" src="https://via.placeholder.com/172x258.png"
                                        alt="Product">
                                    <div class="card-body">
                                        <div id="prices">
                                            <span>179,99 TL</span> 159,99 TL
                                        </div>
                                        <div id="product-title">
                                            Kol Kat Bel Lastikli Elbise - İNDİGO
                                        </div>
                                    </div>
                                </div>
                            </div>`;

var bestsellingTemplate = `<div class="swiper-slide">
                                <div class="card">
                                    <img class="card-img-top" src="https://via.placeholder.com/172x258.png"
                                        alt="Category">
                                    <div class="card-body">
                                        <div id="category-title">
                                            Lorem
                                        </div>
                                        <div id="category-desc">
                                            Lorem ipsum
                                        </div>
                                    </div>
                                </div>
                            </div>`;

var listAllTemplate = `<div class="swiper-slide d-flex justify-content-center">
                                <div class="card">
                                    <img class="card-img-top" src="https://via.placeholder.com/172x258.png"
                                        alt="Product">
                                    <div class="card-body">
                                        <div id="prices">
                                            <span>179,99 TL</span> 159,99 TL
                                        </div>
                                        <div id="product-title">
                                            Limon Desen Kuşaklı Kimono - BEJ
                                        </div>
                                    </div>
                                </div>
                            </div>`;

var editTemplate = `<div class="swiper-slide">
                            <div class="card">
                                <img class="card-img-top" src="https://via.placeholder.com/231x237.png"
                                    alt="Edit">
                                <div class="card-body">
                                    <div id="title">
                                        Tatil Elbiseleri
                                    </div>
                                    <button>
                                        Hemen Oku >
                                    </button>
                                </div>
                            </div>
                        </div>`;

var mainArray = [
    {
        template: menuTemplate, id: "#menu", element: "#menu .nav", swiper: false, swiperOptions: null
    },
    {
        template: storyTemplate, id: "#stories", element: "#stories .swiper-wrapper", swiper: true, swiperOptions: {
            slidesPerView: 9
        }
    },
    {
        template: null, id: null, element: null, swiper: true, swiperOptions: {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    },
    {
        template: newcomersTemplate, id: "#newcomers", element: "#newcomers .swiper-wrapper", swiper: true, swiperOptions: {
            slidesPerView: 5,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    },
    {
        template: bestsellingTemplate, id: "#best-selling", element: "#best-selling .swiper-wrapper", swiper: true, swiperOptions: {
            slidesPerView: 5,
            spaceBetween: 25
        }
    },
    {
        template: listAllTemplate, id: "#list-all", element: "#list-all .swiper-wrapper", swiper: true, swiperOptions: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    },
    {
        template: editTemplate, id: "#edit", element: "#edit .swiper-wrapper", swiper: true, swiperOptions: {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        }
    },
];

for (const item of mainArray) {
    swiperSliderFunc(item);
}

function swiperSliderFunc(object) {
    if (object.template != null) {
        for (let i = 0; i < 10; i++) {
            $(object.element).append(object.template);
        }
    }

    if (object.swiper == true) {
        new Swiper(object.id + " .swiper-container", object.swiperOptions);
    }
}