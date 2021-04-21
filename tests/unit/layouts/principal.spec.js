import { shallowMount } from '@vue/test-utils'
import Principal from '@/layouts/principal.vue'

describe('Principal layout page', () => {
  const wrapper = shallowMount(Principal)
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })
})
