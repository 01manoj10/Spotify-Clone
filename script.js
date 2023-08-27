console.log("Welcome to spotify");
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastername = document.getElementById('mastername');

let gif = document.getElementById('gif');

let songitem = Array.from(document.getElementsByClassName('songitem'));
let song = [
    { songname: "Mere Liye Tum Kaafi Ho", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg" },
    { songname: " Liye Tum Kaafi Ho", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg" },
    { songname: "Mere  Tum Kaafi Ho", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    { songname: "jefmfm Liye Tum Kaafi Ho", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" },
    { songname: "felknmfe Tum Kaafi Ho", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg" },
    { songname: "Mfemiye Tum Kaafi Ho", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg" },
    { songname: "Mere Liye Tum Kaafi Ho", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg" },
    { songname: "Mefkn Tum Kaafi Ho", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg" },
    { songname: "dkfnre Liye Tum Kaafi Ho", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg" },
    { songname: "mofj Liye Tum Kaafi Ho", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg" },
    { songname: "hu,makye Tum Kaafi Ho", filePath: "songs/11.mp3", coverPath: "covers/11.jpeg" },
    { songname: "humane Liye Tum Kaafi Ho", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg" },
    { songname: "dfnmiye Tum Kaafi Ho", filePath: "songs/13.mp3", coverPath: "covers/13.jpeg" },
    { songname: "Mesdnflre Liye Tum Kaafi Ho", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg" },
    { songname: "kdnfMere Liye Tum Kaafi Ho", filePath: "songs/15.mp3", coverPath: "covers/15.jpeg" },
    { songname: "kdfnMere Liye Tum Kaafi Ho", filePath: "songs/16.mp3", coverPath: "covers/16.jpeg" },
]
songitem.forEach((Element, i) => {
    Element.getElementsByTagName('img')[0].src = song[i].coverPath;
    Element.getElementsByClassName('songname')[0].innerText = song[i].songname;
})

masterplay.addEventListener('click', () => {
    if (audioelement.pause() || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
        location.reload();
    }
})


audioelement.addEventListener('timeupdate', () => {

    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})


const makeallplay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((El) => {
        El.classList.remove('fa-pause-circle');
        El.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeallplay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastername.innerText = song[songindex].songname;

        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;

        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    })
})

// document.getElementById('next').addEventListener('click', () => {
//     if (songindex >= 15) {
//         songindex = 0;
//     }
//     else {
//         songindex += 1;
//     }
//     audioelement.src = `songs/${songindex + 1}.mp3`;
//     mastername.innerText = song[songindex].songname;
//     audioelement.currentTime = 0;
//     audioelement.play();
//     gif.style.opacity = 1;
//     masterplay.classList.remove('fa-pause-circle');
//     masterplay.classList.add('fa-play-circle');
// })

// document.getElementById('previous').addEventListener('click', () => {
//     if (songindex <= 0) {
//         songindex = 15;
//     }
//     else {
//         songindex -= 1;
//     }
//     audioelement.src = `songs/${songindex + 1}.mp3`;
//     mastername.innerText = song[songindex].songname;
//     audioelement.currentTime = 0;
//     audioelement.play();
//     gif.style.opacity = 1;
//     masterplay.classList.remove('fa-pause-circle');
//     masterplay.classList.add('fa-play-circle');
// })
