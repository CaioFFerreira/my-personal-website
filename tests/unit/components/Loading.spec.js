import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading', () => {
  const wrapper = shallowMount(Loading)
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })
})
