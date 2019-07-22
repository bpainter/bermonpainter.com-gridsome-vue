<template>
  <Layout>
    <h1>Speaking</h1>

    <section class="upcoming-events">
      <h2>Upcoming Events</h2>

      <ul class="list">
        <li class="list-item">
          <a href="https://www.ux-india.org/uxindia2019/speakers/bermon-painter/" class="list-item-link">
            <div class="list-item-details">
              <h3>Successfully Hire, Mentor, Retain, and Lead Design Teams</h3>
              <h4>UX India</h4>
              <p>Hyderabad, India</p>
            </div>
            <p class="list-item-date">September 10, 2019</p>
          </a>
        </li>
        <li class="list-item">
          <a href="https://fitc.ca/presentation/workshop-design-thinking-for-developers-ideas-to-implementation/" class="list-item-link">
            <div class="list-item-details">
              <h3>Design Thinking for Developers: Ideas to Implementation</h3>
              <h4>Web Unleashed</h4>
              <p>Toronto, CA</p>
            </div>
            <p class="list-item-date">September 12, 2019</p>
          </a>
        </li>
        <li class="list-item">
          <a href="https://fitc.ca/presentation/crafting-a-ux-strategy/" class="list-item-link">
            <div class="list-item-details">
              <h3>Crafting a UX Strategy</h3>
              <h4>Web Unleashed</h4>
              <p>Crafting a UX Strategy</p>
            </div>
            <p class="list-item-date">September 12, 2019</p>
          </a>
        </li>
        <li class="list-item">
          <a href="https://fusionconf.io" class="list-item-link">
            <div class="list-item-details">
              <h3>FusionConf: Front-End Edition</h3>
              <h4>Event Host</h4>
              <p>Charlotte, NC</p>
            </div>
            <p class="list-item-date">September 21, 2019</p>
          </a>
        </li>
        <li class="list-item">
          <a href="#" class="list-item-link">
            <div class="list-item-details">
              <h3>Crafting a UX Strategy</h3>
              <h4>All Things Open</h4>
              <p>Raleigh, NC</p>
            </div>
            <p class="list-item-date">October 15, 2019</p>
          </a>
        </li>
        <li class="list-item">
          <a href="#" class="list-item-link">
            <div class="list-item-details">
              <h3>FusionConf: Community Edition</h3>
              <h4>Event Host</h4>
              <p>Charlotte, NC</p>
            </div>
            <p class="list-item-date">December 7, 2019</p>
          </a>
        </li>
      </ul>
    </section>
    
    <section class="past-events">
      <h2>Past Events</h2>
      <ul class="list-group">
        <li clas="list-group-item">
          <p class="list-group-item-year">2019</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="list-item-link">
                <div class="list-item-details">
                  <h3>Design Thinking: Ideas to Implementation</h3>
                  <h4>CodeMotion</h4>
                  <p>Rome, Italy</p>
                </div>
                <p class="list-item-date">July 11, 2019</p>
              </a>
            </li>
            <li class="list-item">
              <a href="http://frontenddesignconference.com/" class="list-item-link">
                <div class="list-item-details">
                  <h3>Workshop: Design Thinking – Innovation to Implementation</h3>
                  <h4>Front-End Design Conference</h4>
                  <p>St. Petersburg, FL</p>
                </div>
                <p class="list-item-date">April 25, 2019</p>
              </a>
            </li>
            <li class="list-item">
              <a href="http://www.innovatecarolina.org/innovate-carolina-conference/" class="list-item-link">
                <div class="list-item-details">
                  <h3>The Fallacy of Digital Transformation</h3>
                  <h4>Innovate Carolina</h4>
                  <p>Charlotte, NC</p>
                </div>
                <p class="list-item-date">March 29, 2019</p>
              </a>
            </li>
            <li class="list-item">
              <a href="https://confoo.ca/en/yul2019" class="list-item-link">
                <div class="list-item-details">
                  <h3>Rapid Prototyping with Vue.js</h3>
                  <h4>Confoo</h4>
                  <p>Montreal, Canada</p>
                </div>
                <p class="list-item-date">March 15, 2019</p>
              </a>
            </li>
          </ul>
        </li>
        <li clas="list-group-item">
          <p class="list-group-item-year">2018</p>
          <ul class="list">
            <li class="list-item">
              <a href="#" class="list-item-link">
                <div class="list-item-details">
                  <h3>Projects are Easy. People are Hard.</h3>
                  <h4>FITC</h4>
                  <p>Toronto, Canada</p>
                </div>
                <p class="list-item-date">April 10, 2018</p>
              </a>
            </li>
            <li class="list-item">
              <a href="#" class="list-item-link">
                <div class="list-item-details">
                  <h3>Rapid Prototyping with Vue.js</h3>
                  <h4>Front-End Design Conference</h4>
                  <p>St. Petersburg, FL</p>
                </div>
                <p class="list-item-date">April 28, 2018</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Speaking'
  }
}
</script>

<style lang="scss">
.list {
  border-top: 1px solid #242a3a;
  list-style: none;
  margin-left: -3%;
  padding-left: 0;

  &-item-link {
    color: #fff;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    padding: 6% 3%;
    text-decoration: none;
    &:hover,
    &:focus {
      background-color: #242a3a;
    }
  }
  &-item {
    border-bottom: 1px solid #242a3a;
    &-details {
      padding-left: 5%;
      width: 70%;
      p {
        display: inline;
      }
    }
    &-date,
    &-image {
      width: 30%;
    }
    p {
      font-size: .9em;
      margin: 0;
    }
    h3 {
      margin-bottom: 1.2em;
    }
    h4 {
      display: inline;
      &:after {
          content: " ,"
      }
    }

  }
}

.list-group {
  list-style: none;
  padding-left: 0;
  &-item {
    &-year {
      margin: 40px 0 10px;
    }
  }
  .list {
    &-item-link {
      font-size: .8em;
      padding-top: 3%;
      padding-bottom: 3%;
    }
    h3 {
      margin-bottom: .3em;
    }
    p {
      font-size: 1em;
    }
  }
}

.upcoming-events {
  margin-bottom: 80px;
}
</style>