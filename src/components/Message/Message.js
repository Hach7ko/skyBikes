import widgetSD from './Message.html'

export class Message extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		//create the message that will update given what's shown
		const generalMessage = document.createElement('p')
		generalMessage.id = 'generalMessage'
		generalMessage.innerHTML = ''
		this.appendChild(generalMessage)
    }
}

window.customElements.define('display-message', Message)
