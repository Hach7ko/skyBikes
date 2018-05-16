import widgetSD from './CityWorker.html'

import { setItem, reload } from './../../helpers/helpers.js'
import { initStations } from './../../../public/stations.js'
import { initSavedMembers } from './../../../public/members.js'

export class CityWorker extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		// Create the city worker zone
		const title = document.createElement('h2')
		title.innerHTML = 'City Worker'
		this.appendChild(title)

		// Create the button to sort the bikes
		const button = document.createElement('button')
		button.innerHTML = 'Reorder bikes'
		button.addEventListener('click', this.cleanBikes, false)
		this.appendChild(button)
	}

	cleanBikes () {
		// "Cleaning" by reseting
		setItem('stations', JSON.stringify(initStations))
		setItem('members', JSON.stringify(initSavedMembers))
		reload()
	}
}

window.customElements.define('city-worker', CityWorker)
