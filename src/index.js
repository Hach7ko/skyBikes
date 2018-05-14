import { Login } from './components/Login/Login.js'
import { Logout } from './components/Logout/Logout.js'
import { Map } from './components/Map/Map.js'
import { Bikes } from './components/Bikes/Bikes.js'
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
if (getSession('session')) {
  document.getElementById('logout').appendChild(Logout())
  document.getElementById('stations').appendChild(Stations())
  document.getElementById('map').appendChild(Map())
  document.getElementById('countdown').appendChild(Countdown())
    if (JSON.parse(getSession('session')).mail === 'kdog@mail.com') {
    document.getElementById('sysAdmin').appendChild(SysAdmin())
  } else if (JSON.parse(getSession('session')).mail === 'samya@mail.com') {
    document.getElementById('cityWorker').appendChild(CityWorker())
  }
} else {
  document.getElementById('login').appendChild(Login())
}

// document.getElementById('login').appendChild(Login())
// document.getElementById('logout').appendChild(Logout())
// document.getElementById('stations').appendChild(Stations())
// document.getElementById('map').appendChild(Map())
// document.getElementById('countdown').appendChild(Countdown())
// document.getElementById('cityWorker').appendChild(CityWorker())
// document.getElementById('sysAdmin').appendChild(SysAdmin())

// Bikes()