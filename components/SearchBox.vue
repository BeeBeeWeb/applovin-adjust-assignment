<template>
  <input
    v-model="searchText"
    type="search"
    placeholder="Search products..."
    class="search-input border border-blue-200 bg-white mb-4 p-4 rounded-xl w-full"
    data-test="search-input"
    @input="onSearch"
  >
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'SearchBox'
})
export default class SearchBox extends Vue {
  // @Prop({ default: '' }) searchText: string | undefined = '';
  searchText = '';

  onSearch () {
    this.$emit('search-change', this.searchText)
  }
}
</script>
