// // Colors
// var yellow  = "#FFFF14";
// var green = "#11E84A";
// var black = "#262626";
// var gray = "#343434";
// var white = "#F8FFF9";


// var playBtn = document.getElementsByClassName("playCon");
// let print = console.log;

// let player = document.getElementsByTagName("audio")[0];

// var dir = "../Lofi List/";
// var musics = [
//     "1 A.M Study Session books - (Lofi HipHop, chill beats).m4a",
//     "2 A.M Study Session _books_ - _lofi hip hop_chill beats_ ( 128kbps ).m4a",
//     "330 a.m. ~ Lofi HipHop  (chillhop mix for Study, Sleep, Homework).m4a",
//     "Bazzi X DEAN Type Beat _Wish_ _ Chill Wave _ ( 256kbps cbr ).mp3",
//     "Chill Study Beats • jazz & Lofi HipHop Mix.mp3"
// ];

// function setPlayerSrc(ind) {
//     player.src = `${dir + musics[ind]}`;
//     // print(player.src);
//     player.play();
// }



// let parent, parentMusic;

// function styleMusicAndArtist(key) {
//     ind = key.path[0].classList[1][key.path[0].classList[1].length - 1] - 1;
//     print(ind + "INd");

//     parent = key.path[3];
//     parentMusic = parent.getElementsByClassName("musicTitle")[0];
//     parentArtist = parent.getElementsByClassName("musicArtist")[0];

//     // Style parent 
//     // setTimeout(setDefaultMusicBar(ind), 5000);
//     setDefaultMusicBar(ind);
//     // Style
//     // parent.style.backgroundColor = green;
//     parentMusic.style.color = white;
//     parentArtist.style.color = white;
//     setPlayerSrc(ind);
// }

// let playIcon = document.getElementsByClassName("playIcon");
// function playPause() {
//     // playIcon[index].setAttribute("src", "SVG/Play.svg");
//     player.pause();
//     print(player.duration)

//     // print(str);
// }

// // function playAndPause() {
// //     alert("Paused");
// //     player.pause();
// // }

// for (var i = 0; i < playBtn.length; i++) {
//     playBtn[i].addEventListener("click", styleMusicAndArtist);
// }

// let musicBars = document.getElementsByClassName("musicBar");

// function setDefaultMusicBar(ind) {
//     for (var i = 0; i < musicBars.length; i++) {
//         if (i == ind) {
//             // Green
//             playIcon[i].setAttribute("src", "SVG/Pause.svg");
            
//             // Add event to pause music and change icon
//             playBtn[i].addEventListener("click", playPause);

//             musicBars[i].getElementsByClassName("musicTitle")[0].style.color = "#F8FFF9";
//             musicBars[i].getElementsByClassName("musicArtist")[0].style.color = "#F8FFF9";
//             musicBars[i].style.backgroundColor = "#11E84A";
//         } else {
//             // Yellow
//             playIcon[i].setAttribute("src", "SVG/Play.svg");

//             musicBars[i].getElementsByClassName("musicTitle")[0].style.color = "#262626";
//             musicBars[i].getElementsByClassName("musicArtist")[0].style.color = "#262626";
//             musicBars[i].style.backgroundColor = "#FFFF14";
//         }
//     }
// }