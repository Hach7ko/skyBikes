import widgetSD from './Message.html'

import './Message.css'

export class Message extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		const generalMessage = document.createElement('p')
		generalMessage.id = 'generalMessage'
		generalMessage.innerHTML = ''
		this.appendChild(generalMessage)
    }
}

window.customElements.define('display-message', Message)
