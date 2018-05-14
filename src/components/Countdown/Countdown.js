import {
	inputCreator
} from './../../helpers/helpers.js'
import widgetSD from './Countdown.html'

import './Countdown.css'

export class Countdown extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		const countdownMessage = document.createElement('p')
		countdownMessage.id = 'countdownMessage'
		countdownMessage.innerHTML = ''
		this.appendChild(countdownMessage)
	}

}

window.customElements.define('timer-countdown', Countdown)
