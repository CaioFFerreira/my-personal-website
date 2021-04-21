import { shallowMount } from '@vue/test-utils'
import FormFilters from '@/components/FormFilters.vue'

describe('FormFilters', () => {
  const wrapper = shallowMount(FormFilters, {
    mocks: { $t: () => 'msg error' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se o dropdown está com o estado inicial de falso', () => {
    const dropDown = wrapper.find('.filter__category')
    expect(dropDown.exists()).toBeFalsy()
  })

  test('Verifica se o evento está sendo emitido', () => {
    wrapper.vm.emitvalue()
    expect(wrapper.emitted('input-category')).toBeTruthy()
  })
})
