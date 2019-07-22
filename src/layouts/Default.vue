<template>
  <div class="wrapper">
    <masthead />
    <navigation />

    <transition name="fade" appear>
      <main class="content">
        <div class="content-wrapper">
          <slot/>
        </div>
      </main>
    </transition>
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
@font-face {
  font-family: 'Fanwood';
  src: url('../assets/fonts/fanwood.woff2') format('woff2'),
        url('../assets/fonts/fanwood.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Fanwood';
  src: url('../assets/fonts/fanwood_italic.woff2') format('woff2'),
        url('../assets/fonts/fanwood_italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
}
.fade-enter-active {
  transition: opacity .35s;
}
.fade-enter {
  opacity: 0;
}
.wrapper {
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
  /* width: 62.76%; */
}
.content-wrapper {
  height: 100%;
  overflow-y: auto;
  padding: 30% 18% 3%;
  width: 100%;
}
</style>
