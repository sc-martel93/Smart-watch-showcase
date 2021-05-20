
const changeWatch = (color) => {
    let watchImg = document.getElementById('watch-img')
    watchImg.src = `../SmartWatch/assets/${color}-watch.png`

}

blackButton = document.querySelector('.black')
blackButton.addEventListener('click', () => changeWatch("black"))

blueButton = document.querySelector('.blue')
blueButton.addEventListener('click', () => changeWatch("blue"))

pinkButton = document.querySelector('.pink')
pinkButton.addEventListener('click', () => changeWatch("pink"))

purpleButton = document.querySelector('.purple')
purpleButton.addEventListener('click', () => changeWatch("purple"))

redButton = document.querySelector('.red')
redButton.addEventListener('click', () => changeWatch("red"))

let watchDisplay = document.querySelector('.watch-display')

const viewTime = () => {
    console.log(watchDisplay)
    const updateClock = () => {
        let time = new Date().toLocaleTimeString()
        watchDisplay.appendChild(document.createTextNode(time))

    }

    setInterval(updateClock, 1000)
}

let timeButton = document.querySelector('.time-btn')
timeButton.addEventListener('click', () => viewTime())