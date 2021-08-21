{/* <div class="musicBar mb1">
    <div class="musicTitle">1 A.M Study Session 📚 - [lofi hip hop/chill beats]</div>
    <div class="musicArtist">ChilledCow</div><div class="dur">1:01:13</div>

    <div class="iconContainer">
        <div class="iconHolder">
            <div class="playCon pl1">
                <img src="SVG/Play.svg" class="playIcon">
            </div>

            <div class="heartCon">
                <img src="SVG/Heart - Unfilled.svg">
            </div>
        </div>
    </div>
</div> */}





class Music {
    constructor(musics) {
        this._music = musics;
        this.playing = false;
        this.playerDuration = 0;

        this.yellow = "#FFFF14";
        this.green = "#11E84A";
        this.black = "#262626";
        this.gray = "#343434";
        this.white = "#F8FFF9";
    }

    setBottomPlayerTexts(elNum) {
        // console.log(player);
        // console.log(elNum);

        musicTitleBottom.innerHTML = musicTitleText[elNum].textContent;
        musicArtistBottom = musicArtistText[elNum].textContent;


        setTimeout(() => {
            musicDur = player.duration;
            // console.log(musicDur == NaN);
            var t = setInterval(nextStep, 1000);
            function nextStep() {
                musicCur = player.currentTime;
                totalPercent = (musicCur / musicDur) * 100;
                totalPercent = `${totalPercent}%`;
    
                if (player.ended) {

                }
                
                // console.log(totalPercent + "%");
                durationTimestamp.style.width = totalPercent;
                timestampCirc.style.left = totalPercent;
            }
        }, 400);
    }

    pauseAndPlay (key) {
        // console.log(player);
        let playIcon = document.getElementsByClassName("active")[0].getElementsByTagName("img")[0];
        if (this.playing == false) {
            this.playing = true;
            player.play();
            playIcon.src = "SVG/Pause.svg";
            bottomPlayIcon.src = "SVG/Pause.svg";
        } else {
            this.playing = false;
            player.pause();
            playIcon.src = "SVG/Play.svg";
            bottomPlayIcon = "SVG/Play.svg";
        }
        // console.log(player);
        // player.pause();
    }

    logMusic(key) {
        let elNum = parseInt(key.target.classList[1][key.target.classList[1].length - 1] - 1);
        let musicBars = document.getElementsByClassName("musicBar");
        player.src = this._music[elNum];

        gsap.to(".bottomPlayer", {bottom: 0, duration: 1.25, delay: 0.5, ease: "expo.inOut"});

        for (var i = 0; i < playBtn.length; i++) {
            if (i == elNum) {
                gsap.to(musicBars[i], {backgroundColor: this.green, scale: 1.025, duration: 0.25, ease: "quad.inOut"});

                playBtn[i].style.backgroundColor = this.yellow;
                playBtn[i].getElementsByClassName("playIcon")[0].src = "SVG/Pause.svg";

                playBtn[i].removeEventListener("click", setPlayEvent);
                playBtn[i].addEventListener("click", this.pauseAndPlay);
                
                playBtn[i].classList.add("active");

                // For bottom Play icon inly
                bottomPlayIcon.setAttribute("src", "SVG/Pause.svg");
                bottomPlayIcon.parentElement.addEventListener("click", this.pauseAndPlay);

                this.setBottomPlayerTexts(elNum);
                continue;
            } else {
                gsap.to(musicBars[i], {backgroundColor: this.yellow,scale: 1, duration: 0.25, ease: "quad.inOut"});
                
                playBtn[i].style.backgroundColor = this.green;
                playBtn[i].getElementsByClassName("playIcon")[0].src = "SVG/Play.svg";

                playBtn[i].removeEventListener("click", this.pauseAndPlay);
                playBtn[i].addEventListener("click", setPlayEvent);

                playBtn[i].classList.remove("active");
            }
        }
        // Sets only duration
        player.onplay = setTimeout(function setDur() {
            this.playerDuration = player.duration;
            // bottomPlayer();
        }, 500);

        function bottomPlayer() {
            
        }

        // setInterval(() => {
        //     console.log(player.currentTime = );
        // }, 300);
    }
}



