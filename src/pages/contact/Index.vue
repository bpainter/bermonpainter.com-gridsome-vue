<template>
  <Layout>
    <h1>Contact Me</h1>
    <form 
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/contact/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="contact-form"
    >
      <input type="hidden" name="form-name" value="BermonPainter.com Contact" />
      <label hidden>Don’t fill this out: <input name="bot-field" /></label>

      <ul class="fields">
        <li class="field-item">
          <label for="name" class="label" >Your name</label>
          <input type="text" name="name" v-model="formData.name" />
        </li>
        <li class="field-item">
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="formData.email" />
        </li>
        <li class="field-item">
          <label for="message">Your message</label>
          <textarea name="message" v-model="formData.message"></textarea>
        </li>
      </ul>

      <button type="submit">Send Message</button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },

  data() {
    return {
      formData: {},
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/contact/success'))
      .catch(error => alert(error))
    }
  }
}
</script>

<style lang="scss">
%cf:before,
%cf:after {
    content: " ";
    display: table;
}
%cf:after {
    clear: both;
}
.contact-form {
  @extend %cf;
  padding-bottom: 6%;
  button {
    border: 0;
    background-color: #930050;
    color: #fff;
    display: inline-block;
    float: right;
    padding: 15px 30px;
    &:hover,
    &:focus {
      background-color: #d80065;
    }
  }
}
.fields {
  border-top: 1px solid #242a3a;
  list-style: none;
  padding-left: 0;
}
.field-item {
  border-bottom: 1px solid #242a3a;
  padding: 3% 3%;
  label {
    display: block;
    margin-bottom: 4px;
  }
  textarea {
    height: 200px;
    width: 100%;
  }
}
</style>