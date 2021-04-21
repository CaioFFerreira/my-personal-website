import { shallowMount } from '@vue/test-utils'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'

describe('ButtonPrimary', () => {
  const wrapper = shallowMount(ButtonPrimary)
  test('Verifica se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('As props devem ser text e to', () => {
    const received = Object.keys(wrapper.vm._props)
    const expected = ['text', 'to']
    expect(received).toEqual(expected)
  })
})
