import './Login.css'
import { createInput } from './../../helpers/helpers.js'

const register = () => {
	console.log('I want to register.')
}

const login = () => {

}

export const Login = () => {
	const wrapper = document.createElement('div')

	//Small welcoming alike message
	const welcomeMessage = document.createElement('p')
	welcomeMessage.id = 'welcomeMessage'
	welcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.'
	wrapper.appendChild(welcomeMessage)

	// If the user wants to register
	const registerForm = document.createElement('form')

	//create basic inputs (first and last name, email, phone and the submit button)
	registerForm.name = 'registerForm'
	registerForm.appendChild(inputCreator('text', '', 'firstName', 'John'))
	registerForm.appendChild(inputCreator('text', '', 'lastName', 'Doe'))
	registerForm.appendChild(inputCreator('text', '', 'mail', 'john.doe@mail.com'))
	registerForm.appendChild(inputCreator('text', '', 'phone', '5147124991'))
	
	const registerButton = inputCreator('submit', 'Register', 'submit', '')
	registerButton.addEventListener('click', register, false)
	registerForm.appendChild(register)
	wrapper.appendChild(registerForm)

	const separator = document.createElement('hr')
	wrapper.appendChild(separator)

	// If the user wants to log in 
	const loginForm = document.createElement('form')

	//create mail input and the submit button
	loginForm.name = 'loginForm'
	loginForm.appendChild(inputCreator('text', '', 'mail', 'john.doe@mail.com'))
	const loginButton = inputCreator('submit', 'Login', 'submit', '')
	loginButton.addEventListener('click', login, false)
	loginForm.appendChild(login)
	wrapper.appendChild(loginForm)

	// If the user wants to log out - just create logout button
	const logoutButton = inputCreator('submit', 'Logout', 'submit', '')
	logoutButton.addEventListener('click', logout, false)
	wrapper.appendChild(logoutButton)

	return wrapper
}