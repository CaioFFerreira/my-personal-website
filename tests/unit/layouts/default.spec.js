import { shallowMount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

describe('Default page', () => {
  const wrapper = shallowMount(Default)
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })
})
