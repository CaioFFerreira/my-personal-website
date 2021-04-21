import CrudRequest from '@/domain/CrudRequest.js'
import http from '@/services/axios'

jest.mock('@/services/axios', () => ({
  get: jest.fn(),
}))

beforeEach(() => {
  http.get = null
})

describe('CrudRequest.js', () => {
  // eslint-disable-next-line require-await
  it('Deve lançar um erro se baseUrl não estiver definido', async () => {
    http.get = jest.fn().mockResolvedValue({ data: [{ id: 1 }] })
    try {
      CrudRequest.get()
      expect(true, 'Deveria lançar a exception').toBeFalsy()
    } catch (error) {
      expect(error.message).toBe('Method baseUrl not implemented')
    }
  })
})
