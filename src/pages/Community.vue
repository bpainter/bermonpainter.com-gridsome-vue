<template>
  <Layout>
    <h1>Community</h1>

    <section class="community-involvement">
      <ul class="list">
        <li class="list-item">
          <a href="https://ixdacharlotte.org/" class="list-item-link">
            <div class="list-item-details">
              <h3>IxDA Charlotte</h3>
              <p>I founded Charlotte UX in 2010. The meetup group is intended to bring to local Charlotte UX community together. The group recently joined the Global IxDA organization and a new leadership board was formed.</p>
            </div>
            <p class="list-item-image"><g-image src="~/assets/images/ixda-logo.png" alt="IxDA Charlotte Logo" /></p>
          </a>
          
        </li>
        <li class="list-item">
          <a href="https://www.meetup.com/Charlotte-Front-End-Developers/" class="list-item-link">
            <div class="list-item-details">
              <h3>Charlotte Front-End Developers</h3>
              <p>I founded Charlotte Front-End Developers in 2011. The meetup meets a few times a month in various parts of Charlotte. </p>
            </div>
            <p class="list-item-image"><g-image src="~/assets/images/charlotte-fed-logo.png" alt="IxDA Charlotte Logo" /></p>
          </a>
        </li>
        <li class="list-item">
          <a href="FusionConf.io" class="list-item-link">
            <div class="list-item-details">
              <h3>FusionConf</h3>
              <p>FusionConf is a quarterly mini-conference. Each conference focuses on a different topic and the event runs from 1-5pm. The event takes a rapid-fire approach to content. </p>
            </div>
            <p class="list-item-image"><g-image src="~/assets/images/fusion-conf-logo.png" alt="IxDA Charlotte Logo" /></p>
          </a>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Community'
  }
}
</script>

<style lang="scss">
.list-item-image {
  img {
    display: block;
    margin-top: -20%;
    max-width: 176px;
    width: 100%;
  } 
}
.list-item:last-child {
  img {
    margin-top: -10%;
  }
}
</style>
