import { shallowMount } from '@vue/test-utils'
import * as Modal from '@/components/Modal.vue'

describe('Modal', () => {
  const wrapper = shallowMount(Modal, {
    mocks: { $t: () => 'msg error' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se o modal está com o estado inicial de falso', () => {
    expect(wrapper.isVisible()).toBeFalsy()
  })
})
