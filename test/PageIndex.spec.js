import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import flushPromises from 'flush-promises'
import PageIndex from '../pages/index.vue'
import ProductCard from '../components/ProductCard.vue'
import ActiveFIlterInfo from '../components/ActiveFilterInfo.vue'
import SearchBox from '../components/SearchBox.vue'
import { Products } from './products.mock'

const mockProducts = Products

jest.mock('axios', () => ({
  // get: () => Promise.resolve({ data: mockProducts })
  get: jest.fn(() => Promise.resolve({ data: mockProducts }))
}))

describe('PageIndex', () => {
  let wrapper
  beforeEach(async () => {
    wrapper = await shallowMount(PageIndex, {
      stubs: {
        ProductCard,
        ActiveFIlterInfo,
        Categories: true,
        SearchBox
      },
      data () {
        return {
          categories: [
            {
              id: 0,
              value: 'electronics'
            },
            {
              id: 1,
              value: 'jewelery'
            },
            {
              id: 2,
              value: 'men\'s clothing'
            },
            {
              id: 3,
              value: 'women\'s clothing'
            }
          ],
          activeCategories: [
            {
              id: 0,
              value: 'electronics'
            },
            {
              id: 1,
              value: 'jewelery'
            },
            {
              id: 2,
              value: 'men\'s clothing'
            },
            {
              id: 3,
              value: 'women\'s clothing'
            }
          ],
          products: [],
          filteredProducts: [],
          searchText: '',
          totalResults: 0
        }
      }
    })

    await wrapper.setData({
      categories: [
        {
          id: 0,
          value: 'electronics'
        },
        {
          id: 1,
          value: 'jewelery'
        },
        {
          id: 2,
          value: 'men\'s clothing'
        },
        {
          id: 3,
          value: 'women\'s clothing'
        }
      ]
    })
  })

  afterEach(async () => {
    await flushPromises()
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is calling API', () => {
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products')
  })

  test('is displaying all product cards', async () => {
    const posts = wrapper.findAll('li')
    await flushPromises()
    expect(posts).toHaveLength(20)
  })

  test('is searching for products', async () => {
    await flushPromises()
    wrapper.vm.onSearch('casu')
    await flushPromises()
    const posts = wrapper.findAll('li')
    expect(posts).toHaveLength(3)
  })

  test('is filtering unchecked categories', async () => {
    await flushPromises()
    wrapper.vm.onCategoryChange({ value: 'electronics', checked: false })
    await flushPromises()
    const posts = wrapper.findAll('li')
    expect(posts).toHaveLength(14)
  })

  test('is filtering checked categories', async () => {
    await flushPromises()
    wrapper.vm.onCategoryChange({ value: 'electronics', checked: false })
    await flushPromises()
    // const posts = wrapper.findAll('li')
    expect(wrapper.findAll('li')).toHaveLength(14)
    wrapper.vm.onCategoryChange({ value: 'electronics', checked: true })
    await flushPromises()
    expect(wrapper.findAll('li')).toHaveLength(20)
  })

  test('is showing correct active search criteria text', async () => {
    await flushPromises()
    wrapper.vm.onSearch('casu')
    await flushPromises()
    const text = wrapper.findAll('p')
    const mockText = "Showing 3 in categories electronics, jewelery, men's clothing, women's clothing, containing \"casu\""
    expect(text.at(0).text().replace(/\r?\n?/g, '').trim().replace(/\s\s+/g, ' ')).toBe(mockText)
    // expect(text.at(0).html()).toBe(mockText)
  })
})
