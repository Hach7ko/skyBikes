import {
	isEmptyObject,
	isPrivilegedAccount,
	hasBike,
	getItem,
	getSession,
	reload,
	setItem,
	delSession,
	updateMessage,
	updateNumberOfBike
} from './../../helpers/helpers.js'
import widgetSD from './Stations.html'

import './Stations.css'

export class Stations extends HTMLElement {
	constructor() {
		super()

		const shadow = this.attachShadow({ mode: 'open' })
		
		this.members = JSON.parse(getItem('members'))
		this.bikeStations = JSON.parse(getItem('stations'))
		this.session = JSON.parse(getSession('session'))

		shadow.innerHTML = widgetSD
	}

	connectedCallback() {
		const bikeStation = document.createElement('div')
		bikeStation.setAttribute('class', 'stations')

		const divStationView = document.createElement('div')
		const divStationTitle = document.createElement('h2')
		divStationTitle.innerHTML = 'Bike Stations'
		divStationView.appendChild(divStationTitle)

		const mess = `<i>Salut ${this.session.firstName} ${this.session.lastName}! </br>
		 You can rent a bike by clicking on it. </br>
		 You can also switch station by clicking on a marker.</i>`
		updateMessage(mess)

		this.bikeStations.map((e, i) => {
			// Single station element
			const station = document.createElement('div')
			station.setAttribute('class', 'station')
			station.id = `station-${i+1}`

			const label = document.createElement('h3')
			label.innerHTML = `de Gaspé / Saint-Viateur`
			label.id = `label-${i+1}`
			station.appendChild(label)

			e.map((f, j) => {
				// Single bike element
				const bike = document.createElement('a')
				bike.href = '#'
				bike.className = f.id ? 'bike slot' : 'docks slot'
				bike.dataset.bike = f.id || ''
				bike.dataset.station = i
				bike.dataset.slot = j
				bike.dataset.color = f.color || ''
				bike.style.backgroundColor = f.color || '#f0f0f0'
				f.id ? bike.addEventListener('click', (e) => this.rentBike(e), false) : bike.addEventListener('click',(e) => this.manualBikeReturn(e), false)
				station.appendChild(bike)
			})

			if(i===0) divStationView.appendChild(station)
			else {
				station.style.display = 'none'
				divStationView.appendChild(station)
			}
		})

		bikeStation.appendChild(divStationView)

		this.appendChild(bikeStation)
	}

	/**
	 * Ban member if countdown expires, otherwise, juste update the clock in the UI
	 */
	initCountdown() {
		let remainingTime = 1600

		const i = setInterval(() => {
			if (remainingTime === 0) {
				this.banMember(i, this.session)
			} else {
				document.getElementById('countdown').innerHTML = `You have ${remainingTime / 200} hours left.`
				remainingTime--
			}
		}, 10)
	}

	/**
	 * 
	 * @param {*} e 
	 */
	manualBikeReturn(e) {
		e.preventDefault()
		if (hasBike(this.session)) {
			// Get data attributes from the target (position in array) and update the sations object
			const i = e.target.dataset.station
			const j = e.target.dataset.slot
			this.bikeStations[i][j] = this.session.bike
			delete this.bikeStations[i][j].rentTime

			// Detach bike from member
			delete this.session.bike
			this.updateMemberSession(this.session)

			setItem('stations', JSON.stringify(this.bikeStations))
			reload()

		} else {
			alert('You are not riding a bike.')
		}
	}

	/**
	 * 
	 * @param {*} e 
	 */
	rentBike(e) {
		e.preventDefault()
		if (!hasBike(this.session)) {

			// Get data attributes from target
			const bikeId = e.target.dataset.bike
			const bikeColor = e.target.dataset.color
			const stationNo = e.target.dataset.station
			const slotNo = e.target.dataset.slot
			const stationName = e.target.dataset.name

			updateNumberOfBike(stationNo, stationName, 'rent')

			// Udpate UI of the slot (becomes parking slot)
			e.target.className = 'slot docks'
			e.target.style.backgroundColor = '#f0f0f0'
			e.target.dataset.bike = ''
			e.target.dataset.station = stationNo
			e.target.dataset.slot = slotNo
			e.target.dataset.color = ''
			e.target.removeEventListener('click', (e) => this.rentBike(e))
			e.target.addEventListener('click', (e) => this.manualBikeReturn(e), false)

			// Update data
			// Add bike object to session
			this.session.bike = {
				'id': bikeId,
				'color': bikeColor,
				'rentTime': new Date().getTime()
			}

			this.updateMemberSession(this.session)

			// Remove bike from the local storage
			this.removeBikeFromStation(bikeId)

			// Start countdown
			this.initCountdown()

		} else {
			alert('You are already riding a bike!')
		}
	}

	/**
	 * 
	 * @param {*} id 
	 */
	removeBikeFromStation(id) {
		this.bikeStations.some((station, i) => station.some((bike, j) => bike.id === id ? station[j] = {} : false))
		setItem('stations', JSON.stringify(this.bikeStations))
	}

	/**
	 * Updates stations object in localStorage and reload page
	 * @param {*} bike 
	 */
	automaticBikeReturn(bike) {
		delete bike.rentTime
		this.bikeStations.some((station, i) => station.some((b, j) => isEmptyObject(b) ? station[j] = bike : false))
		setItem('stations', JSON.stringify(this.bikeStations))
	}

	/**
	 * Create a `banned` key and set it to true before update the member session
	 * @param {*} session 
	 */
	markAsBanned(session) {
		session.isBanned = true
		this.updateMemberSession(session)
	}

	/**
	 * 
	 * @param {*} i 
	 * @param {*} session 
	 */
	banMember(i, session) {
		// Stop countdown, update UI
		clearInterval(i)
		alert('Your remaining time is over.')

		// Return the bike
		this.automaticBikeReturn(session.bike)

		// Detach bike from member
		delete session.bike
		this.updateMemberSession(session)

		// Update member session with `banned` key and "redirect" to login screen
		if (!isPrivilegedAccount(session.mail)) {
			this.markAsBanned(session)
			delSession('session')
			reload()

		}
	}

	/**
	 * TODO: Update to object.assign
	 * @param {object} session 
	 */
	updateMemberSession(session) {
		let fakeArray = []
		fakeArray.push(session)
		const updatedUsers = this.members.map(user => fakeArray.find(o => o.mail === user.mail) || user)

		setItem('members', JSON.stringify(updatedUsers))
	}

}

window.customElements.define('bike-stations', Stations)
