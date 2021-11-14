import { mount } from '@vue/test-utils'
import Categories from '../components/Categories.vue'

describe('Categories', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Categories, {
      propsData: {
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
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is toggling checkbox and category change event raised', async () => {
    const checkInput = await wrapper.find('input')
    await checkInput.setChecked()

    expect(checkInput.element.checked).toBeTruthy()
    expect(wrapper.find('[data-test="category-checkbox"]').element.value).toBe('electronics')
    checkInput.trigger('change')
    expect(wrapper.emitted()['category-change']).toBeTruthy()
  })
})
