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
		title.innerHTML = 'Admin area'
		this.appendChild(title)

		// Columns titles
		const membersCard = document.createElement('div')
		// fakeTableTitles.className = 'titles'
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Name'))
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Phone'))
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Email'))
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Status'))
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Bike ID'))
		// fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Bike color'))
		// this.appendChild(fakeTableTitles)

		members.map((m) => {
			// Single cell
			// User info
			const member = document.createElement('div')
			const fullName = document.createElement('p')
			const phone = document.createElement('p')
			const mail = document.createElement('p')

			const bikeIdColor = document.createElement('p')

			const status = document.createElement('p')

			member.className = 'member'
			m.name = `${m.firstName} ${m.lastName}`

			fullName.innerHTML = m.name
			phone.innerHTML = m.phone
			mail.innerHTML = m.mail
			status.innerHTML = m.banned

			if(m.bike) {
				
			bikeIdColor.innerHTML = m.bike.id
			bikeIdColor.style.color = m.bike.color
			
			}
	


			// member.appendChild(this.createFakeTableCell('member-name', m.name))
			// member.appendChild(this.createFakeTableCell('member-phone', m.phone))
			// member.appendChild(this.createFakeTableCell('member-email', m.mail))
			// m.banned ? member.appendChild(this.createFakeTableCell('member-status', 'banned')) : member.appendChild(this.createFakeTableCell('member-status no-data', '&#8203;'))

			// // Display bike info or empty cells
			// if (m.bike) {
			// 	member.appendChild(this.createFakeTableCell('bike-id', m.bike.id))
			// 	member.appendChild(this.createFakeTableCell('bike-color', m.bike.color, m.bike.color))
			// } else {
			// 	member.appendChild(this.createFakeTableCell('bike-id no-data', '&#8203;'))
			// 	member.appendChild(this.createFakeTableCell('bike-color no-data', '&#8203;'))
			// 	member.appendChild(this.createFakeTableCell('bike-timer no-data', '&#8203;'))
			// }
			members.appendChild(member)
		})

		this.appendChild(members)
	}

	// createFakeTableCell (className, text, textColor) {
	// 	const cell = document.createElement('div')
	// 	cell.className = className
	// 	cell.style.color = textColor || ''
	// 	cell.innerHTML = text
	// 	return cell
	// }
}

window.customElements.define('sys-admin', SysAdmin)
