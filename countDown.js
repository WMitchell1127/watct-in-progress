const TR = new Date('Jan 12, 2023 06:30:00').getTime()

const countDown = (date, target) => {
    let now = new Date().getTime()
    let distance = date - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let elDays = document.querySelector(`#${target} #days`)
    elDays.innerText = days
}

var x = setInterval(() => {

    countDown(TR, 'trDate')
}, 1000);
