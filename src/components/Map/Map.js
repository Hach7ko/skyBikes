import { rentBike } from './../Bikes/Bikes.js'

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
			position: {
				lat: 45.5277132,
				lng: -73.5975606
			}
		},
		{
			name: 'Maguire / Henri-Julien',
			position: {
				lat: 45.5271944,
				lng: -73.5934383
			}
		},
		{
			name: 'Saint-Dominique / Saint-Viateur',
			position: {
				lat: 45.5266255,
				lng: -73.598367
			}
		}
	]

	markersPosition.forEach(marker => {
		new google.maps.Marker({
			position: marker.position,
			map
		}).addListener('click', () => {
			rentBike() 
		})
	})
}

export const Map = () => {
	const p = document.createElement('p')
	p.innerHTML = 'Loading Google Map'
	return p
}