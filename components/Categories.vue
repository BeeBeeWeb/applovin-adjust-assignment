<template>
  <div class="flex mb-4">
    <ul>
      <li v-for="category in categories" :key="category.id" class="text-xs">
        <label>
          <input type="checkbox" checked :value="category.value" data-test="category-checkbox" @change="onCategoryChange">
          {{ category.value }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Category } from '~/types/category.interface'
@Component({
  name: 'Categories'
})
export default class Categories extends Vue {
@Prop() categories: Category[] | undefined;

onCategoryChange (event: Event) {
  const { value, checked } = (event.target as HTMLInputElement)
  this.$emit('category-change', { value, checked })
}
}
</script>
