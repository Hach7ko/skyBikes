import {
	inputCreator,
	getItem,
	sanitizeField,
	isValidMail,
	isValidPhone,
	isMember,
	isBanned,
	startSession,
	setItem,
	updateMessage
} from './../../helpers/helpers.js'
import widgetSD from './Register.html'

import './Register.css'

export class Register extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		updateMessage('Bienvenue! Here you can register to start biking.')

		// If the user wants to register
		const rForm = document.createElement('form')

		//create basic inputs (first and last name, email, phone and the submit button)
		rForm.name = 'registerForm'
		rForm.appendChild(inputCreator('text', '', 'rFirstName', 'John'))
		rForm.appendChild(inputCreator('text', '', 'rLastName', 'Doe'))
		rForm.appendChild(inputCreator('text', '', 'rMail', 'john.doe@mail.com'))
		rForm.appendChild(inputCreator('text', '', 'rPhone', '5147124991'))

		const rButton = inputCreator('submit', 'Register', 'submit', '')
		rButton.addEventListener('click', this.register, false)
		rForm.appendChild(rButton)
		this.appendChild(rForm)
	}

	register(e) {
		// Prevent form submission's default behavior
		e.preventDefault()

		// Load members from localStorage
		const members = JSON.parse(getItem('members'))

		// Sanitize fields
		const form = document.forms['registerForm']
		const member = {
			'firstName': sanitizeField(form['rFirstName'].value),
			'lastName': sanitizeField(form['rLastName'].value),
			'phone': sanitizeField(form['rPhone'].value),
			'mail': sanitizeField(form['rMail'].value)
		}

		// Build error message or return empty string
		let errors = ''
		errors += !isValidPhone(member.phone) ? 'Enter a valid phone number.' : ''
		errors += !isValidMail(member.mail) ? 'Enter a valid email address.'
			: isMember(member.mail, members) ? 'You are already registered, please login.'
				: ''
				
		// Push errors or register
		if (errors) {
			alert(errors)
		} else {
			members.push(member)
			setItem('members', JSON.stringify(members))
			startSession(member)
		}
	}
}

window.customElements.define('register-form', Register)
