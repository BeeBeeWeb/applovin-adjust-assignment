import { mount } from '@vue/test-utils'
import ProductCard from '../components/ProductCard.vue'

describe('ProductCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ProductCard, {
      stubs: {
        NuxtLink: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
