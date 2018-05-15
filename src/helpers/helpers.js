/**
 * Helpers method used around the project
 */

/**
 * @param  {string} type - type of the input
 * @param  {string} value - value of the input
 * @param  {string} name - name givent to the input
 * @param  {string} placeholder - placeholder
 */
export const inputCreator = (type, value, name, placeholder) => {
	const input = document.createElement('input')
	input.type = type
	input.value = value
	input.name = name
	input.placeholder = placeholder
	return input
}

/**
 * 
 * @param {string} s - string to sanitize 
 */
export const sanitizeField = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

/**
 * 
 * @param {string} e - string that need to be verified 
 */
export const isValidMail = (e) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)

/**
 * 
 * @param {string} p - string that need to be verified 
 */
export const isValidPhone = (p) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(p)

/**
 * Check if email is in the members "db"
 * @param {string} email 
 * @param {object} members 
 */
export const isMember = (email, members) => members.find((m) => m.mail === email)

/**
 * Check if email is in the members "db" and  banned
 * @param {string} email 
 * @param {object} members 
 */
export const isBanned = (email, members) => {
	const member = members.find((m) => m.mail === email)
	return member.isBanned === true
}

/**
*  Mostly data manipulation
*  local or session storage
*/

export const getItem = (i) => window.localStorage.getItem(i) || false

export const setItem = (i, v) => window.localStorage.setItem(i, v)

export const delItem = (i) => window.localStorage.removeItem(i)

export const getSession = (s) => window.sessionStorage.getItem(s)

export const setSession = (s, v) => window.sessionStorage.setItem(s, v)

export const delSession = (s) => window.sessionStorage.removeItem(s)

/**
* Create temporary session and reload page
* @param {string} member 
*/
export const startSession = member => {
	setSession('session', JSON.stringify(member))
	window.location.reload()
}

export const reload = () => window.location.reload()

export const hasBike = (session) => session.hasOwnProperty('bike') === true


export const isEmptyObject = (o) => (Object.keys(o).length === 0 && o.constructor === Object) === true


export const isPrivilegedAccount = (session) => (session === 'samya@mail.com' || session === 'kdog@mail.com') === true

export const updateMessage = (newMessage) => document.querySelector('#generalMessage').innerHTML = newMessage

export const showStation = (id, name) => {
	for (let i = 1; i < 4; i++) {
		if (i === id) {
			document.querySelector(`#station-${i}`).style.display = 'block'
			document.querySelector(`#label-${i}`).innerHTML = `Bike Station - ${name}`
		} 
		else {
			document.querySelector(`#station-${i}`).style.display = 'none'			
		} 
	} 
}