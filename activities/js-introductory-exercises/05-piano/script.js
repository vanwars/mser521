const selectEl = document.querySelector("select");
function playLowC() {
    // go and grab the select menu
    const folderName = selectEl.value;

    // get the user's selection

    console.log(folderName);

    // create a variable called "audio" and put the
    // element matching the selector into the variable:
    const audioEl = document.querySelector("audio");
    // assign the src attribute to the file located
    audioEl.src = "scales/" + folderName + "/C_low.mp3"; // scales/scale4/C_low.mp3
    audioEl.play();
}

function playD() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/D.mp3";
    audio.play();
}

function playE() {
    const audio = document.querySelector("audio");
    audio.src = "scales/scale4/E.mp3";
    audio.play();
}
