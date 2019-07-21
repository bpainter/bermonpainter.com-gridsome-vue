<template>
  <div class="wrapper">
    <masthead />
    <navigation />
    <slot/>
  </div>
</template>

<script>
  import Masthead from '~/components/Masthead.vue'
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Masthead,
      Navigation
    }
  }
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
.wrapper {
  background-color: #ccc;
}
</style>
