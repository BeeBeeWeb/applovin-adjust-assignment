<template>
  <header class="border-b border-blue-500 p-4 my-0 mx-auto flex flex-col items-center">
    <div class="container flex items-center justify-between">
      <nuxt-link to="/" class="font-bold text-3xl p-3">
        MyFakeStore
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'AppHeader'
})
export default class AppHeader extends Vue {}
</script>

<style>

</style>
