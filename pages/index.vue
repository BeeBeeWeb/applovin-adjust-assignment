<template>
  <main>
    <div class="container mt-8 mx-auto px-4">
      <div class="rounded-xl p-8 bg-blue-100">
        <h1 class="font-bold mb-6">
          List of Products
        </h1>
        <SearchBox ref="searchBox" @search-change="onSearch" />
        <Categories v-if="categories" :categories="categories" @category-change="onCategoryChange" />
        <ActiveFilterInfo
          v-if="filteredProducts"
          :total-results="filteredProducts.length"
          :active-categories="activeCategories"
          :search-text="searchText"
        />
        <ProductCard :filtered-products="filteredProducts" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import Guidelines from '../components/Guidelines.vue'
import { Product } from '~/types/product.interface'
import { Category } from '~/types/category.interface'

@Component({
  name: 'PageIndex',
  components: {
    Guidelines
  }
})
export default class PageIndex extends Vue {
  categories: Category[] = [
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
  ];

  activeCategories: Category[] = this.categories
  products: Product[] = [];
  filteredProducts: Product[] = [];
  totalResults = this.filteredProducts.length
  searchText = '';

  async created () {
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      this.products = res.data
      this.filteredProducts = this.products
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  onCategoryChange (event: { value: any, checked: boolean }) {
    const { value, checked } = event
    if (checked) {
      this.activeCategories = [...this.activeCategories, ...this.categories.filter(cat => cat.value === value)]
      this.filteredProducts = [...this.filteredProducts, ...this.products.filter(product => product.category === value)]
    } else {
      this.activeCategories = this.activeCategories.filter((cat) => {
        return cat.value !== value
      })
      this.filteredProducts = [...this.filteredProducts.filter(product => product.category !== value)]
    }
  }

  onSearch (searchText: string) {
    this.searchText = searchText
    this.filteredProducts = this.products.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  head () {
    return {
      title: 'Webdev Assignment - E-commerce',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'E-commerce app'
        }
      ]
    }
  }
}
</script>
