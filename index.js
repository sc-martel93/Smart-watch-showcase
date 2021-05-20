
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

    const updateClock = () => {
        let time = new Date()
        let hour = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()

        if (hour > 12) {
            hour -= 12
            hour = "0" + hour
        }
        if (minutes < 10)
            minutes = '0' + minutes
        if (seconds < 10)
            seconds = '0' + seconds

        let display = `${hour}:${minutes}:${seconds}`
        watchDisplay.innerHTML = display
    }

    updateClock()
    setInterval(updateClock, 1000)
}

let timeButton = document.querySelector('.time-btn')
timeButton.addEventListener('click', () => viewTime())
