<template>
  <Layout>
    <h1>Styleguide</h1>

    <section class="sg">
      <h2>Purpose</h2>
      <p>The purpose is the site is to primarily showcase upcoming speaking engagementments, community activity, and misc. thoughts in the form of blog posts.</p>
    </section>

    <section class="sg">
      <h2>Target Audience</h2>
      <p>Conference organizers, UX designers, technologists, people coming into the tech industry.</p>
    </section>

    <section class="sg">
      <h2>Sitemap</h2>
      <p>The sitemap represents what the final version will become. The current site is a reflection of version 0.1.</p>
      <g-image src="~/assets/styleguide/wireframe-sitemap.png" alt="Sitemap illustration"/>
    </section>

    <section class="sg">
      <h2>Wireframes</h2>
      <g-image src="~/assets/styleguide/wireframe-homepage.png" alt="Homepage Wireframe"/>
      <g-image src="~/assets/styleguide/wireframe-speaking.png" alt="Conferences Wireframe"/>
    </section>

    <section class="sg">
      <h2>Color Pallette</h2>
      <h3>Primary Colors</h3>
      <ul class="color-palette">
        <li>
          <div class="color" style="background-color: #930050"></div>
          <p>Name: Base Purple<br/>
             Hex: #930050<br/>
             RGB: (147, 0, 80)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #470040"></div>
          <p>Name: Dark Purple<br/>
             Hex: #470040<br/>
             RGB: (71, 0, 64)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #D80065"></div>
          <p>Name: Light Purple<br/>
             Hex: #D80065<br/>
             RGB: (216, 0, 101)
          </p>
        </li>
      </ul>

      <h3>Muted Colors</h3>
      <ul class="color-palette">
        <li>
          <div class="color" style="background-color: #4A5877"></div>
          <p>Name: Base Gray<br/>
             Hex: #4A5877<br/>
             RGB: (74, 88, 119)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #242A3A"></div>
          <p>Name: Dark Gray<br/>
             Hex: #242A3A<br/>
             RGB: (36, 42, 58)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #1A202B"></div>
          <p>Name: X-dark Gray<br/>
             Hex: #1A202B<br/>
             RGB: (26, 32, 43)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #677798"></div>
          <p>Name: Light Gray<br/>
             Hex: #677798<br/>
             RGB: (103, 119, 152)
          </p>
        </li>
        <li>
          <div class="color" style="background-color: #8F9EBE"></div>
          <p>Name: X-light Gray<br/>
             Hex: #8F9EBE<br/>
             RGB: (143, 158, 190)
          </p>
        </li>
      </ul>
    </section>

    <section class="sg">
      <h2>Typography</h2>

      <ul class="typography">
        <li>
          <h1>Primary Header <br /><small>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />0 1 2 3 4 5 6 7 8 9</small></h1>
        </li>
        <li>
          <h2>Secondary Header <br /><small>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />0 1 2 3 4 5 6 7 8 9</small></h2>
        </li>
        <li>
          <p><b>Body</b> <br /><small>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />0 1 2 3 4 5 6 7 8 9</small></p>
        </li>
      </ul>
    </section>
    

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Styleguide'
  }
}
</script>

<style lang="scss">
.sg {
  border-bottom: 1px solid #242A3A;
  margin-bottom: 20px;
  padding-bottom: 20px;
  > h2,
  > h3 {
    font: bold 100% Open Sans;
  }
  img {
    width: 100%;
  }
  .color-palette {
    display: flex;
    font-size: .8em;
    list-style: none;
    margin-bottom: 40px;
    padding-left: 0;
    .color {
      border: 1px solid #242A3A;
      height: 100px;
      width: 100px;
    }
    li {
      margin-right: 10px;
    }
  }
  .typography {
    list-style: none;
    padding-left: 0;
    h1, h2 {
      line-height: 1;
      margin-bottom: 20px;
    }
    small {
      font-size: .7em;
    }
  }
}
</style>
