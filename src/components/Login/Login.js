import './Login.css'
import { createInput } from './../../helpers/helpers.js'

export const Login = () => {
	const wrapper = document.createElement('div')

	//Small welcoming alike message
	const welcomeMessage = document.createElement('p')
	welcomeMessage.id = 'welcomeMessage'
	welcomeMessage.innerHTML = 'Bienvenue! Here you can log in or register to start biking.'
	wrapper.appendChild(welcomeMessage)

	//If the user wants to register
	const registerForm = document.createElement('form')
	registerForm.name = 'register-form'
	registerForm.appendChild(createInput('text', '', 'register-name', 'Enter your name'))
	registerForm.appendChild(createInput('text', '', 'register-mail', 'Enter your email address'))
	registerForm.appendChild(createInput('text', '', 'register-phone', 'Enter your phone number (no space)'))
	const submitRegister = createInput('submit', 'Register', 'register-submit', '')
	//submitRegister.addEventListener('click', registerAttempt, false)
	registerForm.appendChild(submitRegister)
	wrapper.appendChild(registerForm)

	const separator = document.createElement('hr')
	wrapper.appendChild(separator)

	// Login form
	const loginForm = document.createElement('form')
	loginForm.name = 'login-form'
	loginForm.appendChild(createInput('text', '', 'login-mail', 'Enter your email address'))
	const submitLogin = createInput('submit', 'Login', 'login-submit', '')
	//submitLogin.addEventListener('click', loginAttempt, false)
	loginForm.appendChild(submitLogin)
	wrapper.appendChild(loginForm)

	return wrapper
}