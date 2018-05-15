window.initMap = () => {
	//Ubisoft DeGaspé position
	const ubisoft = { lat: 45.527641, lng: -73.596386 }
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: ubisoft
	})

	const markersPosition = [
		{
			name: 'de Gaspé / Saint-Viateur',
			id: 1,
			position: {
				lat: 45.5277132,
				lng: -73.5975606
			}
		},
		{
			name: 'Maguire / Henri-Julien',
			id: 2,
			position: {
				lat: 45.5271944,
				lng: -73.5934383
			}
		},
		{
			name: 'Saint-Dominique / Saint-Viateur',
			id: 3,
			position: {
				lat: 45.5266255,
				lng: -73.598367
			}
		}
	]

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

const CJSON = require('circular-json');
import { showStation, setItem, updateLabel } from './../../helpers/helpers.js'

export const Map = () => {
	const p = document.createElement('p')
	p.innerHTML = 'Loading Google Map'
	return p
}