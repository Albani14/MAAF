/* =====================================================
   MATRIX
===================================================== */

const canvas =
    document.getElementById("matrixCanvas");

const ctx =
    canvas.getContext("2d");


let width;
let height;

const fontSize = 13;

let columns;
let drops;


/* =========================================
   MATRIX CHARACTERS
========================================= */

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz♡♥";


function resizeCanvas() {

    width =
        canvas.width =
        window.innerWidth;

    height =
        canvas.height =
        window.innerHeight;

    columns =
        Math.floor(
            width / fontSize
        );

    drops = [];

    for (
        let i = 0;
        i < columns;
        i++
    ) {

        drops[i] =
            Math.random() *
            -100;

    }
}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* =========================================
   MATRIX DRAW
========================================= */

function drawMatrix() {

    ctx.fillStyle =
        "rgba(5,5,7,.12)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    ctx.font =
        `${fontSize}px monospace`;


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const char =
            characters[
            Math.floor(
                Math.random()
                *
                characters.length
            )
            ];


        ctx.fillStyle =
            Math.random() > .85
                ? "#ff72b6"
                : "#ff248c";


        ctx.fillText(
            char,
            i * fontSize,
            drops[i] * fontSize
        );


        drops[i] +=
            Math.random() * .8 + .5;


        if (
            drops[i] * fontSize >
            height
            &&
            Math.random() > .97
        ) {

            drops[i] = 0;

        }

    }

}


setInterval(
    drawMatrix,
    35
);


/* =====================================================
   ELEMENTS
===================================================== */

const intro =
    document.getElementById(
        "intro"
    );

const introText =
    document.getElementById(
        "introText"
    );

const particleHeart =
    document.getElementById(
        "particleHeart"
    );

const loveCard =
    document.getElementById(
        "loveCard"
    );

const memorySection =
    document.getElementById(
        "memorySection"
    );

const finalSection =
    document.getElementById(
        "finalSection"
    );

const stars =
    document.getElementById(
        "stars"
    );


/* =====================================================
   START
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            showIntro,
            1000
        );

    }
);


/* =====================================================
   I'M
===================================================== */

function showIntro() {

    introText.textContent =
        "I'M";

    introText.style.opacity =
        "1";

    introText.style.transform =
        "scale(1)";


    setTimeout(
        showMY,
        3000
    );

}


/* =====================================================
   MY
===================================================== */

function showMY() {

    introText.style.opacity =
        "0";

    introText.style.transform =
        "scale(.5)";


    setTimeout(
        () => {

            introText.textContent =
                "SORRY";

            introText.style.opacity =
                "1";

            introText.style.transform =
                "scale(1)";

        },
        600
    );


    setTimeout(
        showParticleHeart,
        3000
    );

}


/* =====================================================
   PARTICLE HEART
===================================================== */

function showParticleHeart() {

    intro.style.opacity =
        "0";


    setTimeout(
        () => {

            intro.style.display =
                "none";

            particleHeart.style.opacity =
                "1";

        },
        700
    );


    setTimeout(
        showLoveCard,
        4000
    );

}


/* =====================================================
   LOVE CARD
===================================================== */

function showLoveCard() {

    particleHeart.style.opacity =
        "0";


    setTimeout(
        () => {

            loveCard.style.opacity =
                "1";

            loveCard.style.transform =
                "scale(1)";

            stars.style.opacity =
                "1";

        },
        700
    );


    setTimeout(
        showMemory,
        4000
    );

}


/* =====================================================
   MEMORY
===================================================== */

function showMemory() {

    loveCard.style.opacity =
        "0";

    loveCard.style.transform =
        "scale(1.5)";


    setTimeout(
        () => {

            loveCard.style.display =
                "none";

            memorySection.style.opacity =
                "1";

            memorySection.style.transform =
                "translateY(0)";

        },
        1000
    );


    startPhotoAnimation();

}


/* =====================================================
   PHOTO ANIMATION
===================================================== */

