import { shallowMount } from '@vue/test-utils'
import ErrorComponent from '@/layouts/error.vue'

describe('error page 404', () => {
  const wrapper = shallowMount(ErrorComponent, {
    mocks: { $t: () => '' },
  })
  test('Verifica se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('a imagem deve estar visivel', () => {
    const image = wrapper.find('.error__image img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('o titulo deve estar visivel', () => {
    const title = wrapper.find('.error__title')
    expect(title.isVisible()).toBeTruthy()
  })
})
