 import {
	inputCreator,
	getItem,
	sanitizeField,
	isValidMail,
	isMember,
	isBanned,
	startSession,
	updateMessage
} from './../../helpers/helpers.js'
import widgetSD from './Login.html'

import './Login.css'

export class Login extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		// If the user wants to log in 
		const lForm = document.createElement('form')

		//create mail input and the submit button
		lForm.name = 'loginForm'
		lForm.appendChild(inputCreator('text', '', 'lmail', 'john.doe@mail.com'))
		
		const lButton = inputCreator('submit', 'Login', 'submit', '')
		lButton.id = 'lButton'
		lButton.addEventListener('click', this.login, false)
		lForm.appendChild(lButton)
		
		this.appendChild(lForm)
	}

	login (e) {
		// Prevent default behavior (glitch jump)
		e.preventDefault()

		let errors = ''
		const members = JSON.parse(getItem('members'))
		const form = document.forms['loginForm']
		const currUser = {
			'mail': sanitizeField(form['lmail'].value)
		}

		// Add message errors if nothing fit requirements
		errors += !isValidMail(currUser.mail) ? 'Enter a valid email address.'
			: !isMember(currUser.mail, members) ? 'You are not registered yet.'
				: isBanned(currUser.mail, members) ? 'You are banned.'
					: ''

		// Push errors or login
		if (errors) {
			alert(errors)
		} else {
			startSession(isMember(currUser.mail, members))

		}
	}
}

window.customElements.define('login-form', Login)
