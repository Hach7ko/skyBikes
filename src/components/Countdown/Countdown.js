export const startCountdown = () => {
	let timeLeft = '08:00'
	document.getElementById('timer').innerHTML = timeLeft

	let timeArray = timeLeft.split(/[:]+/)
	let m = timeArray[0]
	let s = checkSecond((timeArray[1] - 1))
	if (s === 59) m = m - 1
	if (m < 0) alert('You are banned!')
	
	document.getElementById('timer').innerHTML = `${m}:${s}`
	setTimeout(startCountdown, 1000)
}

const checkSecond = (sec) => {
	if (sec < 10 && sec >= 0) sec = '0' + sec // add zero in front of numbers < 10
	if (sec < 0) sec = '59'
	return sec
  }

export const Countdown = () => {
	const wrapper = document.createElement('div')

	const timeLeft = document.createElement('p')
	timeLeft.innerHTML = 'Time Left : '
	wrapper.appendChild(timeLeft)

	const timer = document.createElement('span')
	timer.id = 'timer'
	wrapper.appendChild(timer)

	return wrapper
}