import axios from 'axios'

jest.mock('axios')

describe('axios.js - HttpService', () => {
  it('Verify axios instance', () => {
    expect(axios.create).toBeCalledTimes(0)
  })
})
