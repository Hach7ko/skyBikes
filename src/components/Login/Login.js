// import { 
// 	inputCreator,
// 	getItem,
// 	sanitizeField,
// 	isValidMail,
// 	isValidPhone,
// 	isMember,
// 	isBanned,
// 	startSession,
// 	setItem
//  } from './../../helpers/helpers.js'

//  import './Login.css'

// const register = e => {
// 	// Prevent form submission's default behavior
// 	e.preventDefault()

// 	// Load members from localStorage
// 	const members = JSON.parse(getItem('members'))

// 	// Sanitize fields
// 	const form = document.forms['registerForm']
// 	const member = {
// 	  'firstName': sanitizeField(form['rFirstName'].value),
// 	  'lastName': sanitizeField(form['rLastName'].value),
// 	  'phone': sanitizeField(form['rPhone'].value),
// 	  'mail': sanitizeField(form['rMail'].value)
// 	}

// 	// Build error message or return empty string
// 	let errors = ''
// 	errors += !isValidPhone(member.phone) ? 'Enter a valid phone number.' : ''
// 	errors += !isValidMail(member.mail) ? 'Enter a valid email address.'
// 	  : isMember(member.mail, members) ? 'You are already registered, please login.'
// 		: ''

// 	// Push errors or register
// 	errors ? alert(errors) : addNewMember(member, members)
// }

// const login = e => {
// 	// Prevent form submission's default behavior
// 	e.preventDefault()

// 	let errors = ''
// 	const members = JSON.parse(getItem('members'))
// 	const form = document.forms['loginForm']
// 	const currUser = {
// 	  'mail': sanitizeField(form['lmail'].value)
// 	}

// 	// Build error message or return empty string
// 	errors += !isValidMail(currUser.mail) ? 'Enter a valid email address.'
// 	  : !isMember(currUser.mail, members) ? 'You are not registered yet.'
// 		: isBanned(currUser.mail, members) ? 'You are banned.'
// 		  : ''

// 	// Push errors or login
// 	errors ? alert(errors) : startSession(isMember(currUser.mail, members))
// }

// const addNewMember = (member, members) => {
// 	members.push(member)
// 	setItem('members', JSON.stringify(members))
// 	startSession(member)
// }


// export const Login = () => {
// 	const wrapper = document.createElement('div')

// 	//Small welcoming alike message
// 	const welcomeMessage = document.createElement('p')
// 	welcomeMessage.id = 'welcomeMessage'
// 	welcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.'
// 	wrapper.appendChild(welcomeMessage)

// 	// If the user wants to register
// 	const rForm = document.createElement('form')

// 	//create basic inputs (first and last name, email, phone and the submit button)
// 	rForm.name = 'registerForm'
// 	rForm.appendChild(inputCreator('text', '', 'rFirstName', 'John'))
// 	rForm.appendChild(inputCreator('text', '', 'rLastName', 'Doe'))
// 	rForm.appendChild(inputCreator('text', '', 'rMail', 'john.doe@mail.com'))
// 	rForm.appendChild(inputCreator('text', '', 'rPhone', '5147124991'))

// 	const rButton = inputCreator('submit', 'Register', 'submit', '')
// 	rButton.addEventListener('click', register, false)
// 	rForm.appendChild(rButton)
// 	wrapper.appendChild(rForm)

// 	const separator = document.createElement('hr')
// 	wrapper.appendChild(separator)

// 	// If the user wants to log in 
// 	const lForm = document.createElement('form')

// 	//create mail input and the submit button
// 	lForm.name = 'loginForm'
// 	lForm.appendChild(inputCreator('text', '', 'lmail', 'john.doe@mail.com'))
// 	const lButton = inputCreator('submit', 'Login', 'submit', '')
// 	lButton.addEventListener('click', login, false)
// 	lForm.appendChild(lButton)
// 	wrapper.appendChild(lForm)

// 	return wrapper
// }

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
		updateMessage('Bienvenue! Here you can log in to start biking.')

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
		// Prevent form submission's default behavior
		e.preventDefault()

		let errors = ''
		const members = JSON.parse(getItem('members'))
		const form = document.forms['loginForm']
		const currUser = {
			'mail': sanitizeField(form['lmail'].value)
		}

		// Build error message or return empty string
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
