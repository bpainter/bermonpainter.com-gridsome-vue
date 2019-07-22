<template>
  <nav class="navigation">
      <ul class="navigation-primary">
          <li class="navigation-link"><g-link to="/" exact>Home</g-link></li>
          <li class="navigation-link"><g-link to="/about">About</g-link></li>
          <li class="navigation-link"><g-link to="/speaking">Speaking</g-link></li>
          <li class="navigation-link"><g-link to="/community">Community</g-link></li>
          <!-- <li class="navigation-link"><g-link to="/portfolio">Portfolio</g-link></li> -->
          <li class="navigation-link"><g-link to="/thoughts">Thoughts</g-link></li>
          <li class="navigation-link"><g-link to="/contact">Contact</g-link></li>
      </ul>

      <ul class="navigation-secondary">
          <li class="navigation-link"><g-link to="/styleguide">Styleguide</g-link></li>
          <li class="navigation-link"><a href"http://comm310.bermonpainter.com/practice/w5/w5d1.html">Comm 310</a></li>
          <li class="navigation-link"><a href="https://officehours.io/people/bermonpainter">Office Hours <small>Every Friday 7am-9am EST</small></a></li>
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
.navigation {
    align-items: flex-start;
    justify-content: flex-end;
    background-color: #930050;
    /* flex: 1 1 235px; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 205px;
    padding: 3% 0;
    width: 12.239%;
}
.navigation a {
    color: #fff;
    display: block;
    padding: 8px 20px;
    text-decoration: none;
}
.navigation a:hover,
.navigation a:focus {
    background-color: #d80065;
}
.navigation a.active {
    background-color: #1a202b;
}
.navigation a.active:hover,
.navigation a.active:focus {
    background-color: #242a3a;
}
.navigation-primary,
.navigation-secondary {
    list-style: none;
    padding-left: 0;
    width: 100%;
}
.navigation-secondary li:last-child small {
    display: block;
    font-size: .7em;
    font-style: italic;
    opacity: .6;
}

</style>