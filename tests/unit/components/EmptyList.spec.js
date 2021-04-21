import { shallowMount } from '@vue/test-utils'
import EmptyList from '@/components/EmptyList.vue'

describe('EmptyList', () => {
  const wrapper = shallowMount(EmptyList, {
    mocks: { $t: () => 'msg error' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('o texto deve estar visivel', () => {
    const image = wrapper.find('.empty__text')
    expect(image.isVisible()).toBeTruthy()
  })
})
