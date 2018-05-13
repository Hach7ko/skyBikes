import { startCountdown } from './../Countdown/Countdown.js'
import {
	getSession
} from './../../helpers/helpers.js'

export const rentBike = () => {
	let member = JSON.parse(getSession('session'))

	if (member.hasBike) alert('You already have a bike!')
	else {
		member.hasBike = true
		startCountdown()

		console.log(member.firstName + ' ' + member.lastName + ' has rent a bike!', member)

		setTimeout(() => {
			member.hasBike = false
			console.log(member.firstName + ' ' + member.lastName + ' has released a bike!', member)
		}, 8000)
	}

}

export const Bikes = () => {
}