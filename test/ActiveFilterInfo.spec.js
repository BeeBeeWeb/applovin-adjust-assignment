import { mount } from '@vue/test-utils'
import ActiveFilterInfo from '../components/ActiveFilterInfo.vue'

describe('ActiveFilterInfo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ActiveFilterInfo, {
      stubs: {
        NuxtLink: true
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