const photos = [

    [
        "gambar_1 (1).jpeg",
        "gambar_1 (2).jpeg"
    ],

    [
        "gambar_1 (3).jpeg",
        "gambar_1 (4).jpeg"
    ],

    [
        "gambar_1 (5).jpeg",
        "gambar_1 (6).jpeg"
    ],

    [
        "gambar_1 (7).jpeg",
        "gambar_1 (8).jpeg"
    ]

];


const messages = [

    "Aku mintamaaf tidakada niatan sedkitpun aku untuk berniat menyakitimu semalem ❤️",

    "Setiap kali ngelihat senyum kamu, rasanya selalu ada dorongan buat aku untuk terus belajar jadi lebih baik...",

    "Makasih banyak ya sayang, udah bersedia hadir dan jadi bagian paling indah dalam hidupku ❤️",

    "Apapun yang kita laluin nanti, aku harap kita selalu punya cara untuk kembali tersenyum sama-sama."
];


let photoIndex = 0;


/* =========================================
   CHANGE PHOTO
========================================= */

function startPhotoAnimation() {

    const left =
        document.getElementById(
            "photoLeft"
        );

    const right =
        document.getElementById(
            "photoRight"
        );

    const message =
        document.getElementById(
            "messageText"
        );


    setInterval(
        () => {

            left.classList.add(
                "flip-left"
            );

            right.classList.add(
                "flip-right"
            );


            setTimeout(
                () => {

                    photoIndex++;

                    if (
                        photoIndex >=
                        photos.length
                    ) {

                        photoIndex = 0;

                    }


                    left.src =
                        photos[
                        photoIndex
                        ][0];

                    right.src =
                        photos[
                        photoIndex
                        ][1];


                    message.textContent =
                        messages[
                        photoIndex
                        ];


                    left.classList.remove(
                        "flip-left"
                    );

                    right.classList.remove(
                        "flip-right"
                    );

                },
                1000
            );

        },
        5000
    );


    /* Setelah beberapa foto,
       buat heart collage */

    setTimeout(
        showFinalHeart,
        22000
    );

}


/* =====================================================
   FINAL PHOTO HEART
===================================================== */

function showFinalHeart() {

    memorySection.style.opacity =
        "0";

    memorySection.style.transform =
        "scale(.8)";


    setTimeout(
        () => {

            memorySection.style.display =
                "none";

            finalSection.style.opacity =
                "1";

            finalSection.style.transform =
                "scale(1)";

            createPhotoHeart();

        },
        1500
    );

}


/* =====================================================
   CREATE HEART PHOTO
===================================================== */

function createPhotoHeart() {

    const container =
        document.getElementById(
            "photoHeart"
        );


    container.innerHTML = "";


    const imageList = [

        "gambar_1 (1).jpeg",
        "gambar_1 (2).jpeg",
        "gambar_1 (3).jpeg",
        "gambar_1 (4).jpeg",
        "gambar_1 (5).jpeg",
        "gambar_1 (6).jpeg",
        "gambar_1 (7).jpeg",
        "gambar_1 (8).jpeg"

    ];


    /*
        Bentuk hati berdasarkan
        koordinat x dan y
    */

    const heartPoints = [];


    for (
        let t = 0;
        t < Math.PI * 2;
        t += .15
    ) {

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        const y =
            -(
                13 *
                Math.cos(t)
                -
                5 *
                Math.cos(2 * t)
                -
                2 *
                Math.cos(3 * t)
                -
                Math.cos(4 * t)
            );


        heartPoints.push({
            x,
            y
        });

    }


    /* Tambahkan foto */

    heartPoints.forEach(
        (point, index) => {

            const img =
                document.createElement(
                    "img"
                );


            img.className =
                "heart-photo";


            img.src =
                imageList[
                index %
                imageList.length
                ];


            /*
                Skala posisi
            */

            const scale = 12;


            const x =
                300 +
                point.x * scale;


            const y =
                260 +
                point.y * scale;


            img.style.left =
                `${x}px`;


            img.style.top =
                `${y}px`;


            img.style.animationDelay =
                `${index * .05}s`;


            img.style.transform =
                `
                translate(-50%, -50%)
                rotate(${Math.random() * 20 - 10}deg)
                `;


            container.appendChild(
                img
            );

        }
    );

}
