<template>
  <header class="masthead">
    <div class="logo"></div>
    <ul class="social-links">
      <li class="social-links-icon"><a href="https://twitter.com/bermonpainter" class="social-links-icon-twitter">Twitter</a></li>
      <li class="social-links-icon"><a href="https://www.linkedin.com/in/bermonpainter/" class="social-links-icon-linkedin">LinkedIn</a></li>
      <li class="social-links-icon"><a href="https://dribbble.com/bermonpainter" class="social-links-icon-dribbble">Dribbble</a></li>
      <li class="social-links-icon"><a href="https://github.com/bpainter" class="social-links-icon-github">Github</a></li>
    </ul>

    <p role="contentinfo">&copy; 2019 Bermon Painter</p>
  </header>
</template>

<script>
export default {
  name: 'Masthead',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.masthead {
  align-items: flex-start;
  justify-content: flex-end;
  background-color: #470040;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 3% 3%;
  width: 25%;
}
.masthead .logo {
  background-color: #1adfcb;
  border-radius: 60px 20px 60px 20px; 
  height: 250px;
  margin-bottom: 100px;
  width: 100%;
}
.social-links {
  display: flex;
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0;
}
.social-links-icon {
  background-color: #930050;
  margin-right: 3%;
}

[role=contentinfo] {
  color: #ffffff;
  font-size: .8em;
}
</style>