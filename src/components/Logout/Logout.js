import {
    inputCreator,
    delSession,
    reload
} from './../../helpers/helpers.js'

const logout = () => {
    delSession('session')
    reload()
}

export const Logout = () => {
    const wrapper = document.createElement('div')

    // If the user wants to log out - just create logout button
    const logoutButton = inputCreator('submit', 'Logout', 'submit', '')
    logoutButton.addEventListener('click', logout, false)
    wrapper.appendChild(logoutButton)

    return wrapper
}