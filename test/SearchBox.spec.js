import { mount } from '@vue/test-utils'
import SearchBox from '../components/SearchBox.vue'

describe('SearchBox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchBox, {
      stubs: {
        NuxtLink: true
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is setting search text', async () => {
    await wrapper.find('[data-test="search-input"]').setValue('testing')
    expect(wrapper.vm.searchText).toBe('testing')
  })
})
