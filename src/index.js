import { Message } from './components/Message/Message.js'
import { Login } from './components/Login/Login.js'
import { Logout } from './components/Logout/Logout.js'
import { Register } from './components/Register/Register.js'

import { Map } from './components/Map/Map.js'
import { Countdown } from './components/Countdown/Countdown.js'
import { Stations } from './components/Stations/Stations.js'
import { CityWorker } from './components/CityWorker/CityWorker.js'
import { SysAdmin } from './components/SysAdmin/SysAdmin.js'

import { getItem, setItem, getSession } from './helpers/helpers.js'
import { initSavedMembers } from './../public/members.js'
import { initStations } from './../public/stations.js'


import './index.css'



/*
  Initiliaze an new array of Members
  or fetch existing data from localstorage
*/
getItem('members') ? getItem('members') : setItem('members', JSON.stringify(initSavedMembers))

/*
  Initiliaze an new array of Stations
  or fetch existing data from localstorage
*/
getItem('stations') ? getItem('stations') : setItem('stations', JSON.stringify(initStations))


/*
  Shows Login component if no session exists
  Shows Station component otherwise
  Shows additionnal components to super users
*/

const logoutButton = new Logout()
const loginForm = new Login()
const registerForm = new Register()
const sysAdmin = new SysAdmin()
const cityWorker = new CityWorker()
const bikeStations = new Stations()
const countdown = new Countdown()
const message = new Message()


document.querySelector('#message').appendChild(message)
document.getElementById('map').appendChild(Map())
if (getSession('session')) {
  document.querySelector('#logout').appendChild(logoutButton)
  document.querySelector('#stations').appendChild(bikeStations)
  document.getElementById('map').appendChild(Map())
  document.querySelector('#countdown').appendChild(countdown)
    if (JSON.parse(getSession('session')).mail === 'kdog@mail.com') {
      document.querySelector('#sysAdmin').appendChild(sysAdmin)
  } else if (JSON.parse(getSession('session')).mail === 'samya@mail.com') {
    document.querySelector('#cityWorker').appendChild(cityWorker)
  }
} else {
  document.querySelector('#login').appendChild(loginForm)
  document.querySelector('#register').appendChild(registerForm)
}