var musics = [
    `../Lofi List/(FREE) Lo-fi Type Beat - I Need a Girl ( 256kbps cbr ).mp3`,
    `../Lofi List/1 A.M Study Session books - (Lofi HipHop, chill beats).m4a`,
    `../Lofi List/2 A.M Study Session _books_ - _lofi hip hop_chill beats_ ( 128kbps ).m4a`,
    `../Lofi List/330 a.m. ~ Lofi HipHop  (chillhop mix for Study, Sleep, Homework).m4a`,
    `../Lofi List/Amazing Chillstep Collection 2016 [ 1 Hour ] 128 kbps.m4a`,
    `../Lofi List/Bazzi X DEAN Type Beat _Wish_ _ Chill Wave _ ( 256kbps cbr ).mp3`,
    `../Lofi List/Believe in the dream [studysleephomework music] 128 kbps.m4a`,
    `../Lofi List/C H I L L V I B E S - Chill & aesthetic music playlist.m4a`,
    `../Lofi List/Chill Study Beats • jazz & Lofi HipHop Mix.mp3`,
    `../Lofi List/Chillhop Essentials - Spring 2019・chill hiphop & beats to relax.m4a`,
    `../Lofi List/Coronavirus Safety - chill alone (Lofi HipHop for Study, Sleep, Homework).m4a`,
    `../Lofi List/DLJ - Night Emotions ( 128kbps ).m4a`,
    `../Lofi List/Dontcry x Glimlip - 777 ( 128kbps ).m4a`,
    `../Lofi List/dryhope - White Oak _chill hip hop beats_ ( 128kbps ).m4a`,
    `../Lofi List/Dusk to Dawn - Ultimate Winter Chillstep.m4a`,
    `../Lofi List/idealism - last time ( 256kbps cbr ).mp3`,
    `../Lofi List/JOURNEY - A Chillwave Synthwave Mix.m4a`,
    `../Lofi List/late night vibes⁴... _sleeping_ calm chillhop beats ( 128kbps ).m4a`,
    `../Lofi List/Like a dream ♡ (Lofi hip hop Mix).m4a`,
    `../Lofi List/listening to lofi on your own for new years eve ( 256kbps cbr ).mp3`,
    `../Lofi List/Lofi hip hop mix - Beats to Relax & Study.m4a`,
    `../Lofi List/lofi lockdown ~ lofi hip hop _ jazzhop _ chillhop mix _study_sleep_homework music_ ( 128kbps ).m4a`,
    `../Lofi List/mell-ø x Ambulo - Afloat Again ( 128kbps ).m4a`,
    `../Lofi List/Miserable - (a sad ambient_lofi mix).m4a`,
    `../Lofi List/Monma - Calm Lands ( 128kbps ).m4a`,
    `../Lofi List/more sad lofi to help you sleep ( 256kbps cbr ).mp3`,
    `../Lofi List/NCS - Chill Lo-fi Hip-Hop Beats.m4a`,
    `../Lofi List/No Sleep - A Chill Mix.m4a`,
    `../Lofi List/Rain, Coffee and You  [studysleephomework music] 128 kbps.m4a`,
    `../Lofi List/RAINING IN OSAKA (Lofi HipHop).mp3`,
    `../Lofi List/Rainy Days In Tokyo [Lofi Hip Hop  Jazzhop  Chillhop Mix] - Beats.m4a`,
    `../Lofi List/Rooftop - Jazz Hop (Lofi Chillhop).mp3`,
    `../Lofi List/Samurai Champloo - Lofi Hip Hop Mix.m4a`,
    `../Lofi List/Ｓｈｉｌｏｈ Ｄｙｎａｓｔｙ Ｃｈｉｌｌ Ｍｉｘ ( 256kbps cbr ).mp3`,
    `../Lofi List/sleepy fish - for when it's warmer ( 256kbps cbr ).mp3`,
    `../Lofi List/sleepy lofi & shooting stars ( 128kbps ).m4a`,
    `../Lofi List/Ward Wills - When to Say Goodbye - Chill Lofi beats.m4a`,
    // 25+
];
var artists = [
    "Lee",
    "ChilledCow",
    "ChilledCow",
    "ChilledCow",
    "ChilledCow",
    "BeatCoin",
]

var minilist = document.getElementsByClassName("miniList")[0];

(function () {
    var elCount = 10;
    var classCount = 0;
    var musicSliced = null;
    
    for (var i = 0; i < elCount; i++) {
        if (i == 5) {
            break;
        }
        classCount += 1;
        musicSliced = musics[i].slice(13, musics[i].length - 4);

        var els =
        `<div class="musicBar mb${classCount}">
            
            <div class="overflowController">
                <div class="musicTitle">${musicSliced}</div>
                <div class="musicArtist">ChilledCow</div><div class="dur">1:01:13</div>
            </div>
        
            <div class="iconContainer">
                <div class="iconHolder">
                    <div class="playCon pl${classCount}">
                        <img src="SVG/Play.svg" class="playIcon">
                    </div>

                    <div class="heartCon">
                        <img src="SVG/Heart - Unfilled.svg">
                    </div>
                </div>
            </div>
        </div>`;
        minilist.innerHTML += els;
    }
}())



var musicTitleText = document.getElementsByClassName("musicTitle");
var musicArtistText = document.getElementsByClassName("musicArtist");

var botTitle = null;
var botArtist = null;

var musicDur = null;
var musicCur = null;

var playBtn = $(".playCon");
var player = document.getElementsByTagName("audio")[0];

var botPlayer = document.getElementsByClassName("bottomPlayer")[0];
var bottomPlayIcon = document.getElementsByClassName("botPlayIcon")[0];

var musicTitleBottom = document.getElementsByClassName("songTitleBot")[0];
var musicArtistBottom = document.getElementsByClassName("artistBot")[0];

var totalPercent = null;
var durationTimestamp = document.getElementsByClassName("durationBarTimestamp")[0];
var timestampCirc = document.getElementsByClassName("timestampCirc")[0];


const x = new Music(musics);

function setPlayEvent(key) {
    return x.logMusic(key);
}
for (var i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener("click", setPlayEvent);
}