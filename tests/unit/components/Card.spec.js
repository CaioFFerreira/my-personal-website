import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card', () => {
  const wrapper = shallowMount(Card, {
    mocks: { $t: () => 'msg error' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('A imagem deve estar visivel no componente', () => {
    const image = wrapper.find('.card__tag img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('A prop deve ser lead', () => {
    const received = Object.keys(wrapper.vm._props)
    const expected = ['lead']
    expect(received).toEqual(expected)
  })

  test('Quando a função OpenModal for ativada na linha 25 o valor do showModal deve ser atribuido com true', () => {
    wrapper.vm.openModal()
    const received = wrapper.vm.showModal
    expect(received).toBeTruthy()
  })

  test('Quando for clicado fora do modal a função closeModalOverlay vai ser ativada e showModal deve ser false', () => {
    wrapper.vm.closeModalOverlay({ target: '', currentTarget: '' })
    const received = wrapper.vm.showModal
    console.log(received)
    expect(received).toBeFalsy()
  })
})
