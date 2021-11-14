<template>
  <div>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <li v-for="product in filteredProducts" :key="product.id">
        <div
          class="
            product-card
            bg-white
            rounded-md
            p-4
            flex flex-col
            items-center
            justify-center
            overflow-hidden
          "
        >
          <h2
            class="
              w-full
              font-bold
              mb-6
              pb-4
              border-b border-blue-200
              flex flex-row
              items-center
              justify-between
            "
          >
            <span>
              <span class="block">
                {{ product.title }}
              </span>
              <span class="text-xs text-blue-300">
                {{ product.category }}
              </span>
            </span>
            <span class="border rounded-full py-2 px-4 text-sm">
              {{ product.price }}
            </span>
          </h2>
          <p class="text-sm mb-4">
            {{ product.description }}
          </p>
          <img
            :src="product.image"
            :alt="product.title"
            class="object-contain h-48 w-full"
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Product } from '~/types/product.interface'

@Component({
  name: 'ProductCard'
})
export default class ProductCard extends Vue {
  @Prop({ default: () => [] }) filteredProducts: Product[] | undefined;
}
</script>

<style>
</style>
