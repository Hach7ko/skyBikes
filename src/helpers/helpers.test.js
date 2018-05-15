import { isValidMail } from './helpers'

test('mail to be valid', () => {
    expect(isValidMail('samya@mail.com')).toBe(true)
})

test('mail to be invalid', () => {
    expect(isValidMail('hello-world')).toBe(false)
})
