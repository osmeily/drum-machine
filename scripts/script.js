const sounds = {
    Q : "../sonidos/drum1.mp3",
    W : "../sonidos/drum2.mp3",
    E : "../sonidos/drum3.mp3",
    A : "../sonidos/drum4.mp3",
    S : "../sonidos/accidente_1.mp3",
    D : "../sonidos/tambores_8.mp3",
    Z : "../sonidos/beatbox_3.mp3",
    X : "../sonidos/medio_1.mp3",
    C : "../sonidos/bassdrum_1.mp3"
}

const effectName = {
    Q : "Eco crash",
    W : "Snare",
    E : "Eco toms",
    A : "Long hit-hat",
    S : "Ride",
    D : "Tapping snare",
    Z : "Closed hit-hat",
    X : "Middle",
    C : "Bombo"
}

const display = document.querySelector(".display")
const drumPads = document.querySelector(".drum-pads")

drumPads.addEventListener("click", (e) =>{
    let id = e.target.id
    let src = sounds[id]
    let audio = document.createElement("audio")
    if(e.target && e.target.tagName === 'BUTTON'){

        display.innerHTML = `
        <h3>${effectName[id]}</h3>`
        audio.setAttribute("src", src)
        audio.play()
    }
})


window.addEventListener('keydown', (e)=>{
    console.log(e.code)
    let audio = document.createElement("audio")
    let src = ''
    switch (e.code) {
        case "KeyQ":
            src = sounds.Q
            display.innerHTML = `
            <h3>${effectName.Q}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyW":
            src = sounds.W
            display.innerHTML = `
            <h3>${effectName.W}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyE":
            src = sounds.E
            display.innerHTML = `
            <h3>${effectName.E}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyA":
            src = sounds.A
            display.innerHTML = `
            <h3>${effectName.A}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyS":
            src = sounds.S
            display.innerHTML = `
            <h3>${effectName.S}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyD":
            src = sounds.D
            display.innerHTML = `
            <h3>${effectName.D}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyZ":
            src = sounds.Z
            display.innerHTML = `
            <h3>${effectName.Z}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyX":
            src = sounds.X
            display.innerHTML = `
            <h3>${effectName.X}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
        case "KeyC":
            src = sounds.C
            display.innerHTML = `
            <h3>${effectName.C}</h3>`
            audio.setAttribute("src", src)
            audio.play()
            break;
                                            
        default:
            break;
    }
})


const boton1 = () => {document.querySelector(".reproductor1")
    boton1.addEventListener("click", () => {
    let etiquetaAudio1 = document.createElement("audio")
    etiquetaAudio1.setAttribute("src", "./sonidos/drum2.mp3")
    etiquetaAudio1.play()
    })
}