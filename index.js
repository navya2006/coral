// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.transform = "translateY(-200vh)";
}

// NAV

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color", "#090b0d");
            $(".navbar a").css("color", "#fff");
    } else {
        $(".navbar").css("background", "none");
            $(".navbar a").css("color", "#000");
    }
});

// MUSIC THING

var playing = false

function play() {
    if (playing == true) {
        playing = false;
        document.getElementById('play-btn').innerHTML = "<i class='fal fa-play'></i>";
        document.getElementById('try-audio').pause();
    } else if (playing == false) {
        playing = true;
        document.getElementById('play-btn').innerHTML = "<i class='fal fa-pause'></i>";
        document.getElementById('try-audio').play();
    }
    console.log(playing)
}