<template>
  <nav class="navigation">
      <ul class="navigation-primary">
          <li class="navigation-link"><g-link to="/">Home</g-link></li>
          <li class="navigation-link"><g-link to="/speaking">Speaking</g-link></li>
          <li class="navigation-link"><g-link to="/community">Community</g-link></li>
          <li class="navigation-link"><g-link to="/portfolio">Portfolio</g-link></li>
          <li class="navigation-link"><g-link to="/thoughts">Thoughts</g-link></li>
          <li class="navigation-link"><g-link to="/contact">Contact</g-link></li>
      </ul>

      <ul class="navigation-secondary">
          <li class="navigation-link"><g-link to="/styleguide">Styleguide</g-link></li>
          <li class="navigation-link"><g-link to="/comm310">Comm 310</g-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>