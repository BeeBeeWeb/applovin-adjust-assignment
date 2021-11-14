<template>
  <p class="mb-4 text-blue-500 text-xs">
    <span>
      Showing
      <strong>{{ totalResults }}</strong> in categories
    </span>
    <span v-for="category in activeCategories" :key="category.id">
      <strong>{{ category.value }}, </strong>
    </span>
    <span v-if="searchText">
      containing
      <strong>"{{ searchText }}"</strong>
    </span>
  </p>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Category } from '~/types/category.interface'

@Component({
  name: 'ProductCard'
})
export default class ActiveFilterInfo extends Vue {
  @Prop({ default: 0 }) totalResults: number | undefined;
  @Prop() activeCategories: Category[] | undefined;
  @Prop({ default: 0 }) searchText: number | undefined;
}
</script>
