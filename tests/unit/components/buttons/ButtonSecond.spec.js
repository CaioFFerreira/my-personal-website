import { shallowMount } from '@vue/test-utils'
import ButtonSecond from '@/components/buttons/ButtonSecond.vue'

describe('ButtonSecond', () => {
  const wrapper = shallowMount(ButtonSecond)
  test('Verifica se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('A prop deve ser text', () => {
    const received = Object.keys(wrapper.vm._props)
    const expected = ['text']
    expect(received).toEqual(expected)
  })

  test('Verifica se o evento está sendo emitido quando a função é ativada na linha 18', () => {
    wrapper.vm.emitEvent()
    expect(wrapper.emitted('open-modal')).toBeTruthy()
  })
})
