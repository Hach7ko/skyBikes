// import {
//     inputCreator,
//     delSession,
//     reload
// } from './../../helpers/helpers.js'

// const logout = () => {
//     delSession('session')
//     reload()
// }

// export const Logout = () => {
//     const wrapper = document.createElement('div')

//     // If the user wants to log out - just create logout button
//     const logoutButton = inputCreator('submit', 'Logout', 'submit', '')
//     logoutButton.addEventListener('click', logout, false)
//     wrapper.appendChild(logoutButton)

//     return wrapper
// }


import {
    inputCreator,
    delSession,
    reload
} from './../../helpers/helpers.js'
import widgetSD from './Logout.html'

import './Logout.css'

export class Logout extends HTMLElement {
    constructor () {
        super ()

        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = widgetSD
    }

    connectedCallback () {
        // If the user wants to log out - just create logout button
        const logoutButton = inputCreator('submit', 'Logout', 'submit', '')
        logoutButton.addEventListener('click', this.logout, false)
        this.appendChild(logoutButton)
    }

    logout () {
        delSession('session')
        reload()
    }
}

window.customElements.define('logout-button', Logout)
