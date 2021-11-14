<template>
  <main role="main">
    <AppHeader />
    <Nuxt />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AppHeader from '../components/AppHeader.vue'

@Component({
  name: 'LayoutsDefault',
  components: {
    AppHeader
  }
})
export default class LayoutsDefault extends Vue {}
</script>

<style>
html,
body {
  @apply m-0 p-0;
}
</style>
