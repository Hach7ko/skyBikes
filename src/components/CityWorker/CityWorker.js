import { setItem, reload } from './../../helpers/helpers.js'
import { initStations } from './../../../public/stations.js'
import { initSavedMembers } from './../../../public/members.js'

/*
	Component logic
*/

const cleanBikes = () => {
	// Simple hard reset so far
	setItem('stations', JSON.stringify(initStations))

	// Also clean users to avoid conflicts
	setItem('members', JSON.stringify(initSavedMembers))

	reload()
}

/*
	Component UI
*/
export const CityWorker = () => {
	const wrapper = document.createElement('div')

	// Area title
	const separator = document.createElement('hr')
	wrapper.appendChild(separator)

	const title = document.createElement('h2')
	title.innerHTML = 'City Worker'
	wrapper.appendChild(title)

	// Sort button
	const button = document.createElement('button')
	button.innerHTML = 'Clean bikes'
	button.addEventListener('click', cleanBikes, false)
	wrapper.appendChild(button)
	return wrapper
}