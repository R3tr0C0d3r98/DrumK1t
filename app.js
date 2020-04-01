// Play drum by keyboard press
document.addEventListener('keydown', logKey);

function logKey() {
    switch(event.code) {
        case "KeyA":
            boom.play()
            break;
        case "KeyS":
            clap.play()
            break;
        case "KeyD":
            hihat.play()
            break;
        case "KeyF":
            kick.play();
            break;
        case "KeyG":
            openhat.play()
            break;
        case "KeyH":
            ride.play()
            break;
        case "KeyJ":
            snare.play()
            break;
        case "KeyK":
            tink.play()
            break;
        case "KeyL":
            tom.play()
            break;
    }
}

// Play music by mouse click
var boom = document.getElementById("boom");
var clap = document.getElementById("clap"); 
var hihat = document.getElementById("hihat"); 
var kick = document.getElementById("kick"); 
var openhat = document.getElementById("openhat"); 
var ride = document.getElementById("ride");
var snare = document.getElementById("snare"); 
var tink = document.getElementById("tink"); 
var tom = document.getElementById("tom"); 

function playBoom() { 
  boom.play(); 
} 

function playClap() { 
    clap.play(); 
}

function playHihat() { 
    hihat.play(); 
} 

function playKick() { 
    kick.play(); 
}

function playOpenhat() { 
    openhat.play(); 
}

function playRide() { 
    ride.play(); 
}

function playSnare() { 
    snare.play(); 
}

function playTink() { 
    tink.play(); 
}

function playTom() { 
    tom.play(); 
}