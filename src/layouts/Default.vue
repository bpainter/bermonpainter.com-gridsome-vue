<template>
  <div class="wrapper">
    <masthead />
    <navigation />

    <main class="content">
      <div class="content-wrapper">
        <slot/>
      </div>
    </main>
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
  display: flex;
  flex-direction: row;
  height: 100%;
}
.content {
  align-items: flex-start;
  background-color: #1a202b;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  padding: 6% 3% 3%;
  /* width: 62.76%; */
}
</style>
