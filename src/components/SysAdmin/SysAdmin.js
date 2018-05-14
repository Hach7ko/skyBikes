// import './SysAdmin.css'
// import { getItem, reload } from './../../helpers/helpers.js'

// /*
//   Component logic
// */

// const createFakeTableCell = (className, text, textColor) => {
//   const cell = document.createElement('div')
//   cell.className = className
//   cell.style.color = textColor || ''
//   cell.innerHTML = text
//   return cell
// }

// /*
//   Component UI
// */

// export const SysAdmin = () => {
//   // Load members from localStorage
//   const members = JSON.parse(getItem('members'))

//   const wrapper = document.createElement('div')

//   // Area title
//   const separator = document.createElement('hr')
//   wrapper.appendChild(separator)

//   const title = document.createElement('h2')
//   title.innerHTML = 'Admin area'
//   wrapper.appendChild(title)

//   // Columns titles
//   const fakeTableTitles = document.createElement('div')
//   fakeTableTitles.className = 'titles'
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Name'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Phone'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Email'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Status'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Bike ID'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Bike color'))
//   fakeTableTitles.appendChild(createFakeTableCell('column-title', 'Rent time'))
//   wrapper.appendChild(fakeTableTitles)

//   members.map((m, i) => {
//     // Single cell
//     // User info
//     const member = document.createElement('div')
//     member.className = 'member'
//     m.name = `${m.firstName} ${m.lastName}`
//     member.appendChild(createFakeTableCell('member-name', m.name))
//     member.appendChild(createFakeTableCell('member-phone', m.phone))
//     member.appendChild(createFakeTableCell('member-email', m.mail))
//     m.banned ? member.appendChild(createFakeTableCell('member-status', 'banned')) : member.appendChild(createFakeTableCell('member-status no-data', '&#8203;'))

//     // Display bike info or empty cells
//     if (m.bike) {
//       member.appendChild(createFakeTableCell('bike-id', m.bike.id))
//       member.appendChild(createFakeTableCell('bike-color', m.bike.color, m.bike.color))
//       member.appendChild(createFakeTableCell('bike-timer', m.bike.rentTime))
//     } else {
//       member.appendChild(createFakeTableCell('bike-id no-data', '&#8203;'))
//       member.appendChild(createFakeTableCell('bike-color no-data', '&#8203;'))
//       member.appendChild(createFakeTableCell('bike-timer no-data', '&#8203;'))
//     }
//     wrapper.appendChild(member)
//   })

//   return wrapper
// }


import { getItem, reload, createFakeTableCell } from './../../helpers/helpers.js'
import widgetSD from './SysAdmin.html'

import './SysAdmin.css'

export class SysAdmin extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = widgetSD
  }

  connectedCallback() {
    // Load members from localStorage
    const members = JSON.parse(getItem('members'))

    // Area title
    const separator = document.createElement('hr')
    this.appendChild(separator)

    const title = document.createElement('h2')
    title.innerHTML = 'Admin area'
    this.appendChild(title)

    // Columns titles
    const fakeTableTitles = document.createElement('div')
    fakeTableTitles.className = 'titles'
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Name'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Phone'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Email'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Status'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Bike ID'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Bike color'))
    fakeTableTitles.appendChild(this.createFakeTableCell('column-title', 'Rent time'))
    this.appendChild(fakeTableTitles)

    members.map((m, i) => {
      // Single cell
      // User info
      const member = document.createElement('div')
      member.className = 'member'
      m.name = `${m.firstName} ${m.lastName}`
      member.appendChild(this.createFakeTableCell('member-name', m.name))
      member.appendChild(this.createFakeTableCell('member-phone', m.phone))
      member.appendChild(this.createFakeTableCell('member-email', m.mail))
      m.banned ? member.appendChild(this.createFakeTableCell('member-status', 'banned')) : member.appendChild(this.createFakeTableCell('member-status no-data', '&#8203;'))

      // Display bike info or empty cells
      if (m.bike) {
        member.appendChild(this.createFakeTableCell('bike-id', m.bike.id))
        member.appendChild(this.createFakeTableCell('bike-color', m.bike.color, m.bike.color))
        member.appendChild(this.createFakeTableCell('bike-timer', m.bike.rentTime))
      } else {
        member.appendChild(this.createFakeTableCell('bike-id no-data', '&#8203;'))
        member.appendChild(this.createFakeTableCell('bike-color no-data', '&#8203;'))
        member.appendChild(this.createFakeTableCell('bike-timer no-data', '&#8203;'))
      }
      this.appendChild(member)
    })
  }

  createFakeTableCell (className, text, textColor) {
    const cell = document.createElement('div')
    cell.className = className
    cell.style.color = textColor || ''
    cell.innerHTML = text
    return cell
  }
}

window.customElements.define('sys-admin', SysAdmin)
