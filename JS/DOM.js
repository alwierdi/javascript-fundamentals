document.title = "Founder Kage";

const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = 'Software Engineer'

const namaSaya = document.createElement("p")
namaSaya.innerHTML = "<marquee>Alwi Erdi Musthafa</marquee>"

const info = document.createElement('p')
info.innerText = 'Member of Apple Developer Academy'

body.append(h1)
body.append(namaSaya)
body.append(info)

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

const defaultText = 'Catch Me!'
btn2.textContent = defaultText

// btn1.style.border = "none"
btn1.style.padding = '10px'
btn1.style.fontSize = '24px'

btn2.style.padding = '10px'
btn2.style.fontSize = '24px'
btn2.style.position = 'absolute'


function clickButton(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.innerHTML = '<b id="ganti">Eyow! Wassupp</b>'
    body.append(newText)
}

function ubahWarna(){
    const warna = document.getElementById('ganti')
    warna.style.color = 'red'
}

function ubahText(){
    btn2.textContent = 'tapi boong'
    var pageWidth = window.innerWidth
    var pageHeight = window.innerHeight

    var buttonWidth = btn2.offsetWidth
    var buttonHeight = btn2.offsetHeight

    var randomLeft = Math.floor(Math.random() * (pageWidth - buttonWidth));
    var randomTop = Math.floor(Math.random() * (pageHeight - buttonHeight));

    btn2.style.left = randomLeft + "px";
    btn2.style.top = randomTop + "px";
}

function teksOri(){
    btn2.textContent = defaultText
}