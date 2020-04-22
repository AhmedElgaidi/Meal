<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'

export default {
  name: 'App',
  components: {
    Navbar,
    Index
  }
}
</script>

<style>

</style>