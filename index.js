requestAnimationFrame(setHandles)

function setHandles(){
    const milliHandle = document.querySelector('.handle__milli')
    const secondHandle = document.querySelector('.handle__second')
    const minuteHandle = document.querySelector('.handle__minute')
    const hourHandle = document.querySelector('.handle__hour')

    const d = new Date()

    const currentMillis = d.getMilliseconds()
    const currentSeconds = d.getSeconds()
    const currentMinutes = d.getMinutes()
    const currentHours = d.getHours()

    const secondsExtraAngle = currentMillis * 6 / 1000
    const minutesExtraAngle = currentSeconds * 6 / 60
    const hoursExtraAngle = currentMinutes * 30 / 60

    milliHandle.style.transform = `translateX(-50%) rotate(${currentMillis * 0.36}deg)`
    secondHandle.style.transform = `translateX(-50%) rotate(${currentSeconds * 6 + secondsExtraAngle}deg)`
    minuteHandle.style.transform = `translateX(-50%) rotate(${currentMinutes * 6 + minutesExtraAngle}deg)`
    hourHandle.style.transform = `translateX(-50%) rotate(${currentHours * 30 + hoursExtraAngle }deg)`

    requestAnimationFrame(setHandles)
    
    console.log(currentMillis)
}