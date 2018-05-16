import { 
	isValidMail,
	isValidPhone,
	isMember,
	isBanned
 } from './helpers'

const members = [
	{
		'mail': 'samya@mail.com',
		'firstName': 'Samya',
		'lastName': 'Khemri',
		'phone': '5147124991',
		'hasBike': false
	},
	{
		'mail': 'kdog@mail.com',
		'firstName': 'Kevin',
		'lastName': 'Massicotte',
		'phone': '5141234567',
		'hasBike': false
	},
	{
		'mail': 'ban@mail.com',
		'firstName': 'Dark',
		'lastName': 'Vador',
		'phone': '5147894561',
		'hasBike': false,
		'isBanned': true
	}
]

test('mail to be valid', () => {
	expect(isValidMail('samya@mail.com')).toBe(true)
})

test('mail to be invalid', () => {
	expect(isValidMail('hello-world')).toBe(false)
})

test('phone to be valid', () => {
	expect(isValidPhone('5127124991')).toBe(true)
})

test('phone to be invalid', () => {
	expect(isValidPhone('hello-world')).toBe(false)
})

test('to be a member', () => {
	const expected = {
		'mail': 'samya@mail.com',
		'firstName': 'Samya',
		'lastName': 'Khemri',
		'phone': '5147124991',
		'hasBike': false
	}
	expect(isMember('samya@mail.com', members)).toEqual(expected)
})

test('to not be a member', () => {
	expect(isMember('test@mail.com', members)).toBe(undefined)
})

test('to not be banned', () => {
	const expected = {
		'mail': 'samya@mail.com',
		'firstName': 'Samya',
		'lastName': 'Khemri',
		'phone': '5147124991',
		'hasBike': false
	}
	expect(isMember('samya@mail.com', members)).toEqual(expected)
})

test('to be banned', () => {
	const expected = {
		'mail': 'ban@mail.com',
		'firstName': 'Dark',
		'lastName': 'Vador',
		'phone': '5147894561',
		'hasBike': false,
		'isBanned': true
	}

	expect(isMember('ban@mail.com', members)).toEqual(expected)
})
