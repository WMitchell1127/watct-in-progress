setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
} 

function setRotation(elemnt, rotationRatio) {
    elemnt.style.setProperty('--rotation', rotationRatio * 360 + 'deg')
} 

 setClock()

const date = new Date()
const currentMonth = date.getMonth()
const monthDisplay = document.getElementById('month')

const currentDate = `${date.getDate()}`
const dateDisplay = document.getElementById('date')

dateDisplay.innerText = currentDate 


const monthNameDisplay = document.getElementById('monthName')
const dayNameDisplay = document.getElementById('dayName')
const currentDayOfTheWeek = date.getDay()


const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WeekdayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

monthNameDisplay.innerText = monthArr[currentMonth]
dayNameDisplay.innerText = WeekdayArr[currentDayOfTheWeek]

