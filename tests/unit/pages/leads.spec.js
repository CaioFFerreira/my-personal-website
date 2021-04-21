import { shallowMount } from '@vue/test-utils'
import Leads from '@/pages/leads.vue'
import EmptyList from '@/components/EmptyList'
import Card from '@/components/Card'
import FormFilters from '@/components/FormFilters'

describe('Index page', () => {
  const wrapper = shallowMount(Leads)
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verificar se os componentes dentro da page leads estão sendo renderizados com seus valores', () => {
    expect(wrapper.findAll(FormFilters)).toBeTruthy()
    expect(wrapper.findAll(EmptyList)).toHaveLength(0)
    expect(wrapper.findAll(Card)).toBeTruthy()
  })

  test('a imagem deve estar visivel', () => {
    const image = wrapper.find('.leads__image img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('As propriedades corretas estão presentes no estado do componente', () => {
    const received = Object.keys(wrapper.vm.$data)
    const expected = ['leads', 'namePerson', 'category', 'messageError']
    expect(received).toEqual(expected)
  })

  test('Filtro por categoria', () => {
    const received = wrapper.vm.filterCategoryBs()
    expect(received).toBeFalsy()
  })
})
