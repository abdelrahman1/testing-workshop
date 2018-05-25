import {isPasswordAllowed, userToJSON} from '../auth'

describe('isPasswordAllowed', () => {
  const allowedPasswords = ['s5a68r2s6q3']
  const disallowedPasswords = ['12345678', '', 'asasasasas']
  allowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  disallowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('fffffffffff')).toBe(false)
  expect(isPasswordAllowed('88888888888')).toBe(false)
  expect(isPasswordAllowed('s1d2f3f6g9t')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    name: 'sarah',
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
