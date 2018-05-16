import { showStation, setItem } from './../../helpers/helpers.js'
import { markersPosition } from './../../../public/markers.js'

window.initMap = () => {
	//Ubisoft DeGaspé position
	const ubisoft = { lat: 45.527641, lng: -73.596386 }
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: ubisoft
	})

	const markers = []

	markersPosition.forEach(marker => {
		const m = new google.maps.Marker({
			position: marker.position,
			map,
			title: marker.name,
			label: ''
		}).addListener('click', () => {
			showStation(marker.id, marker.name)
		})
	})
}

export const Map = () => {
	const p = document.createElement('p')
	p.innerHTML = 'Loading Google Map'
	return p
}