import Leads from '@/domain/Leads/Leads'
import testCrudRequest from '@/tests/unit/helpers/testCrudRequest'

describe('Leads', () => {
  it('Should return a promisse on call integration methods', async () => {
    await testCrudRequest(Leads)
  })
})
