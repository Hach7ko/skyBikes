import { getItem } from './../../helpers/helpers.js'
import widgetSD from './SysAdmin.html'

import './SysAdmin.css'

export class SysAdmin extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback () {
		// Load members from localStorage
		const members = JSON.parse(getItem('members'))

		const title = document.createElement('h2')
		title.innerHTML = 'System Admin- Members List'
		this.appendChild(title)

		const membersCard = document.createElement('div')
		membersCard.className = 'flex-grid'

		members.map((m) => {
			const member = document.createElement('div')
			const fullName = document.createElement('p')
			const phone = document.createElement('p')
			const mail = document.createElement('p')
			const status = document.createElement('p')

			member.className = 'col'
			m.name = `${m.firstName} ${m.lastName}`

			fullName.innerHTML = m.name
			phone.innerHTML = m.phone
			mail.innerHTML = m.mail

			member.appendChild(fullName)
			member.appendChild(phone)
			member.appendChild(mail)

			if(m.isBanned) {
				status.innerHTML = 'Banned'
			} else {
				status.innerHTML = 'Not banned'
			}

			member.appendChild(status)

			if(m.bike) {
				const bikeIdColor = document.createElement('p')
				bikeIdColor.innerHTML = `Bike rented - ${m.bike.id}`
				bikeIdColor.style.color = m.bike.color
				member.appendChild(bikeIdColor)
			}
			membersCard.appendChild(member)
		})

		this.appendChild(membersCard)
	}
}

window.customElements.define('sys-admin', SysAdmin)
