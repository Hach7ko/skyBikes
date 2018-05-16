import {
	isEmptyObject,
	isPrivilegedAccount,
	hasBike,
	getItem,
	getSession,
	reload,
	setItem,
	delSession,
	updateMessage
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

			//for the initialisation just display the first station
			if (i===0) {
				divStationView.appendChild(station)	
			} 
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
	 *  Return the bike to a station
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
			alert('You\'re not riding a bike.')
		}
	}

	/**
	 * Rent a bike 
	 * @param {*} e 
	 */
	rentBike(e) {
		e.preventDefault()
		if (!hasBike(this.session)) {

			// Grab the data
			const bikeId = e.target.dataset.bike
			const bikeColor = e.target.dataset.color
			const stationNo = e.target.dataset.station
			const slotNo = e.target.dataset.slot
			const stationName = e.target.dataset.name

			// Change to a slot
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
	 * Remove the bike from the dock
	 * @param {*} id 
	 */
	removeBikeFromStation(id) {
		this.bikeStations.some((station, i) => station.some((bike, j) => bike.id === id ? station[j] = {} : false))
		setItem('stations', JSON.stringify(this.bikeStations))
	}

	/**
	 * Automatically return the bike
	 * @param {*} bike 
	 */
	returnBike(bike) {
		delete bike.rentTime
		this.bikeStations.some((station, i) => station.some((b, j) => isEmptyObject(b) ? station[j] = bike : false))
		setItem('stations', JSON.stringify(this.bikeStations))
	}

	/**
	 * Ban the member if he doesnt return the bike
	 * @param {*} i 
	 * @param {*} session 
	 */
	banMember(i, session) {
		// Stop countdown, update UI
		clearInterval(i)
		alert('Uh oh! Remaining time is over!')

		// Return the bike
		this.returnBike(session.bike)

		// Detach bike from member
		delete session.bike
		this.updateMemberSession(session)

		// Update member session with `banned` key and "redirect" to login screen
		if (!isPrivilegedAccount(session.mail)) {
			session.isBanned = true
			this.updateMemberSession(session)
			delSession('session')
			reload()

		}
	}

	/**
	 * Update the current members
	 * @param {object} session 
	 */
	updateMemberSession(session) {
		//ze have to push in an array
		let a = []
		a.push(session)

		const updatedUsers = this.members.map(user => a.find(o => o.mail === user.mail) || user)
		setItem('members', JSON.stringify(updatedUsers))
	}

}

window.customElements.define('bike-stations', Stations)
